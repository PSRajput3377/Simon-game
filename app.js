let userSeq=[];
let gameSeq=[];

let btns= ["red", "yellow", "blue", "pink"];
let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
     if(started==false){
        console.log("game started ");
        started= true;
        levelUp();
     }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `level ${level}`;
    let randindx= Math.floor(Math.random()*4);
    let randcolor= btns[randindx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq); 
    btnflash(randbtn);
   
    
}


function checkans(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
           if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,100); 

           }

    }

    else{
        h2.innerHTML=`game over! Your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },100);
        reset();
    }
}
function btnpress(){
    
    let btn= this;
    userflash(btn); 
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq= [];
    userSeq=[];
    level=0;
}