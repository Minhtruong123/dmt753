function add() {
    var first= parseInt(document.getElementById('a').value);
    var second=parseInt(document.getElementById('b').value);
    var r=first+second
    document.getElementById('result').innerHTML='Result:'+ r;
}
function sub() {
    var first= parseInt(document.getElementById('a').value);
    var second=parseInt(document.getElementById('b').value);
    var r=first-second
    document.getElementById('result').innerHTML='Result:'+ r;
}
function mul() {
    var first= parseInt(document.getElementById('a').value);
    var second=parseInt(document.getElementById('b').value);
    var r=first*second
    document.getElementById('result').innerHTML='Result:'+ r;
}
function div() {
    var first= parseInt(document.getElementById('a').value);
    var second=parseInt(document.getElementById('b').value);
    var r=first/second
    document.getElementById('result').innerHTML='Result:'+ r;
}