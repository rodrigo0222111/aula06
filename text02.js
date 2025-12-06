//1// tirar espaços(início e fim) e deixar tudo em maiùsculo e mostrar quantidade de letras
let nome = '        wilson neto  ';
let nomeFormatado = nome.trim().toLocaleUpperCase();
console.log(nomeFormatado + ' tem '+ nomeFormatado.replace(/ /g,'').length + 'letras')

//escrever uma frase e deixaá-la toda em minúsculo

let frase ='AULA DE PROGRAMAÇÃO';
let fraseMinúscula = frase.toLowerCase();
console.log (fraseMinúscula);

let compras = [' pão', 'açucar', 'leite', ' ovos', 'café']
console.log(compras)
compras.push('laranja')
console.log(compras)
compras.shift()
console.log(compras)
let temleite = compras.includes('leite')
console.log(temleite)

console.log(compras.length)