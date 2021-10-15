import { Moeda } from "./data.js";
import { UI } from "./UI.js";

const btn = document.querySelector('button');
const entrada = document.querySelector('#entradaValor')

const saida = document.querySelector('#saidaValor')


const moedas = new Moeda();
const ui = new UI();

iniciar()

function iniciar() {
    moedas.enviarJSON()
        .then(resultados => ui.desenharSelects(resultados))
        .catch(erro => console.log(erro))
}


btn.addEventListener('click', e => {
    let [valor1, valor2] = [...ui.pegarValores()]

    moedas.converterValores(entrada.value, valor1, valor2)
        .then(resultados => { saida.value = Object.values(resultados.rates)[0].toFixed(2) })
        .catch(erro => {
            saida.value = entrada.value;
        })

    e.preventDefault();
})