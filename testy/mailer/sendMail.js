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
