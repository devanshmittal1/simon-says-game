let gameseq=[];
let userseq=[];
started=false;
let level=0;
let colors=["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }  
})

let h2=document.querySelector("h2");

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randcol=colors[randIdx];
    let randBtn= document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    btnflash(randBtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,900)
        }
    }else{
        h2.innerHTML=`Game Over! Your score is ${level-1}<br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
        }
}

function btnPress(){
    btnflash(this);
    usercol=this.getAttribute("id");
    userseq.push(usercol);
    checkAns(userseq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    userseq=[];
    gameseq=[];
    started=false;
}
