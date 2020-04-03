function addShuQian()
{
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
	p.innerHTML="开发中";
	p.setAttribute("className","text");
	p.style="font-size:1em;";
	img.setAttribute("className","image");
	img.setAttribute("src","../test.png");
	img.style="width:3em;height:3em;";
	a.setAttribute("className","link");
	a.setAttribute("href","x:sc");
	a.style="width:100%;height:100%;position:absolute;right:0px;bottom:0px;";
}
