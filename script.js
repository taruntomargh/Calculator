const display = document.getElementById("display");

function operation(value){
    switch(value){
        case 1: display.value = Math.PI; break;
        case 2: display.value = Math.exp(1); break;
        case 3: display.value *=display.value; break;
        case 4: display.value = 1/display.value; break;
        case 5: display.value = Math.abs(display.value); break;
        case 6: display.value = Math.exp(display.value); break;
        case 7: addToDisplay('%'); break;
        case 8: display.value = Math.sqrt(display.value); break;
        case 9: display.value = (function () {
            let num = display.value;
            let result = 1;
            if(display.value == 0 || display.value == 1)
                return 1;

            while(num > 1){
                result *= num;
                num--;
            }
            return result;
        })(); break;
        case 10: addToDisplay("**");  break;
        case 11: display.value = Math.pow(10, display.value); break;
        case 12: display.value = Math.log(display.value); break;
        case 13: display.value = 0-display.value; break;
    }
}

function addToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function clearSingleDigit(){
    display.value = display.value.slice(0, display.value.length - 1);
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = error;
    }
}

