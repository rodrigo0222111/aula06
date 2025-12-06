//função para calcular área de um quadrado
//função para calcular área de um retângulo
//função para converter Celsius em Fahrenheit
//função para formatar preço com duas cass decimais

//Todas com retorn e console fora da função 

//01
function dobro(a){
    let resultado= a*a
    return resultado
}
let resultado = dobro(8)
 console.log(`a área do quadrado vai ser = ${resultado}`)

//02

function areaderetangulo(b,h){
    
    return b*h
}
console.log ('area do retangulo var ser = ', areaderetangulo(9,9));

//03 

function CelsiusParaFahrenhit(c,f){
   let resultado = c* 1.8 + 32 
    return resultado
}
console.log("A  temperatura que vc quer é = ", CelsiusParaFahrenhit(9))

//04

function formatar(A){
    return  A.toFixed(2)
}
console.log (`O seu valor será = ,  ${formatar(9555.088868686860)}`)

