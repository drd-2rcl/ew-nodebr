const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-c, --cadastrar', "Cadastrar um heroi")
    .option('-l, --listar', "Listar um heroi")
    .parse(process.argv)
    const heroi = new Heroi(Commander)
    
    try {
      if(Commander.cadastrar) {
        const resultado = await Database.cadastrar(heroi)
        if(!resultado) {
          console.error('Heroi não foi cadastrado!')
          return;
        }
        console.log('Heroi cadastrado com sucesso!')
      }
      if (Commander.listar) {
        const resultado = await Database.listar()
        console.log(resultado)
        return;
      }
    } catch (error) {
      console.error('DEU RUIM', error)
    }
}

main()