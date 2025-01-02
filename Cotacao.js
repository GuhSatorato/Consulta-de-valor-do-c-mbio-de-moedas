module.exports = class Cotacao {
    _moeda
    _cotacoes

    constructor(moeda) {
        this._moeda = moeda.toUpperCase()
        console.info(`Moeda selecionada: ${this._moeda}`)
    }

    async listarNaTela() {
        await this.carregarCotacoes()
        for (const cotacao of this._cotacoes) {
            if (cotacao.symbol.endsWith(this._moeda)){
                const outraMoeda = cotacao.symbol.replace(this._moeda, "")
                console.info(`${outraMoeda} = ${parseFloat(cotacao.lastPrice).toFixed(2)} ${this._moeda}`)
            }
        }
    }

    async carregarCotacoes() {
        const url = "https://api2.binance.com/api/v3/ticker/24hr";            
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        this._cotacoes = await response.json();
    }
}

