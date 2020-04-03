setInterval(function()
{
    var time=new Date();
    var h,m,s,xs;
    h=time.getHours();
    m=time.getMinutes();
    s=time.getSeconds();
    //xs=time.getMilliseconds();
    var H=document.getElementById("H");
	if(h<10){var hadd="0"+h;H.innerHTML=hadd;}
    else{H.innerHTML=h;}
	var M=document.getElementById("M");
    if(m<10){var hadd="0"+m;M.innerHTML=hadd;}
    else{M.innerHTML=m;}
	var S=document.getElementById("S");
    if(s<10){var hadd="0"+s;S.innerHTML=hadd;}
    else{S.innerHTML=s;}
},1000);
