const axios = require('axios')
const URL = `https://swapi.co/api/people`

// por que eu uso async? porque eu quero manipular promises internamente desta função

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  // o axios neste caso é uma promise, pra que eu consiga pegar a info na mesma linha
  // será preciso passar o await:
  const response = await axios.get(url)
  return response.data
}

obterPessoas('r2')
  .then(function (resultado) {
    console.log('resultado', resultado)
  })
  .catch(function (error) {
    console.error('DEU RUIM', error)
  })

module.exports = {
  obterPessoas
}