//Verifica o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    let dia;
    switch (number) {
        case 1:
            return "Domingo";
            break;
        case 2:
            return "Segunda-feira";
            break;
        case 3:
            return "Terça-feira";
            break;
        case 4:
            return "Quarta-feira";
            break;
        case 5:
            return "Quinta-feira";
            break;
        case 6:
            return "Sexta-feira";
            break;
        case 7:
            return "Sábado";
            break;

        default:
            return 'Número inválido';
    }
    return dia;

};

console.log(retornaDiaSemana(1))

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
    let preco;
    switch (code) {
        case "A":
            preco = 10.99;
            break;
            
        case "B":
            preco = 5.99;
            break;
            
        case "C":
            preco = 14.99;
            break;
            
        default:
            preco = "Código inválido!";
    }       
    return preco;          
}

function retornaCategoriaProduto(type) {
    switch (type) {
        case 'Eletrônicos':
            return "Tecnologia";
            break;

        case 'Roupas':
            return "Moda";
            break;

        case 'Alimentos':
            return "Alimentação";
            break;

        default:
            return "Categoria desconhecida";
    }
};
console.log(retornaCategoriaProduto('Eletrônicos'))

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };
