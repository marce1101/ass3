var add = document.getElementById("add"),
    bgInp = document.getElementById("bgInp"),
    from = document.getElementById("from"),
    fromInp = document.getElementById("fromInp"),
    lose = document.getElementById("lose"),
    message = document.getElementById("message"),
    msgInp = document.getElementById("msgInp"),
    preview = document.getElementById("preview"),
    postcard = document.getElementById("postcard"),
    save = document.getElementById("save"),
    to = document.getElementById("to"),
    toInp = document.getElementById("toInp");

//Arrays
var toArr = [];
var bgArr = [];

//To, Message And From inputs

toInp.addEventListener("keyup",function(ev){
   //  console.log(ev.keyCode)
    if(ev.keyCode == 13)
        {
          //  console.log("pressed")
           to.innerHTML = "To "+toInp.value;
        }
});

msgInp.addEventListener("keyup",function(ev){
   //  console.log(ev.keyCode)
    if(ev.keyCode == 13)
        {
          //  console.log("pressed")
           message.innerHTML = msgInp.value;
        }
});

fromInp.addEventListener("keyup",function(ev){
   //  console.log(ev.keyCode)
    if(ev.keyCode == 13)
        {
          //  console.log("pressed")
           from.innerHTML = "From " +fromInp.value;
        }
});

//changing the background img

bgInp.addEventListener("keyup",function(ev){
   //  console.log(ev.keyCode)
    if(ev.keyCode == 13)
        {
          //  console.log("pressed")
           postcard.style.backgroundImage = "url("+bgInp.value+")";
        }
});

//adding the gallary

function createPostcard(bgImgSrc, nto1){
    var nDiv = document.createElement("div"),
        nTo = document.createElement("nTo"),
        nImg = document.createElement("img");
    
    nTo.innerHTML = nto1; 
        nImg.src = bgImgSrc;

    
    nDiv.className="miniPost";
    nTo.className="miniTo";
    nImg.className="miniImg";
    
    nDiv.appendChild(nTo);
    nDiv.appendChild(nImg);
    preview.appendChild(nDiv);
    
}

add.addEventListener("click",function(){
   createPostcard(bgInp.value, toInp.value);
    toArr.push(toInp.value);
    bgArr.push(bgInp.value);
    console.log(toArr, bgArr);
    
    
});