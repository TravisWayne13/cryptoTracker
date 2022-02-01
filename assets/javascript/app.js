let currencyList = []
let favList = []

// turns numbers into dollar format
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const renderCurrencyList = () => {
  for (let i = 0; i < 19; i++) {
    let tFH = currencyList[i].tf
    if (tFH > 0) {
      tFH = tFH.toString().slice(0, 5) + '%'
      color = 'green'
    } else {
      tFH = tFH.toString().slice(0, 5) + '%'
      color = 'red'
    }
    let list = document.createElement('div')
    list.innerHTML = `
    <ul class="collection">
    <li class="collection-item avatar">
    <a class="secondary-content"><i data-target="info" 
    data-name="${currencyList[i].name}" 
    data-price="${currencyList[i].price}" 
    data-allTimeHi="${currencyList[i].alltimehigh}" 
    data-cycleLow="${currencyList[i].cyclelow}"
    data-mcap="${currencyList[i].mcap}"
    data-tf="${tFH}"
     class="material-icons">grade</i></a>
    <span class="title">${currencyList[i].name}</span>
    <p>Price: ${currencyList[i].price} <br>
       All time high: ${currencyList[i].alltimehigh} <br>
       Cycle Low: ${currencyList[i].cyclelow} <br>
       MCAP: ${currencyList[i].mcap} <p style="color:${color}" class="tf">24H: ${tFH}<p>
    </p>
    </li>
    </ul>
    `
    document.getElementById('currency').append(list)
  }
}

// fetch request getting news story and posting card elem
fetch('https://data.messari.io/api/v1/news')
    .then(response => response.json())
    .then(news => {
      for (i = 0; i <= 5; i++) {
        let newsList = document.createElement('ul')
        newsList.innerHTML = `
        <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${news.data[i].title}<i class="material-icons right">more_vert</i></span>
          <p><a href="${news.data[i].url}">Visit Article</a></p>
        </div>
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${news.data[i].title}<i class="material-icons right">close</i></span>
          <p>${news.data[i].content}</p>
        </div>
      </div>
        `
        document.getElementById('news').append(newsList)
        // console.log(news.data[i])
      }
    })
    .catch(e => {
      console.log(e)
    })

// this fetch gets all info about different cryptos
const myFetch = () => {
  fetch('https://data.messari.io/api/v1/assets')
    .then(response => response.json())
    .then(assets => {
      for (i = 0;i <= 19; i++ ) {
// Variables for all currency info
        let price = assets.data[i].metrics.market_data.price_usd
        let lowPrice = assets.data[i].metrics.cycle_low.price
        let highPrice = assets.data[i].metrics.all_time_high.price
        let MCAP = assets.data[i].metrics.marketcap.current_marketcap_usd
        let MCAPRounded = Math.round(MCAP)

        currencyList.push({
          name: assets.data[i].name,
          price: formatter.format(price),
          alltimehigh: formatter.format(highPrice),
          cyclelow: formatter.format(lowPrice),
          mcap: MCAPRounded.toString().slice(0, 3) + 'B',
          tf: assets.data[i].metrics.market_data.percent_change_usd_last_24_hours 
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }

myFetch()
setTimeout(renderCurrencyList, 1000)

document.addEventListener('click', event =>{
  if (event.target.className === 'material-icons') {
    let currency = event.target.dataset
    favList.push(currency)
    localStorage.setItem(`currency`, JSON.stringify(favList))
    console.log(favList)
  }
})
// console.log(currencyList)
  // window.addEventListener('load', () => {
  //   const fetchInterval = 1000
  
  //   setInterval(renderCurrencyList, fetchInterval)
  
  // })




