var result='';
function cal(op) {
    let result2;
    switch (op) {
        case '0':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '1':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '2':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '3':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '4':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '5':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '6':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '7':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '8':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '9':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '+':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '-':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case 'x':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '/':
            result+=op;
            document.getElementById('result').innerHTML=result;
            break;
        case '=':
            result2=eval(result)
            document.getElementById('result').innerHTML=result2;
            break;
        case 'C':
            result='';
            document.getElementById('result').innerHTML=result;
            break;
    }
}