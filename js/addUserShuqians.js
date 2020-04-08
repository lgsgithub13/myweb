//body加载完毕时显示用户书签
function loadUserWeb() 
{
	for(var i=0;i<localStorage.length;i++)
	{
		var key=localStorage.key(i);
		//通过Key获取webObjStr并把他转为webobj
		var webObjStr=localStorage.getItem(key);
		var webObj=JSON.parse(webObjStr);
		if(webObj.url!=null&&webObj.linkText!=null)
		{
		//创建标签
        var div = document.createElement("div");

        var bodydiv = document.getElementById("bodydiv");
        //把标签添加到body中
		var add=document.getElementById("add");
        bodydiv.insertBefore(div,add);
        //为标签添加属性、样式
        div.setAttribute("className", "box");
        div.style = "position:relative;display:inline-block;margin:0.5em;";
        //在标签内添加a、img、p内容
        var a = document.createElement("a");
        var img = document.createElement("img");
        var p = document.createElement("p");
        var p_include_img = document.createElement("p");
        div.appendChild(a);
        div.appendChild(p_include_img);
        div.appendChild(p);
        p_include_img.appendChild(img);
		window.console.log("所加载用户标签为:"+"    URL:"+webObj.url+"    名称:"+webObj.linkText+"    图片路径:"+webObj.img+"    Key数量为:"+localStorage.length);
        //为子标签添加属性、样式
        a.setAttribute("className", "link");
        a.setAttribute("href",webObj.url);
        a.style = "width:100%;height:100%;position:absolute;right:0px;bottom:0px;";
        img.setAttribute("className", "image");
        img.setAttribute("src",webObj.img);
        img.style = "width:3em;height:3em;";
        p.innerHTML = webObj.linkText;
        p.setAttribute("className", "text");
        p.style = "font-size:1em;";
		}
	}
}
