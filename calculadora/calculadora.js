var operandouno;
var operandodos;
var operacion;

function init (){

    //atrapar los números
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var cero = document.getElementById('cero');

    // atrapar los operadores
    var sum = document.getElementById('sum');
    var subtract = document.getElementById('subtract');
    var multiply = document.getElementById('multiply');
    var divide = document.getElementById('divide');
    var potencia = document.getElementById('potencia');
    var resto = document.getElementById('resto');
    var equal = document.getElementById('equal');

    //eventos por cada número
    one.onclick = function(e){
        result.textContent = result.textContent + "1";
    }

    two.onclick = function(e){
        result.textContent = result.textContent + "2";
    }

    three.onclick = function(e){
        result.textContent = result.textContent + "3";
    }

    four.onclick = function(e){
        result.textContent = result.textContent + "4";
    }

    five.onclick = function(e){
        result.textContent = result.textContent + "5";
    }

    six.onclick = function(e){
        result.textContent = result.textContent + "6";
    }

    seven.onclick = function(e){
        result.textContent = result.textContent + "7";
    }

    eight.onclick = function(e){
        result.textContent = result.textContent  + "8";
    }

    nine.onclick = function(e){
        result.textContent = result.textContent  + "9";
    }

    cero.onclick = function(e){
        result.textContent = result.textContent  + "0";
    }

    reset.onclick = function(e){
        resetear();
    }

    sum.onclick = function(e){
        operandouno = result.textContent;
        operacion = '+';
        limpiar ();
    }

    subtract.onclick = function(e){
        operandouno = result.textContent;
        operacion = "-";
        limpiar(); 
    }


    multiply.onclick = function(e){
        operandouno = result.textContent;
        operacion = "*";
        limpiar(); 
    }

    divide.onclick = function(e){
        operandouno = result.textContent;
        operacion = "/";
        limpiar(); 
    }

    potencia.onclick = function(e){
        operandouno = result.textContent;
        operacion = "potencia";
        limpiar(); 
    }

    resto.onclick = function(e){
        operandouno = result.textContent;
        operacion = "resto";
        limpiar(); 
    }

    equal.onclick = function(e){
        operandodos = result.textContent;
        resolver(); 
    }

}

function limpiar (){
    result.textContent = '';
}

function resetear (){
    result.textContent = '';
    operandouno = 0;
    operandodos = 0;
    operacion = '';
}

function resolver (){
    var res = 0;
    switch (operacion) {
        case '+': 
        res = parseFloat(operandouno) + parseFloat(operandodos);
        break;

        case '-':
        res = parseFloat(operandouno) - parseFloat(operandodos);
        break;

        case '*':
        res = parseFloat(operandouno) * parseFloat(operandodos);
        break;

        case '/':
        res = parseFloat(operandouno) / parseFloat(operandodos);
        break;

        case 'potencia':
        res = parseFloat(operandouno) ** parseFloat(operandodos);
        break;

        case 'resto':
        res = parseFloat(operandouno) % parseFloat(operandodos);
        break;
    }

    resetear();
    result.textContent = res;
    
}



   


