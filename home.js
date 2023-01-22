let men=document.getElementById("btn")
 let content=document.getElementById("content")
  let bod=document.getElementsByTagName("body")


  men.addEventListener("click",()=>{
  content.style.visibility="visible"
  content.style.display="flex"
})

content.addEventListener("mouseleave",()=>{
  content.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content.style.visibility="hidden"
})



let men1=document.getElementById("btn1")
  content1=document.getElementById("content1")
   bod=document.getElementsByTagName("body")


   men1.addEventListener("click",()=>{
  content1.style.visibility="visible"
  content1.style.display="flex"
})
content1.addEventListener("mouseleave",()=>{
  content1.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content1.style.visibility="hidden"
})


let men2=document.getElementById("btn2")
  content2=document.getElementById("content2")
   bod=document.getElementsByTagName("body")


   men2.addEventListener("click",()=>{
  content2.style.visibility="visible"
  content2.style.display="flex"
})
content2.addEventListener("mouseleave",()=>{
  content2.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content2.style.visibility="hidden"
})


let men3=document.getElementById("btn3")
  content3=document.getElementById("content3")
   bod=document.getElementsByTagName("body")


   men3.addEventListener("click",()=>{
  content3.style.visibility="visible"
  content3.style.display="flex"
})
content3.addEventListener("mouseleave",()=>{
  content3.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content3.style.visibility="hidden"
})

let men4=document.getElementById("btn4")
  content4=document.getElementById("content4")
   bod=document.getElementsByTagName("body")


   men4.addEventListener("click",()=>{
  content4.style.visibility="visible"
  content4.style.display="flex"
})
content4.addEventListener("mouseleave",()=>{
  content4.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content4.style.visibility="hidden"
})

let men5=document.getElementById("btn5")
  content5=document.getElementById("content5")
   bod=document.getElementsByTagName("body")


   men5.addEventListener("click",()=>{
  content5.style.visibility="visible"
  content5.style.display="flex"
})
content5.addEventListener("mouseleave",()=>{
  content5.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content5.style.visibility="hidden"
})



let men6=document.getElementById("btn6")
  content6=document.getElementById("content6")
   bod=document.getElementsByTagName("body")


   men6.addEventListener("click",()=>{
  content6.style.visibility="visible"
  content6.style.display="flex"
})
content6.addEventListener("mouseleave",()=>{
  content6.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content6.style.visibility="hidden"
})



let men7=document.getElementById("btn7")
  content7=document.getElementById("content7")
   bod=document.getElementsByTagName("body")


   men7.addEventListener("click",()=>{
  content7.style.visibility="visible"
  content7.style.display="flex"
})
content7.addEventListener("mouseleave",()=>{
  content7.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content7.style.visibility="hidden"
})

let men8=document.getElementById("btn8")
  content8=document.getElementById("content8")
   bod=document.getElementsByTagName("body")


   men8.addEventListener("click",()=>{
  content8.style.visibility="visible"
  content8.style.display="flex"
})
content8.addEventListener("mouseleave",()=>{
  content8.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content8.style.visibility="hidden"
})



let men9=document.getElementById("btn9")
  content9=document.getElementById("content9")
   bod=document.getElementsByTagName("body")


   men9.addEventListener("click",()=>{
  content9.style.visibility="visible"
  content9.style.display="flex"
})
content9.addEventListener("mouseleave",()=>{
  content9.style.visibility="hidden"
})
bod[0].addEventListener("mouseleave",()=>{
  content9.style.visibility="hidden"
})




let images=[
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2893831.json?$Prod_PLPThumb$" ,
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3358463.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3417444.json?$Prod_PLPThumb$"
 
]

let i=0;
setInterval(function(){
   document.getElementById("slideshow").src=images[i]
   i++;
   if(i==images.length){
       i=0;
   }
},2000)

let images1=[
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2893831.json?$Prod_PLPThumb$" ,
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3358463.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3417444.json?$Prod_PLPThumb$"
]

let j=0;
setInterval(function(){
   document.getElementById("slide").src=images1[j]
   j++;
   if(j==images1.length){
       j=0;
   }
},2500)

let images2=[
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2893831.json?$Prod_PLPThumb$" ,
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3358463.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3417444.json?$Prod_PLPThumb$"
]
let k=0;
setInterval(function(){
    document.getElementById("show").src=images2[k]
    k++;
    if(k==images2.length){
        k=0;
    }
},2900)

let images22=[
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2893831.json?$Prod_PLPThumb$" ,
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3358463.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3417444.json?$Prod_PLPThumb$"
]
let kk=0;
setInterval(function(){
    document.getElementById("show2").src=images22[kk]
    kk++;
    if(kk==images22.length){
        kk=0;
    }
},2400)

let images223=[
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/2893831.json?$Prod_PLPThumb$" ,
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3358463.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3443007.json?$Prod_PLPThumb$",
"https://assets.basspro.com/image/list/fn_select:jq:first(.%5b%5d%7Cselect(.public_id%20%7C%20endswith(%22main%22)))/3417444.json?$Prod_PLPThumb$"
]
let kkk=0;
setInterval(function(){
    document.getElementById("show3").src=images223[kkk]
    kkk++;
    if(kkk==images223.length){
        kkk=0;
    }
},1800)

