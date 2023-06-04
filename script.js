let resultado = document.getElementById('res');
let expressao = '';

function digitar(tecla) {
  expressao += tecla;
  resultado.innerHTML = expressao;
  resultado.style.paddingRight = '5px';
  resultado.style.overflow = 'hidden';
}

function limpar() {
  expressao = '';
  resultado.innerHTML = '0';
}

function calcular() {
const expressaoArray = expressao.split(/([+\-*/])/);
const finalResult = eval(expressao);

resultado.innerHTML = finalResult;
expressao = finalResult.toString();
}




