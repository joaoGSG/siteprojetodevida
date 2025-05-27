const botoes = document.querySelectorALL (".botao");
const textos = document,querySelectorALL (".aba-conteudo");

for (let i = 0; i <botoes.length; i++) {
    botoes [1].onclick = function () {

     for (let j = 0; j <botoes.length; j++) {
         botoes[j].classList.remove("ativo");
    textos[j].classlist.remove("ativo");
    }

     botoes[i].classList.add("Ativo");
     textos[i].classlist.add("Ativo");
    };
}

const contadores = document.querySelectorAll ("contador");
const tempoObjetivo1 = new Date ("2026-10-05T00:00:00");
const tempoObjetivo2 = new Date ("2026-9-05T00:00:00");
const tempoObjetivo3 = new Date("2026-10-05T00:00:00");
const tempoObjetivo4 = new Date("2027-05-01T00:00:00");

const tempos= [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textContent = calculaTempo(tempoObjetivo);

function calculaTempo (tempoOBjetivo) {
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor (minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}

