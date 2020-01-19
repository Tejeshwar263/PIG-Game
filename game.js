
/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
const p1curretvalue= document.querySelector('.p1-current-score');
const p2curretvalue=document.querySelector('.p2-current-score')
const rolldicbtnn= document.querySelector('#rolldice-btn');
const hldbt=document.querySelector('#hold-btn');
const p1glbvalue=document.querySelector('#player1-globscore');
const p2glbvalue=document.querySelector('#player2-globscore');
const p1indicator=document.getElementsByClassName('indicatorp1');
const p2indicator=document.getElementsByClassName('indicatorp2');
const p1area=document.getElementsByClassName('player1');
const p2area=document.getElementsByClassName('player2');
const p1heading=document.getElementById('p1heading');
const p2heading=document.getElementById('p2heading');
const newbtn=document.getElementById('new-game-btn');
const diceimg=document.getElementsByTagName('img');
var turn="player1";
p1indicator[0].style.display='block';
p2indicator[0].style.display='none';
var pcurrentscore=0;
var imageslist=['images/dice-1.png','images/dice-2.png','images/dice-3.png','images/dice-4.png','images/dice-5.png','images/dice-6.png'];
//var p2currentscore=0;
var randomval=0;
var p1glbscore=0;
var p2glbscore=0;
diceimg[0].style.display='none';
function rolldicbtn(){
    randomval=((Math.floor(Math.random()*10))%6)+1;
    pcurrentscore=randomval+pcurrentscore;
    //console.log(pcurrentscore);
    
        diceimg[0].src=imageslist[randomval-1];
    
    return pcurrentscore;    
}

function colourp1top2(){
p1area[0].style.background='white';
p2area[0].style.background='rgba(230, 222, 222, 0.589)';
p2heading.style.color='black';
p1heading.style.color='rgb(199, 188, 188)';
}

function colourp2top1(){
    p2area[0].style.background='white';
p1area[0].style.background='rgba(230, 222, 222, 0.589)';
p1heading.style.color='black';
p2heading.style.color='rgb(199, 188, 188)';
}

function winner(){
    if(p1glbscore>=100 || p2glbscore>=100){
        if(p1glbscore>=100){
            p1heading.textContent="WINNER!";
            p1heading.style.color='black';
        }
        else{
            p2heading.textContent="WINNER!";
            p2heading.style.color='black';
        }
        hldbt.disabled=true;
        rolldicbtnn.disabled=true;
    }
}

newbtn.addEventListener('click',function(){
    turn="player1";
    diceimg[0].style.display='none';
    p2area[0].style.background='white';
    p1area[0].style.background='rgba(230, 222, 222, 0.589)';
    p2heading.style.color='rgb(199, 188, 188)';
    p1curretvalue.innerHTML=0;
    p2curretvalue.innerHTML=0;
    p1glbvalue.innerHTML=0;
    p2glbvalue.innerHTML=0;
    p1indicator[0].style.display='block';
    p2indicator[0].style.display='none';
    p1heading.style.color='rgb(199, 188, 188)';
    p2heading.style.color='rgb(199, 188, 188)';
    hldbt.disabled=false;
    rolldicbtnn.disabled=false;
    pcurrentscore=0;
    p1glbscore=0;
    p2glbscore=0;
    p1heading.textContent="PLAYER 1";
    p2heading.textContent="PLAYER 2";
    p1heading.style.color='black';
})

rolldicbtnn.addEventListener('click', function(){
    diceimg[0].style.display='block';
    if(turn=="player1"){
    p1curretvalue.innerHTML=rolldicbtn();
    if(randomval==1){
        //p1glbvalue.innerHTML=pcurrentscore;
        p1curretvalue.innerHTML=0;
        turn="player2";
        p1indicator[0].style.display='none';
        p2indicator[0].style.display='block';
        colourp1top2();
        pcurrentscore=0;
    }
}
    else{
        p2curretvalue.innerHTML=rolldicbtn();
        if(randomval==1){
            //p2glbvalue.innerHTML=pcurrentscore;
        p2curretvalue.innerHTML=0;
            turn="player1";
            p1indicator[0].style.display='block';
        p2indicator[0].style.display='none';
        colourp2top1();
            pcurrentscore=0;
        }

}
})

hldbt.addEventListener('click',function(){
    diceimg[0].style.display='none';
    if(turn=="player1"){
    p1glbscore=p1glbscore+pcurrentscore;
p1glbvalue.innerHTML=p1glbscore;
p1curretvalue.innerHTML=0;
pcurrentscore=0;
turn="player2";
p1indicator[0].style.display='none';
p2indicator[0].style.display='block';
winner();
colourp1top2();
}
else{
    p2glbscore=p2glbscore+pcurrentscore;
    p2glbvalue.innerHTML=p2glbscore;
    p2curretvalue.innerHTML=0;
    pcurrentscore=0;
    turn="player1";
    p1indicator[0].style.display='block';
        p2indicator[0].style.display='none';
        winner();
        colourp2top1();
}

} )

