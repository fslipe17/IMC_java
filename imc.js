const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('result');

    if(nome !=='' && altura !=='' && peso !=='' ){
        const valorIMC = (peso / (altura*altura)).toFixed(1);
        let classificacao ='';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso';

        }else if(valorIMC < 25){
            classificacao = 'Peso Ideal. Parabéns!!!';

        }else if(valorIMC < 30){
            classificacao = 'acima do peso. Parabens!!! Voce parece a thais carla';

        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1.';

        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau 2';

        }else{
            classificacao = 'com obesidade grau 3. Parabens!!! Voce parece a thais carla!!';
        
        }

        result.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}`;
    }else{
        result.textContent = 'preencha todos os campos!!!!!';
    }
}
calcular.addEventListener('click', imc)