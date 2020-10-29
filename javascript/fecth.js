// GET REQUEST
fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }

    response.json().then((data) => {
      console.log(data)
    })
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err)
  })

// POST REQUEST

url = 'localhost:3000/post-example'

fetch(url, {
  method: 'post',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: 'foo=bar&lorem=ipsum'
})
  .then(json)
  .then((data) => {
    console.log('Request succeeded with JSON response', data)
  })
  .catch((error) => {
    console.log('Request failed', error)
  })