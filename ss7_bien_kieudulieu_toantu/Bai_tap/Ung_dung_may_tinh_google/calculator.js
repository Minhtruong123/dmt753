var result='';
var a;
var c;
var b;
var ketqua;
var slice2;
var slice1;
function calculate(operate) {
    let dau;
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
//     kết quả
//     Ý tưởng: Tìm dấu trong chuỗi string rồi tách chuỗi, xong bắt đầu tính
    if (operate == '='){
        dau=result.indexOf('+');
        if (dau >> -1) {
            slice1=parseInt(result.slice(0,dau));
            slice2= parseInt(result.slice(dau+1,result.length));
            ketqua= slice1+slice2;
            dau=-1;
        }
        alert(slice2)
        // dau=result.indexOf('-');
        // if (dau >> -1) {
        //     result2=result;
        //     slice1= parseInt(result2.slice(0,dau));
        //     slice2= parseInt(result2.slice(dau+1,result2.length));
        //     ketqua= slice1-slice2;
        //     dau=-1;
        // }
        // dau=result.indexOf('*');
        // if (dau >> -1) {
        //     result2=result;
        //     slice1= parseInt(result2.slice(0,dau));
        //     slice2= parseInt(result2.slice(dau+1,result2.length));
        //     ketqua= slice1*slice2;
        //     dau=-1;
        // }
        // dau=result.indexOf('/');
        // if (dau >> -1) {
        //     result2=result;
        //     slice1= parseInt(result2.slice(0,dau));
        //     slice2= parseInt(result2.slice(dau+1,result2.length));
        //     ketqua= slice1/slice2;
        //     dau=-1;
        // }
//         // dau=result.indexOf('%');
//         // if (dau >> -1) {
//         //     slice1= parseInt(result.slice(0,dau-1));
//         //     ketqua= slice1/100;
//         //     dau=-1;
//         // }
//          document.getElementById('result').innerHTML=ketqua;
     }
}