function writeCode(prefix,code,fn){
  
    let domCode = document.querySelector('#code')
    let n=0
    let id = setInterval(()=>{
    n+=1
    domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n),Prism.languages.css);
    styleTag.innerHTML= prefix + code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n>=code.length){
        window.clearInterval(id)
        fn&&fn.call()
    }
    
    },70)
}
var result = `/*
*面试官你好，我是黎至成
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧，首先准备一些样式
*/

*{
    transition:all 1s;
}
html{
    background: rgb(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid red;
    padding:16px;
    
}
/* 接下来我需要一些代码高亮 */

.token.selector{ color: #690; }
.token.property{ color: #905; }
.token.function{
    color:#DD4A68;
}

#code{
    animation: breath 0.5s infinite alternate-reverse;
  }
/* 不玩了，我来介绍一下我自己吧*/
/* 我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#ddd;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
  width:100%;
  height:100%;
  background:white;
}
`

var result2 = `
    #paper{
        
    }
    `
var md = `
# **自我介绍**
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
XXX 轮播
XXX 简历
XXX 画板
# 联系方式
QQ xxxxxxxx
Email xxxxxxxx
手机 xxxxxxx

`
var result3 =`/*
 接下来把markdown变成 HTML
*/
 `

var result4 = `
/*
谢谢观看
*/
`
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writrMarkdown(md,()=>{
                writeCode(result+result2,result3,()=>{
                convertMarkdownToHtml(()=>{
                  writeCode(result+result2+result3,result4,()=>{
                      console.log("结束")
                  })   
                })
                })
            })
        })
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    var content = document.createElement('pre')
    content.className = 'content markdown-body'
    paper.appendChild(content)
    fn.call()
}

function writrMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper>.content')
  let n=0
  let id = setInterval(()=>{
  n+=1
  domPaper.innerHTML=markdown.substring(0,n)
  domPaper.scrollTop = domPaper.scrollHeight
  if(n>=markdown.length){
      window.clearInterval(id)
      fn&&fn.call()
  }
  
  },0)
}


 function a(){
    let domPaper = document.querySelector('#paper>.content')
    domPaper.innerHTML=marked(domPaper.innerHTML)
 }
 function convertMarkdownToHtml(fn){
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.innerHTML = marked(md)
    fn&&fn.call();
}