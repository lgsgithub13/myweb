function addShuQian()
{
	//alert("happy");
	var body=document.getElementById("body");
	var newTag=document.createElement("div");
	//newTag.innerHTML="JAVA";
	body.appendChild(newTag);
	//newTag.style.background="red";
	newTag.setAttribute("className","box");
	newTag.style="position:relative;display:inline-block;margin:0.5em;";
	var link=document.createElement("a");
	var img=document.createElement("img");
	var text=document.createElement("p");
	var pimg=document.createElement("p");
	newTag.appendChild(link);
	newTag.appendChild(pimg);
	newTag.appendChild(text);
	pimg.appendChild(img);
	text.innerHTML="未命名";
	text.setAttribute("className","text");
	text.style="font-size:1em;";
	img.setAttribute("className","image");
	img.setAttribute("src","../test.png");
	img.style="width:3em;height:3em;";
	link.setAttribute("className","link");
	link.setAttribute("href","x:sc");
	link.style="width:100%;height:100%;position:absolute;right:0px;bottom:0px;";
}
