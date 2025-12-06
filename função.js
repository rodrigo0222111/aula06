//sem função 
console.log('===Bolo de chocolate===');
console.log('1. Misture os ingredientes');
console.log(' 2. Asse por 40 minutos ');
console.log('3. Decore com chocolate');

console.log('===Bolo de cenoura===');
console.log('1. Misture os ingredientes');//repetido
console.log(' 2. Asse por 40 minutos ');//repetido
console.log('3. Decore com cream chease');

//com função
function mostrarReceita(nome, decoracao){
    console.log('==='+ nome +'===');
    console.log('1. Misture os ingredientes');
    console.log(' 2. Asse por 40 minutos ');
    console.log('3. Decore com '+ decoracao);
}

mostrarReceita('Bolo de chocolate', ' cocolate')
mostrarReceita('Bolo de cenoura', ' cream chease')
mostrarReceita('bolo de limão', ' limão')