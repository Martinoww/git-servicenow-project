function halfString(string) {
    var inputField = document.getElementById('half-string-result-input');
    var ulElement = document.getElementById('half-string-result-list');
    if(inputField.value.trim() == ''){
        ulElement.innerHTML = '';

        return;
    }
    string = inputField.value.trim();
    
    var result = string.substring(Math.floor(string.length / 2));
    ulElement.innerHTML = '<li class="resul-list-item">'+ result +'</li>';
    return;
}

function rootNumber(number){
    var inputField1 = document.getElementById('square-num-result-input');
    var ulElement1 = document.getElementById('square-num-result-list');
    if(inputField1.value.trim() == ''){
        ulElement1.innerHTML = '';

        return;
    }
    number = Number(inputField1.value.trim());
    var result = Math.sqrt(number);
    ulElement1.innerHTML = '<li class="resul-list-item">'+ result +'</li>';

    return;
}

function listOfSqrtNums(listOfNums){
    var inputField2 = document.getElementById('square-num-arr-result-input');
    var ulElement2 = document.getElementById('square-num-arr-result-list');
    if(inputField2.value.trim() == ''){
        ulElement2.innerHTML = '';

        return;
    }
    listOfNums = inputField2.value.trim().split(',');
    
    var listOfSqrtNums = ''
    for(var i = 0; i<listOfNums.length;i++){
        if(listOfSqrtNums.length == 0){
            listOfSqrtNums = listOfSqrtNums + Math.sqrt(Number(listOfNums[i])).toFixed(2); 
        }
        listOfSqrtNums = listOfSqrtNums + ', ' + Math.sqrt(Number(listOfNums[i])).toFixed(2); 
    }
    var result = listOfSqrtNums;
    ulElement2.innerHTML = '<li class="resul-list-item">'+ result +'</li>';
    return;
}

function isPrime(num) { 
    var inputField3 = document.getElementById('isPrime-result-input');
    var ulElement3 = document.getElementById('isPrime-result-list');
    if(inputField3.value.trim() == ''){
        ulElement3.innerHTML = '';
        return;
    }
    num = Number(inputField3.value.trim());
    if(num < 2 || Number.isNaN(num)){
        inputField3.value = '';
        ulElement3.innerHTML = '';
        return;
    }
    var counter = 0;
    for(var i= 1; i<=num; i++){
        if(num % i == 0){
            counter++;
        }
    }

    var result = counter <= 2 ? 'true' : 'false';
    ulElement3.innerHTML = '<li class="resul-list-item">'+ result +'</li>';
}


function isPrimeTwin() {
    var inputField4 = document.getElementById('isPrime-twin-result-input');
    var ulElement4 = document.getElementById('isPrime-twin-result-list');
    if(inputField4.value.trim() == ''){
        ulElement4.innerHTML = '';
        return;
    }
    
    var [num1, num2] = inputField4.value.trim().split(',');
    num1 = Number(num1);
    num2 = Number(num2);

    if((num1 < 2 && num2 < 2) || (Number.isNaN(num1) && Number.isNaN(num2))){
        inputField4.value = '';
        ulElement4.innerHTML = '';
        return;
    }

    if(Math.abs(num1 - num2) != 2){
        ulElement4.innerHTML = '<li class="resul-list-item">false</li>';
    }
    var isNum1Prime = isPrimeChecker(num1);
    var isNum2Prime = isPrimeChecker(num2);
    if(isNum1Prime && isNum2Prime){
        ulElement4.innerHTML = '<li class="resul-list-item">true</li>';
    }

}

function isPrimeChecker(num){
    var counter = 0;
    for(var i= 1; i<=num; i++){
        if(num % i == 0){
            counter++;
        }
    }

    var result = counter <= 2 ? true : false;
    return result;
}