// End of the year date to count down to
// 1000 milliseconds = 1 second

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(()=>{
    //Get date now:
    let dateNow = new Date().getTime();

    //Find the date difference between now 
    //and the date we're counting down to:
    let datediff = countDownDate - dateNow;

    //get time units:
    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days < 10? `0${days}` : days;

    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000*60*60));
    document.querySelector(".hours").innerHTML = hours < 10? `0${hours}` : hours;

    let minutes = Math.floor((datediff % (1000 * 60 * 60))/(1000*60));
    document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}`: minutes;

    let seconds = Math.floor(datediff % (1000 * 60)/1000);
    document.querySelector(".seconds").innerHTML = seconds < 10? `0${seconds}`: seconds;

    if(datediff < 0){
        clearInterval(counter);
    }

}, 1000);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let section = document.querySelector(".skill");
let spans = document.querySelectorAll(".progress span");

let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".number");
let started = false; //Fun. started? No.


window.onscroll = function(){
    if(window.scrollY >= section.offsetTop - 300){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width;
        });
    };
    
    if(window.scrollY >= stats.offsetTop){
        if(!started){
            numbers.forEach((number) => startCount(number));
        }
        started = true;
    };
};

function startCount(e){
    let goal = parseInt(e.dataset.goal);
    console.log(goal);
    let counter = setInterval(() => {
        parseInt(e.textContent++);
        if(parseInt(e.textContent) === goal){
            clearInterval(counter);
        }
    }, 2000 / goal);
};

////////////////////////////////////////////////////////////////////////////////


// window.onscroll = function(){
// };

