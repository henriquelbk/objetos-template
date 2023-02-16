const estudante = {
    nome: 'felicio',
    sobrenome: 'nogueira',
    numeroDeMatricula: 72348190,
    notasDoSemestre: [4.5, 6, 7.8, 3.4, 9.9]
}

estudante.modulo = 3

/*
imprima no console a propriedade nome
imprima no console a segunda nota da pessoa no semestre
imprima o módulo em que a pessoa está
*/

console.log(estudante.nome)
console.log(estudante.notasDoSemestre[1])
console.log(estudante.modulo)

// Copiando com o Spread

const copiaEstudante = {
    ...estudante
}

/*
alterar o nome para Astrodev;
adicionar a nota 9 às notas do semestre;
alterar o módulo para o próximo módulo;
imprimir o objeto com as atualizações.
*/

copiaEstudante.nome = 'Astrodev'
copiaEstudante.notasDoSemestre.push(9)
copiaEstudante,modulo = 4

console.log(copiaEstudante)

// Objeto contenedor

const estudantesLabenu = []

estudantesLabenu.push(estudante, copiaEstudante)

// exercicio de fixacao

const carrinho = {
    nome: 'fernando',
    formaDePagamento: 'cartao de credito',
    endereco: 'rua ainda'
}

carrinho.compras = [
    {
    nome: 'play5',
    preco: 3400,
    quantidade: 1
    },
    {
    nome: 'play3',
    preco: 400,
    quantidade: 1
    }
]

const quantidadeProdutos = carrinho.compras
console.log(quantidadeProdutos.length)

const carrinhoPresente = {
    ...carrinho,
    nome: 'rogerio ceni',
    formaDePagamento: 'pix'
}

console.log(carrinho)
console.log(carrinhoPresente)