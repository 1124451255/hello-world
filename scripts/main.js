/*
每个占据页面空间的块都有这样的属性：

padding：即内边距，围绕着内容（比如段落）的空间。
border：即边框，紧接着内边距的线。
margin：即外边距，围绕元素外部的空间。

width ：元素的宽度
background-color ：元素内容和内边距底下的颜色
color ：元素内容（通常是文本）的颜色
text-shadow ：为元素内的文本设置阴影
display ：设置元素的显示模式（暂略）
*/




html {
	/* px 表示 “像素（pixels）”: 基础字号为 10 像素 */
	font-size: 22px;
	/* Google fonts 输出的 CSS */
	font-family: 'Open Sans',sans-serif;
	/*背景色设置*/
	background-color: #00539F;
	
}
/*此项等同于给页面中包含的元素整体设置*/
body {
	/* 添加一个大小为5元素的边框 颜色为黑 */
	border: 5px solid black;
	/*元素的宽度 给元素设置一个整体的宽度 强制页面永远保持 600 像素宽。*/
	width: 700px;

	/* 即外边距，围绕元素外部的空间 自适应浏览器大小 auto意思是左右对称  */
	margin: 0 auto;
	/* 元素内容和内边距底下的颜色 body中的底色 */
	background-color: #FF9500;
	/* 即内边距  */
	padding: 0px 20px 20px 20px;
	
	

	
}







/*
1号标题设置
*/
h1 {
	font-size: 60px;
	text-align: center;/*center 中央的意思 left right align=对齐 */
	margin: 0;
	padding: 20px 0px;
	color: #00539F;
	/*元素中的文本提供阴影 左右移 上下移(负为作，正为右) 虚化 颜色*/
	text-shadow: 3px 3px 1px black;
	/* border: 5px solid black; */
}
/*内联元素和块级元素在毕向东35天 464集有说明*/
img {
	/*display: block 给予其块级行为*/
	display: block;
	/*居中*/
	margin: 0 auto;
	
}

/*段落设置
li：列表内元素 List ltem
ol：有序列表Unordered List
ul：无序列表Ordered List

*/
p,li {
	font-size: 16px;
	line-height: 2;
	letter-spacing:1px;/*spaning 间距*/
}