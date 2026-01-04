let time = document.querySelector(".time");
let startbtn = document.querySelector( ".start-btn");
let stopbtn = document.querySelector(".stop-btn");
let resetbtn = document.querySelector(".reset-btn");

let timer = null;

let ms = 0;
let sec = 0;
let min = 0;

startbtn.addEventListener("click",function(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(start,10)
})

stopbtn.addEventListener("click",function(){
    clearInterval(timer);
    timer = null;
})

resetbtn.addEventListener("click",function(){
    clearInterval(timer);
    timer = null;
    ms = sec = min = 0;
    time.innerHTML ="00:00:00"
})

function start(){
    ms++
    if(ms === 100){
        ms =0;
        sec++
    }
    if(sec === 60){
        sec = 0;
        min++
    }
    let msstr = ms < 10 ? `0${ms}` : ms;
    let secstr = sec < 10 ? `0${sec}` : sec;
    let minstr = min < 10 ? `0${min}` : sec;

    time.innerHTML = `${minstr} : ${secstr} : ${msstr}`
}