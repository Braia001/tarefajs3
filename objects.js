// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    const objectRetangulo = {    
      perimetro:
        2 * (retangulo.largura + retangulo.altura), 
    
        area:
        retangulo.largura * retangulo.altura
        }
    
    return objectRetangulo;   
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {

    const maior = 18;

    if (pessoa.idade  >= maior) {
        return true;
    } else {
        return false;
    };

    let qualquerPessoa = {
        nome: 'John',
        idade: 25,
        cidade: "New York",
    }

};
console.log(ehAdulto(qualquerPessoa));

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {

    return obj.nome + " " + obj.idade + " " + obj.cidade;
}

let obj = {
    nome: 'Bob',
    idade: 35,
    cidade: 'London',
};
console.log(concatenaValores(obj));

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };