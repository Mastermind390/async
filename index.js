
let IntervalId;

function countdownTo2024() {
    const targetDate = '2024-01-01';
    const target = new Date(targetDate);

    const remainingTime = target.getTime() - new Date().getTime();
    

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;


    const months = Math.floor((remainingTime /day) / 24);
    

    const days = Math.floor(remainingTime / day);
   

    const hours = Math.floor((remainingTime % day) / hour);
    

    const minute = Math.floor((remainingTime % hour) / minutes);
    

    const second = Math.floor((remainingTime % minutes) / seconds);
   

    const monthDisplayEl = document.getElementById('month-display').innerHTML = months;
    const dayDisplayEl = document.getElementById('day-display').innerHTML = days;
    const hoursDisplayEl = document.getElementById('Hours-display').innerHTML = hours;
    const minuteDisplayEl = document.getElementById('minutes-display').innerHTML = minute;
    const secondsDisplayEl = document.getElementById('seconds-display').innerHTML = second;

    const happyNewYear = document.querySelector('.happy-new-year-text');

    
    
    IntervalId =  setInterval(()=>{
        countdownTo2024()
    }, 1000)
    

    if (remainingTime < 0) {
        happyNewYear.innerHTML = 'HAPPY NEW YEAR';
        clearInterval(IntervalId)
    }
    

};

countdownTo2024();

//const nums = 16 + 30 + 31 + 30 + 31;
//console.log(nums)

/*

const monthDiff = Math.floor((target.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) / 24)
    console.log(monthDiff)

    
    const daysDiff = Math.floor((target.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    console.log(daysDiff)

    const hoursDiff = Math.floor((target.getTime() - new Date().getTime()) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );

*/