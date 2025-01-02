const InterfaceComUsuario = require("./InterfaceComUsuario.js")
const Cotacao = require("./Cotacao.js")

class App {
    async run() {
        try {
            const interfaceComUsuario = new InterfaceComUsuario()
            const moeda = await interfaceComUsuario.question("Qual a moeda?")
            const cotacao = new Cotacao(moeda)
            await cotacao.listarNaTela()
        } catch (erro) {
            console.error(`Ocorreu um erro na execução do programa: ${erro?.message ?? erro}`)
        }
    }
}
new App().run()