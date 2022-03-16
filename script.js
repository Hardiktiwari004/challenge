var main=document.querySelector("#main")
var nav=document.querySelector("#nav")
var main2=document.querySelector("#main2")
var main3=document.querySelector("#main3")
var main5=document.querySelector("#main5")
var modal=document.querySelector("#modal")
var about=document.querySelector("#about")
var racing=document.querySelector("#racing")
var bottom1=document.querySelector("#border1")
var bottom2=document.querySelector("#border2")
var bottom3=document.querySelector("#border3")
// var service=document.querySelector("#service")
var modal1=document.querySelector("#model1")
var modal2=document.querySelector("#model2")
var modal3=document.querySelector("#model3")
var modal4=document.querySelector("#model4")
var line1=document.querySelector("#line1")
var line2=document.querySelector("#line2")
var line3=document.querySelector("#line3")
var line4=document.querySelector("#line4")
var line5=document.querySelector("#line5")
var a=document.querySelector("#a")
var b=document.querySelector("#b")
var c=document.querySelector("#c")
var d=document.querySelector("#d")
var e=document.querySelector("#e")
state=0;
//--------------------------------------------------------------------------
// about.addEventListener("click",function(){
//     main2.style.opacity="1";
//     main3.style.opacity="0";
//     // main3.style.opacity="0";
//     modal1.style.opacity= "0";
//     modal2.style.opacity= "0";
//     modal3.style.opacity= "0";
//     modal4.style.opacity= "0";
// })

about.addEventListener("click",function(){
    main2.style.opacity="1";
    main3.style.opacity="0";
    // main4.style.opacity="0";
    modal1.style.opacity= "0";
    modal2.style.opacity= "0";
    modal3.style.opacity= "0";
    modal4.style.opacity= "0";
    model1.style.transform = "translateY(-388px)";
    model2.style.transform = "translateX(730px)";
   model3.style.transform = "translateY(388px)";
    model4.style.transform = "translateX(-730px)";
})
racing.addEventListener("click",function(){
    main2.style.opacity="0";
    main3.style.opacity="1";
    // main4.style.opacity="0";

    modal1.style.opacity= "0";
    modal2.style.opacity= "0";
    modal3.style.opacity= "0";
    modal4.style.opacity= "0";
    model1.style.transform = "translateY(-388px)";
    model2.style.transform = "translateX(730px)";
   model3.style.transform = "translateY(388px)";
    model4.style.transform = "translateX(-730px)";
})


modal.addEventListener("click",function(){
    // main4.style.opacity="0";
         
        main2.style.opacity=`0`;
        main3.style.opacity=`0`;
        nav.style.opacity=`1`;
        model1.style.transform = "translateY(388px)";
         model2.style.transform = "translateX(-730px)";
        model3.style.transform = "translateY(-388px)";
         model4.style.transform = "translateX(730px)";
         modal1.style.opacity= "1";
         modal2.style.opacity= "1";
         modal3.style.opacity= "1";
         modal4.style.opacity= "1";  

})
// service.addEventListener("click",function(){
//     main2.style.opacity="0";
//     main3.style.opacity="0";
//     // main4.style.opacity="1";
//     modal1.style.opacity= "0";
//     modal2.style.opacity= "0";
//     modal3.style.opacity= "0";
//     modal4.style.opacity= "0";
// })


// modal.addEventListener("click",function(){
//     if(state===0){
//         main2.style.opacity=`0`;
//         main3.style.opacity=`0`;
//         nav.style.opacity=`1`;
//         model1.style.transform = "translateY(388px)";
//          model2.style.transform = "translateX(-730px)";
//         model3.style.transform = "translateY(-388px)";
//          model4.style.transform = "translateX(730px)";
//          modal1.style.opacity= "1";
//          modal2.style.opacity= "1";
//          modal3.style.opacity= "1";
//          modal4.style.opacity= "1";  
//          state=1
//     }
//     else{
//         main2.style.opacity=`1`;
//         model1.style.transform = "translateY(-388px)";
//          model2.style.transform = "translateX(730px)";
//         model3.style.transform = "translateY(388px)";
//          model4.style.transform = "translateX(-730px)";
//          modal1.style.opacity= "1";
//          modal2.style.opacity= "1";
//          modal3.style.opacity= "1";
//          modal4.style.opacity= "1";  
//          state=0
//     }
   

//})
// racing.addEventListener("click",function(){
//     main2.style.opacity="0";
//     main3.style.opacity="1";
// })

//----------------------------------------------------------------------------

a.addEventListener("mouseover",function(dets){
    line1.style.transform ="translatex(-300px)"
});
a.addEventListener("mouseout",function(dets){
    line1.style.transform ="translatex(0)"
});
b.addEventListener("mouseover",function(dets){
    line2.style.transform ="translatex(-300px)"
});
b.addEventListener("mouseout",function(dets){
    line2.style.transform ="translatex(0)"
});
c.addEventListener("mouseover",function(dets){
    line3.style.transform ="translatex(-300px)"
});
c.addEventListener("mouseout",function(dets){
    line3.style.transform ="translatex(0)"
});
d.addEventListener("mouseover",function(dets){
    line4.style.transform ="translatex(-300px)"
});
d.addEventListener("mouseout",function(dets){
    line4.style.transform ="translatex(0)"
});
e.addEventListener("mouseover",function(dets){
    line5.style.transform ="translatex(-300px)"
});
e.addEventListener("mouseout",function(dets){
    line5.style.transform ="translatex(0)"
});

//----------------------------------------------------------
// modal.addEventListener("click",function(){
//     main3.style.opacity="1";
// })

//---------------------------------------------------------
var btn=document.querySelector("#zehar");
const pos = document.documentElement;
var state=0

btn.addEventListener("click",function(dets){
if(state === 0){
pos.addEventListener('mousemove', e => {
        pos.style.setProperty('--x', e.clientX + 'px')
        pos.style.setProperty('--y', e.clientY + 'px')
        // document.querySelector("#four").style.background = "radial-gradient(circle at var(---x) var(---y), #ffeeaa30 10%, rgba(0,0,0,.985) 10%)";
        state=1;
    });
}


});





// modal.addEventListener("click",function(){
//     if(state===0){
//         modal1.style.opacity= `1`
//         modal2.style.opacity= `1`
//         modal3.style.opacity= `1`
//         modal4.style.opacity= `1`
//         state=1
//     }
//     else{
//         modal1.style.opacity= `0`
//         modal2.style.opacity= `0`
//         modal3.style.opacity= `0`
//         modal4.style.opacity= `0`
//         state=0
//     }

//   },1000)


//----------------------------------------------------------------------------------------

gsap.from("#nav",{
    y:-40,
    duration:1,
    opacity:0,
})
gsap.from("#bottom",{
    y:40,
    duration:1,
    opacity:0,
})
gsap.from("#right",{
    x:40,
    duration:1,
    opacity:0,
})
gsap.from("#text h1",{
    y:-40,
    duration:1,
    opacity:0,
})
gsap.from("#lft",{
    x:-40,
    duration:1,
    opacity:0,
})
gsap.from("#line1",{
    x:-150,
    duration:.5,
    opacity:0,
})
gsap.from("#line2",{
    x:-150,
    duration:.5,
    opacity:0,
})
gsap.from("#line3",{
    x:-150,
    duration:.5,
    opacity:0,
})
gsap.from("#line4",{
    x:-150,
    duration:.5,
    opacity:0,
})
gsap.from("#line5",{
    x:-150,
    duration:.5,
    opacity:0,
})
gsap.from("#rthnav",{
    x:40,
    duration:1,
    opacity:0,
})
gsap.from("#ktm",{
    y:40,
    duration:1,
    opacity:0,
})
gsap.from("#centre",{
    y:-40,
    duration:1,
    opacity:0,
})
gsap.from("#border1",{
    y:-40,
    duration:1,
    opacity:0,
})
gsap.from("#border2",{
    y:-40,
    duration:1,
    opacity:0,
})
gsap.from("#border3",{
    y:-40,
    duration:1,
    opacity:0,
})
gsap.from("#border4",{
    y:-40,
    duration:1,
    opacity:0,
})



// modal.addEventListener("mouseover",function(dets){
//     bottom1.style.opacity ="0"
// });
// modal.addEventListener("mouseout",function(dets){
//     bottom1.style.opacity ="1"
// });