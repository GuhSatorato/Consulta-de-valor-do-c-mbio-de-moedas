# Consulta de valor do câmbio de moedas

Este programa permite consultar o valor de câmbio de uma moeda específica utilizando a API da Binance.

## Como Funciona

O programa solicita ao usuário a moeda desejada e, em seguida, exibe a cotação dessa moeda em relação a outras moedas disponíveis na plataforma Binance.

### Arquivos Principais

- **App.js**: Controla a execução do programa, interage com o usuário e exibe as cotações.
- **InterfaceComUsuario.js**: Responsável por interagir com o usuário via terminal e obter a moeda desejada.
- **Cotacao.js**: Faz a requisição à API da Binance e exibe a cotação das moedas.

## Requisitos

- Node.js (versão 14 ou superior) - Para executar o código JavaScript no ambiente de backend.
- NPM (Node Package Manager) - Para gerenciar as dependências do projeto
- Se você ainda não tiver o Node.js instalado, pode baixá-lo em: https://nodejs.org. O NPM é instalado automaticamente junto com o Node.js.

## Como Usar

1. Clone o repositório para seu ambiente local.
2. Instale as dependências com o comando:
   ```bash
   npm install
   ```
3. Execute o programa com:
   ```bash
   node App.js
   ```
   Insira o código da moeda (ex: USD, EUR, BRL) quando solicitado.
   O programa exibirá a cotação da moeda escolhida.

Esse modelo serve como um guia básico para o repositório do GitHub e pode ser ajustado conforme a necessidade do projeto.
