let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;
let s = `
/*你好，我叫胡安琪
*我是一名前端小白
*接下来我添加一个div
*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*现在我把div变成八卦图
*首先，我把div变成一个圆*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦图是一黑一白*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*开始变形啦*/
#div1::before{
  width: 100px;
  height: 100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background:white;
  border:none;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background:black;
  border:none;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
`;
let s1 = ""; //缓存字符串
let step = () => {
  setTimeout(() => {
    //如果读到当前字符是回车，替换为<br>标签
    //如果是正常字符，照搬
    if (s[n] === "\n") {
      s1 += "<br>";
    } else if (s[n] === " ") {
      s1 += "&nbsp;";
    } else {
      s1 += s[n];
    }

    html.innerHTML = s1; //把要显示的字符串s1写到html里
    style.innerHTML = s.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n = n + 1;
    if (n < s.length) {
      step(); //如果字符串没读完，接着调用step函数
    }
  }, 50);
};

step();
