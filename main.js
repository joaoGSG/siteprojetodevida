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

const contadores = document.querySelectorALL ("Contador");
const tempoObjetivo1 = new Date ("2025-12-05t00;00:00");