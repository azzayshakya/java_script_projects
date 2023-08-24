const daysel = document.getElementById("days-el")
const hoursel =document.getElementById('hours-el')
const minutsel =document.getElementById('minuts-el')

const  secoundsel =document.getElementById('secounds-el')


const newYear = "7 sep 2023";

function countdown () {
    
    const currentdate=new Date();
    const newyeardate=new Date(newYear);

    const diff=newyeardate-currentdate;

    const totalsecound =(newyeardate-currentdate)/1000;

    const days =Math.floor(totalsecound /3600/ 24); 
    const hours =Math.floor(totalsecound /3600)% 24; 
    const minuts =Math.floor(totalsecound /3600) % 24;
    const secounds = Math.floor(totalsecound%60); 
   


    // console.log(days , hours ,minuts ,secounds);

    daysel.innerHTML=days;
    hoursel.innerHTML=hours;
  
    minutsel.innerHTML=minuts;
    secoundsel.innerHTML=secounds;

}

countdown();
setInterval(countdown,1000)