const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours <10 ? `0${hours}` : hours
    }:${
        minutes <10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function sayHi(){
    console.log('hi');
}




function init(){
    getTime();
    // setInterval 일정시간을 간격으로 계속 함수를 실행함 1번째 인자는 함수이름, 2번째 인자는 실행간격 시간
    setInterval(getTime,1000);  
}
init();