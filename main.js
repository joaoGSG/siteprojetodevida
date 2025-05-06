const botoes = document.querySelectorALL (".botao");

for (let i = 0; i <botoes.length; i++) {
    botoes [1].onclick = function () {
     for (let j = 0; j <botoes.length; j++) {
         botoes[j].classList.remove("ativo");

    }
     botoes(i).classList.add("Ativo");
    };
}
