function sendMail(a,b,c,d,e,f,g){
    let url = "sendMail.php";
    url += "?host="+a;
    url += "&sendUser="+b;
    url += "&password="+c;
    url += "&fromMail="+d;
    url += "&fromName="+e;
    url += "&subject="+f;
    url += "&content="+g;
    console.log(url);
    setTimeout(5000);
    window.location.href = url;
}

function send(){
    var inputValue1 = form.input1.value;
    var inputValue2 = form.input2.value;
    var inputValue3 = form.input3.value;
    var inputValue4 = form.input4.value;
    var inputValue5 = form.input5.value;
    var inputValue6 = form.input6.value;
    var inputValue7 = form.input7.value;

    sendMail(inputValue1, inputValue2, inputValue3, inputValue4, inputValue5, inputValue6, inputValue7);
}
