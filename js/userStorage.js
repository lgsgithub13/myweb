var 被JSON字符化的标签对象_值=localStorage.getItem("用于包装标签的对象_键");
var 标签对象=JSON.stringify(被JSON字符化的标签对象_值);
var url地址=标签对象.link;
var img源地址=标签对象.picture;
var 标签标记文本=标签对象.text;
if(标签对象=!null)
{
	//创建标签
var div=document.createElement("div");

var body=document.getElementById("body");
	//把标签添加到body中
body.appendChild(div);
	//为标签添加属性、样式
var div_origin_attitude=document.getElementsByClassName("box").getAttitude();
div.setAttitude()=div_origin_attitude;
	//在标签内添加a、img、p内容
var a=document.createElement("a");
var img=document.createElement("img");
var p=document.createElement("p");
var p_include_img=document.createElement("p");
	//为子标签添加属性、样式
a.setAttitude("className","link");
a.setAttitude("href",url地址);
a.style="";
};
