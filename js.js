function calcula_imc(){
    var altura = eval(document.imc_Form.naltura.value);
    var massa = eval(document.imc_Form.nmassa.value);
    var altmassa = massa / altura;
    var calculo = altmassa / altura;
    if (calculo < 18.5) {
        alert("Você está muito abaixo do peso. Massa corporal: " + calculo);
    } else if (calculo >= 18.5 && calculo < 24.9){
        alert("Você está abaixo do peso. Massa corporal: " + calculo);
    } else if (calculo >= 25 && calculo < 29.9){
        alert("Você está com o corpo ideal. Massa corporal: " + calculo);
    } else if (calculo >= 30 && calculo < 39.9){
        alert("Você está um pouco acima do peso. Massa corporal: " + calculo);
    } else if (calculo >= 40) {
        alert("Você está muto acima do peso. Massa corporal:" + calculo);
    }  
}
