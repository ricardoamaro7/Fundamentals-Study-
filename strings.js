const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
// unicoder <site
console.log(escola.indexOf('3'))
console.log(escola.substring(1))

console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+ escola +"!")

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))///\w/g << regex curso
console.log('ana,maria,pedro'.split(','))