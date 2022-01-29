// The fetch assets has all of this info and more...------------------------------------------

// fetch('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//     })
//     .catch(e => {
//       console.log(e)
//     })
// ----------------------------------------------------------------------------------------------------

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
        console.log(news.data[i])
      }
    })
    .catch(e => {
      console.log(e)
    })

// this fetch gets all info about different cryptos
fetch('https://data.messari.io/api/v1/assets')
    .then(response => response.json())
    .then(assets => {
      console.log(assets)
    })

