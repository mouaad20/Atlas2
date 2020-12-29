

/* style switcher  */
const links=document.querySelectorAll(".alternate-style"),
      totlelinks=links.length;

function setActivestyle(color){
    for (let i = 0; i<totlelinks;i++) {
        if (color===links[i].getAttribute("title")) {
        links[i].removeAttribute("disabled");
        }
        else{
         links[i].setAttribute("disabled","true"); 
        }
        
    }
}


/* body skin */
const body_skin=document.querySelectorAll(".body-skin"),
      body_skin_length=body_skin.length;
      for (let i = 0; i<body_skin_length;i++){

        body_skin[i].addEventListener("change",function(){
             if(this.value==="dark"){
                 document.body.className="dark_style";
             }
             else{
                document.body.className="";
             }
        })
      }


/* typing anaimation script */
 var typed = new Typed(".typing",{
    strings:["","Web Designer","web Developer","Graphic Designer", "Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true


});
 

/* date */
var date= new Date();//object
var Time= document.getElementById("year");
Time.innerHTML=date.getFullYear(); 
