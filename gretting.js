const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    removeNameBTN = document.querySelector(".removeName");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";



function removeName(text){   //로컬스토리지 클리어
    askForname();
    localStorage.clear(); //로컬스토리지 완전비움
    localStorage.removeItem(USER_LS);  //키값으로 지움
    greeting.innerText="";       
}


removeNameBTN.addEventListener("click", removeName);



function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault(); //이벤트를 막는기능
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForname(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit" , handleSubmit);
    removeNameBTN.classList.remove(SHOWING_CN);    
    
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    input.value="";
    greeting.classList.add(SHOWING_CN);    
    greeting.innerText = `Hello ${text}`;    
    removeNameBTN.classList.add(SHOWING_CN); 
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not        
        askForname();
    }else{
        // she is
        paintGreeting(currentUser);        
    }
}


function init(){
    loadName();    
}
init();