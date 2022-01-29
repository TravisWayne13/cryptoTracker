fetch('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(e => {
      console.log(e)
    })

fetch('https://data.messari.io/api/v1/news')
    .then(response => response.json())
    .then(news => {
      document.getElementById('news').innerHTML = `
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${news.data[0].title}<i class="material-icons right">more_vert</i></span>
      <p><a href="${news.data[0].url}">Visit Article</a></p>
    </div>
    <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${news.data[0].title}<i class="material-icons right">close</i></span>
      <p>${news.data[0].content}</p>
    </div>
  </div>
      `
      console.log(news.data[2])
    })
    .catch(e => {
      console.log(e)
    })

fetch('https://data.messari.io/api/v1/assets')
    .then(response => response.json())
    .then(assets => {
      console.log(assets)
    })

