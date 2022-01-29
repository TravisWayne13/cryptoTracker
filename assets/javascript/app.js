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
      console.log(news.data[0])
    })
    .catch(e => {
      console.log(e)
    })

fetch('https://data.messari.io/api/v1/assets')
    .then(response => response.json())
    .then(assets => {
      console.log(assets)
    })

