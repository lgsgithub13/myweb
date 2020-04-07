//确定
function addOk()
{
	//从用户输入中获取数据
	var inputUrl=document.getElementById("inputUrl");
	var inputName=document.getElementById("inputName");
	var inputImgSrc=document.getElementById("inputImgSrc");
	//
	var hrefValue=inputUrl.value;
	var linkName=inputName.value;
	var srcValue=inputImgSrc.value;
	//
	var addDialog=document.getElementById("addDialog");
	//创建标签并添加到body中
	var bodydiv=document.getElementById("bodydiv");
	var newTag=document.createElement("div");
	bodydiv.appendChild(newTag);
	newTag.setAttribute("className","box");
	newTag.style="position:relative;display:inline-block;margin:0.5em;";
	//创建标签内的子标签
	var a=document.createElement("a");
	var img=document.createElement("img");
	var p=document.createElement("p");
	var p_include_img=document.createElement("p");
	newTag.appendChild(a);
	newTag.appendChild(p_include_img);
	newTag.appendChild(p);
	//为子标签添加属性和样式
	p_include_img.appendChild(img);
	p.innerHTML=linkName;
	p.setAttribute("className","text");
	p.style="font-size:1em;";
	img.setAttribute("className","image");
	img.setAttribute("src",srcValue);
	img.style="width:3em;height:3em;";
	a.setAttribute("className","link");
	a.setAttribute("href",hrefValue);
	a.style="width:100%;height:100%;position:absolute;right:0px;bottom:0px;";
	//用localstorage存储链接、网站名称和图标
	var webObj=
	{
		url:hrefValue,
		linkText:linkName,
		img:srcValue,
	};
	var webObjStr=JSON.stringify(webObj);
	window.localStorage.setItem(hrefValue,webObjStr);
	//
	addDialog.style="display:none;";
	//
	alert("已存储用户标签为:"+"    URL:"+hrefValue+"    名称:"+linkName+"    图片路径:"+srcValue);
}
