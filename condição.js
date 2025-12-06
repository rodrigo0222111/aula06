//  
let senhaCorreta = '1234';
let senhaDigitada = '1234';

if(senhaCorreta === senhaDigitada){
    console.log('Acesso permitido')
}else{ 
    console.log('Senha incorreta')
}

//criar um programa que valide se a pessoa terá desconto na entrada do cinema.Criar 3 variáveis (idade , estudante , precoIngresso). Fazer condição para dar 50% de desconto caso a condição 'estudante' seja true.

let idade = 17
let estudante = true
let precoIngresso = 30

if(estudante === true  && idade < 18 || idade > 60){
    precoIngresso = precoIngresso / 2 ;
    
    
    console.log(`Preço com desconto : R$ ${precoIngresso}`)
}else{ 
    console.log(`Preço normal: R$ ${precoIngresso}`)

}

// calculdora de imc

let peso = 70; 
let altura = 1.76;
let imc = peso / (altura * altura);

console.log(`Seu IMC é: `+ imc.toFixed(2));

if(imc < 18.5){
console.log(`Classificação abaixo do peso`)
}else if (imc >=18.5 && imc <=24.9){
    console.log('Classeficação peso normal')
}else if(imc >= 25 && imc < 29.9){
    console.log('classificação sobrepeso')
}else{
    console.log('Classificação obesidade')
}
