//inserir um consoloe.log para ser o 'titulo'
//criar 3 variáveis (nome,anoNacimento , anoAtual)
//criar uma função sem parâmetro que calcula idade, usando return
//chamar a função e mostrar o resultado
//_ _ _ _ _ _ _ _ _ _ 

console.log(" Calculo de idades ");
let nome = "Rodrigo" ;
let anodeNacimento = 2008;
let anoAtual = 2025;
 
function Calculo(){
   
    return anoAtual-anodeNacimento
};
console.log(`Meu ${nome} e tenho  ${Calculo()} anos.`);


//criar uma função com parâmetros para fazer o mesmo cálculo de idade da questão acima
//__ _ _ _ __  _ __ _ _ _ 

function idade(anoAtual,anodeNacimento){
    return anoAtual - anodeNacimento
}
console.log('rodrigo tem : ' + idade(2025,2008), 'anos')


//criar uma função com parâmetros e return para mostrar a quantidade de DIAS vividos
// __ _ ___  _ _ _ _ _ _ _ _ _ _ 

function divasvividos(anoAtual, anodeNacimento){
    return(anoAtual - anodeNacimento) * 365

}
console.log('Rodrigo tem: ' + divasvividos(2025,2008), ' dias vividos')
//criar uma função para verificar se é maior de idade(com if e else)

function maioridade(anoAtual, anodeNacimento){
    let Calculo =anoAtual - anodeNacimento
    if(Calculo >= 18){
    return('Você  é maior de idade')
   } else {
    return('Você não é maior de idade ')
   }
}
console.log(maioridade(2025,2008))
