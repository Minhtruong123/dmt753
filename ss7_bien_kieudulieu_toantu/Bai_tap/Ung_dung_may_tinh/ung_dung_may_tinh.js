function calculate(operate) {
    var first= parseInt(document.getElementById('a').value);
    var second=parseInt(document.getElementById('b').value);
    var r;
    if (operate== '+') r = first + second
        else if (operate== '-') r = first - second;
        else if (operate== '*') r= first * second;
        else if (operate== '/') r= first / second;
    document.getElementById('result').innerHTML='Result:'+ r;
}
