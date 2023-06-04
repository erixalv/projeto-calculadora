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
  let tempResult = parseFloat(expressaoArray[0]);

  for (let i = 1; i < expressaoArray.length; i += 2) {
    const operador = expressaoArray[i];
    const num = parseFloat(expressaoArray[i + 1]);

    if (operador === '+') {
      tempResult += num;
    } else if (operador === '-') {
      tempResult -= num;
    } else if (operador === '*') {
      tempResult *= num;
    } else if (operador === '/') {
      tempResult /= num;
    }
  }

  resultado.innerHTML = tempResult;
  expressao = tempResult.toString();
}
