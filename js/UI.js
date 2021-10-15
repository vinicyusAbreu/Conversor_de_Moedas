export class UI {
    constructor() {
        this.select1 = document.getElementById('selecao1');
        this.select2 = document.getElementById('selecao2');
    }
    desenharSelects(valor) {
        Object.keys(valor).forEach(resultado => {
            this.select1.innerHTML += `<option value="${resultado}">${resultado}</option>`
            this.select2.innerHTML += `<option value="${resultado}">${resultado}</option>`
        })

    }
    pegarValores() {
        return [this.select1.value, this.select2.value];
    }
}