let imcForm = document.getElementById('form');

imcForm.addEventListener('submit', event =>{

    event.preventDefault();

    let peso = document.getElementById('kilos').value;
    let altura = document.getElementById('altura').value;

    if(peso && altura > 0){

        imc = calc(peso, altura);
        document.getElementById('imc').value = parseInt(imc).toFixed(2);
        console.log('Deu certo');

    }else{
        error = 'Dados invalidos';
        document.getElementById('imc').value = error;
    }

});

function calc(peso, altura){

    altura = altura/100;

    return (peso / (altura * altura));

}