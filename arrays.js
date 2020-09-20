const valores = [7.7, 8.9, 6.3, 9.2] // o array se intenfica por de []
console.log(valores[0], valores[03])
console.log(valores[4])

valores[4] = 10 // indice 
console.log(valores)
console.log(valores.length)

valores.push({id: 03}, false, null, 'teste')
console.log(valores)

console.log(valores.pop)
delete valores[0] // reitira valores.
console.log(valores)

console.log(typeof valores)