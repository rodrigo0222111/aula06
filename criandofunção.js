//-1//Criar uma função de boas vindas (sem parâmetro) com dois consoles e frases
//chamar a função

function BoasVindas(){
   console.log('Boas vindas', '. Você foi convidado a ter um bom dia', '!' )
console.log(' Seja muito bem vindo a mais um dia fantastico', '. Vamos nos divertir') 
}
BoasVindas()

//2-//criar uma função com dois parâmetros.
//dentro da função criar uma variavel para calcular a soma de dois numeros e um console mostrando o resultado
//chame a função para mostrar vários resultados diferentes

function numeros(a,b){
   let resultado = a+b
    console.log(`a função vai ser =  ${resultado} `)
}

numeros(33,44)

//3-//criar uma função para retorar o dobro de um valor. Precisa ter 1 parâmetro. Uma variável dentro da função. Usar 'return' dentro da função. console.log vai fora da função.



function dobro(a){
    let resultado= a*2
   return resultado
}
let resultado = dobro(8)
 console.log(`a função vai ser = ${resultado}`)