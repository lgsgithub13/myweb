function addShuQian()
{
	var addDialog=document.getElementById("addDialog");
	addDialog.style="display:block;";
}
//关闭添加书签对话框
function closeAddDialog()
{
	var addDialog=document.getElementById("addDialog");
	addDialog.style="display:none;";
}
//确定
function addOk()
{
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
	//创建标签内的子标签并添加
	var a=document.createElement("a");
	var img=document.createElement("img");
	var p=document.createElement("p");
	var p_include_img=document.createElement("p");
	newTag.appendChild(a);
	newTag.appendChild(p_include_img);
	newTag.appendChild(p);
	//为子标签添加属性和样
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
	//
	window.localStorage.setItem("hrefValue",hrefValue);
	window.localStorage.setItem("linkName",linkName);
	window.localStorage.setItem("srcValue",srcValue);
	//
	addDialog.style="display:none;";
}
function loadUserWeb()
{
	//alert("页面加载完毕");
	
	//创建标签
var div=document.createElement("div");

var bodydiv=document.getElementById("bodydiv");
	//把标签添加到body中
bodydiv.appendChild(div);
	//为标签添加属性、样式
div.setAttitute("className","box");
div.style="position:relative;display:inline-block;margin:0.5em;";
	//在标签内添加a、img、p内容
var a=document.createElement("a");
var img=document.createElement("img");
var p=document.createElement("p");
var p_include_img=document.createElement("p");
div.appendChild(a);
div.appendChild(p_include_img);
div.appendChild(p);
p_include_img.appendChild(img);
	//为子标签添加属性、样式
a.setAttitute("className","link");
a.setAttitute("href",window.localStorage.getItem("hrefValue"));
a.style="width:100%;height:100%;position:absolute;right:0px;bottom:0px;";
img.setAttitute("className","image");
img.setAttitute("src",window.localStorage.getItem("srcValue"));
img.style="width:3em;height:3em;";
p.innerHTML=window.localStorage.getItem("linkValue");
p.setAttitute("className","text");
p.style="font-size:1em;";
};
