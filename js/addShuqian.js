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
	var body=document.getElementById("body");
	var newTag=document.createElement("div");
	body.appendChild(newTag);
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
	addDialog.style="display:none;";
}
