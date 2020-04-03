setInterval(function()
{
    var time=new Date();
    var h,m,s,xs;
    h=time.getHours();
    m=time.getMinutes();
    s=time.getSeconds();
    xs=time.getMilliseconds();
    var c=document.getElementById("T");
    c.innerHTML=h+":"+m+":"+s;
},1000);
