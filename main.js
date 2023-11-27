function somatorioDivisiveis(n) {
  let somatorio = 0;
  for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          somatorio += i;
      }
  }
  return somatorio;
}

function testarFuncao() {
  let numero = document.getElementById('numero').value;
  let resultado = somatorioDivisiveis(parseInt(numero));
  document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}