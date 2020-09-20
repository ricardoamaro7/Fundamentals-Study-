let valor // não nicializa 
console.log(valor)

valor = null // ausência de valor 
console.log(valor)
//console.log(valor.toString('texto')) //erro!

const produto = {}
console.log(produto.preço)
console.log (produto)
produto.preço = 3.50
console.log(produto)

produto.preço = undefined // aviter atriburir undefined
console.log(!!produto.preço)

produto.preço = null //sem preço
console.log(!!produto.preço)
console.log(produto)
// caso queira zerar a refrência colocar null.
