export class Moeda {
    constructor() {
        this.apiMoeda = 'api.frankfurter.app';
    }
    async enviarJSON() {
        const resposta = await fetch(`https://${this.apiMoeda}/currencies`);

        const respostaValores = resposta.json();

        return respostaValores
    }
    async converterValores(valor, moeda1, moeda2) {

        if (moeda1 != moeda2) {
            const resposta = await fetch(`https://${this.apiMoeda}/latest?amount=${valor}&from=${moeda1}&to=${moeda2}`);

            const valorDaResposta = resposta.json();

            return valorDaResposta
        }
    }
}