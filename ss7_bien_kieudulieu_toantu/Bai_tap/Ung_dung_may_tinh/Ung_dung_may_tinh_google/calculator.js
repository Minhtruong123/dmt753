var result='';
var a;
var c;
var b;
var ketqua;
var slice2;
var slice1;
function calculate(operate) {
    let dau;
    let dau2;
    if (operate == '0'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '1'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '2'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '3'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '4'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '5'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '6'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '7'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '8'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '9'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == 'AC'){
        result ='';
        ketqua=0;
        a=0;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '.'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '('){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == ')'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '/'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == 'x'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '-'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '+'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
    if (operate == '%'){
        result += operate;
        document.getElementById('result').innerHTML=result;
    }
//     k???t qu???
//     ?? t?????ng: T??m d???u trong chu???i string r???i t??ch chu???i, xong b???t ?????u t??nh
    if (operate == '='){
        dau=result.indexOf('+');
        if (dau > -1) {
            slice1=parseInt(result.slice(0,dau));
            slice2= parseInt(result.slice(dau+1,result.length));
            ketqua= slice1+slice2;
            dau=-1;
            // result=ketqua.toString()
            // document.getElementById('result').innerHTML=result;
        }
        dau=result.indexOf('-');
        if (dau > -1) {
            slice1=parseInt(result.slice(0,dau));
            slice2= parseInt(result.slice(dau+1,result.length));
            ketqua= slice1-slice2;
            dau=-1;
        }
        dau=result.indexOf('x');
        if (dau > -1) {
            slice1=parseInt(result.slice(0,dau));
            slice2= parseInt(result.slice(dau+1,result.length));
            ketqua= slice1*slice2;
            dau=-1;
        }
        dau=result.indexOf('/');
        if (dau > -1) {
            slice1=parseInt(result.slice(0,dau));
            slice2= parseInt(result.slice(dau+1,result.length));
            ketqua= slice1/slice2;
            dau=-1;
        }
        dau=result.indexOf('%');
        if (dau > -1) {
            slice1=parseInt(result.slice(0,dau));
            ketqua= slice1/100;
            dau=-1;
        }
        dau=result.indexOf('(');
        dau2=result.indexOf(')');
        if (dau > -1) {

        }
        document.getElementById('result').innerHTML=ketqua;
    }
}
