//banner特效
var box=document.querySelector(".lunbo-kuang");
var imgs=document.querySelectorAll(".lunbotu>li");
var btns=document.querySelectorAll(".lunbtn-item");
var leftjian=document.querySelector(".banner-jianzuo");
var rightjian=document.querySelector(".banner-jianyou");
console.log(box,imgs,btns);
var now=0;
var z=3;
var t=setInterval(move,3000);
function move() {
    imgs[now].classList.add("leftOut");  //添加类名
    btns[now].classList.remove("active");
    now++;
    if(now==imgs.length){
        now=0;
    }
    imgs[now].classList.add("leftIn");
    btns[now].classList.add("active");
    imgs[now].style.zIndex=z++;
}
imgs.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.className="";
    })
});
btns.forEach(function (btn,index) {
    btn.onclick=function () {
        if(now==index){
            return;
        }
        if(index>now){   //点击的是当前的后面
            imgs[now].classList.add("leftOut");
            btns[now].classList.remove("active");
            imgs[index].classList.add("leftIn");
            btns[index].classList.add("active");
        }else{
            imgs[now].classList.add("rightOut");
            btns[now].classList.remove("active");
            imgs[index].classList.add("rightIn");
            btns[index].classList.add("active");
        }
        imgs[index].style.zIndex=z++;
        now=index;
    }
});
box.onmouseover=function () {
    clearInterval(t);
};
box.onmouseout=function () {
    t=setInterval(move,3000);
};
leftjian.onclick=function () {
    
};
rightjian.onclick=function () {

};



//banner下
var inner=document.querySelector(".luntuk");
var smallleft=document.querySelector(".lunjianzuo");
var smallright=document.querySelector(".lunjianyou");
console.log(smallleft,smallright);
var num=0;
var tt=setInterval(move1,3000);
function move1() {
    if(num==0){
        inner.style.transition = "all 1s";
    }
    //第二次轮回再加上过渡
    num++;
    inner.style.marginLeft=-295*num+"px";
}
inner.addEventListener("transitionend",function () {
    if(num==4) {
        inner.style.transition = "none";
        inner.style.marginLeft = 0;
        num = 0;
    }
});
smallleft.onclick=function () {
    move1();
    console.log(num)
};
smallright.onclick=function () {
    num-=2;
    move1();
};




var daohang=document.querySelector(".nav-main")
var daok=document.querySelector(".nav-oth-itemk")
daohang.onmouseover=function () {
    // daok.style.transform="all 0.5s"
    daok.style.display="block"
}
daohang.onmouseout=function () {
    daok.style.display="none"
}




var yingyt=document.querySelector(".tmr-two")
var erweima=document.querySelector(".erweima")
yingyt.onmouseover=function () {
    // daok.style.transform="all 0.5s"
    erweima.style.display="block"
}
yingyt.onmouseout=function () {
    erweima.style.display="none"
}




var smallbox=document.querySelector(".smalllun>ul");
var smallitem=document.querySelectorAll(".small-item");
var smallleft2=document.querySelector(".small-zuo");
var smallright2=document.querySelector(".small-you");
var nummun=0;
setInterval(small,5000);
function small() {
    smallbox.removeChild(smallitem[nummun]);
    smallbox.appendChild(smallitem[nummun]);
    nummun++;
    if(nummun==4){
        nummun=0;
    }
}
smallright2.onclick=function () {
    small();
};
smallleft2.onclick=function () {
    small();
};



