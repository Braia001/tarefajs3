function somaNumeros(n) {
    if (n == 1) {
      return 1;
    } else {
      return n + somaNumeros(n - 1);
    }
  }
  console.log(somaNumeros(5));
  
  // Verifica se um número é par
  function ehPar(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(ehPar(4));

// Calcula a sequência de Fibonacci para um dado número
    function fibonacci(n) {
        if(n <3) return 1;
        return fibonacci(n - 1) + fibonacci (n - 2);
    
     }
    console.log(fibonacci(6))
    console.log(fibonacci(9))
  
  
  module.exports = { somaNumeros, ehPar, fibonacci };
