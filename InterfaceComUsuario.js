const readline = require('node:readline')
const process = require('node:process')

class InterfaceComUsuario {
    async question(enunciado) {
        return new Promise(
            function(resolve) {
                const parametrosDaInterface = {
                    input: process.stdin,
                    output: process.stdout,
                }
            
                const interfaceComUsuario = readline.createInterface(parametrosDaInterface)
            
                interfaceComUsuario.question(
                    enunciado + " ",
                    function (resposta) {
                        resolve(resposta)
                        interfaceComUsuario.close();
                    }
                );
            }
        );
    }
}

module.exports = InterfaceComUsuario