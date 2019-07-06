(function(){
    //找到点击事件元素
    var as=document.getElementsByName("onc1");
  //设置变量用于递增zindex的值
  var i=1;
  //遍历as中的每一个啊
  for(var a of as){
    //给每个a绑定点击事件
    a.onmousemove=function(){
      //获取a中已经缓存的ul的id
      var ul=this.getAttribute("data-id");
      //将a中已获取到的id作为查询条件查找对应的ul
     var ul1=document.getElementById(ul);
     ul1.style.zIndex=i;
     i++;
    }
  }
})();

  //移入出下划线
  (function(){
    var dj=document.getElementsByClassName("tab1");
    for(var a of dj){
      a.onmousemove=function(){
        var qa=document.querySelectorAll(".tab1");
       for(var ab of qa){
         ab.style.borderBottom="";
         ab.firstElementChild.style.color="";
       }
        this.style.borderBottom="1px solid red"
        var i=this.firstElementChild
        i.style.color="red";
      }
    }
  })();

//img
(function(){
  //找到点击事件元素
  var as=document.getElementsByName("onc2");
//设置变量用于递增zindex的值
var i=1;
//遍历as中的每一个啊
for(var a of as){
  //给每个a绑定点击事件
  a.onmousemove=function(){
    //获取a中已经缓存的ul的id
    var ul=this.getAttribute("data-id");
    //将a中已获取到的id作为查询条件查找对应的ul
   var ul1=document.getElementById(ul);
   ul1.style.zIndex=i;
   i++;
  }
}
})();

//移入出下划线
(function(){
  var dj=document.getElementsByClassName("play-bt-1");
  for(var a of dj){
    a.onmousemove=function(){
      var qa=document.querySelectorAll(".play-bt-1");
     for(var ab of qa){
       ab.style.borderBottom="";
       ab.firstElementChild.style.color="";
     }
      this.style.borderBottom="1px solid red"
      var i=this.firstElementChild
      i.style.color="red";
    }
  }
})();



//轮播图二
(function(){
var i=0;
    var LIWIDTH=416;
    var DURATION=416;
    var LICOUNT=4;
    var ulImgs=document.getElementById("play-lun");
    var ulIdxs=document.getElementById("play-lun2");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
//调用moveto
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
//按钮点击
    var ulIdxs=document.getElementById("play-lun2");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
  })();

// 电竞赛事card点击事件
(function(){
  //找到点击事件元素
  var as=document.getElementsByName("onc3");
//设置变量用于递增zindex的值
var i=1;
//遍历as中的每一个啊
for(var a of as){
  //给每个a绑定点击事件
  a.onmousemove=function(){
    //获取a中已经缓存的ul的id
    var ul=this.getAttribute("data-id");
    //将a中已获取到的id作为查询条件查找对应的ul
   var ul1=document.getElementById(ul);
   ul1.style.zIndex=i;
   i++;
  }
}
})();

//移入出下划线
(function(){
  var dj=document.getElementsByClassName("card");
  for(var a of dj){
    a.onmousemove=function(){
      var qa=document.querySelectorAll(".card");
     for(var ab of qa){
       ab.style.borderBottom="";
       ab.firstElementChild.style.color="";
     }
      this.style.borderBottom="1px solid red"
      var i=this.firstElementChild
      i.style.color="red";
    }
  }
})();

  