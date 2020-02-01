// let a=221;
// b=a-5;
// console.log(b);

// //array
// const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// console.log(daysOfWeek[2]);

// //Object ######################중요!!!!!!!!!!!!!!!!!!!!
// const sangwooInfo = {
//     name:"Sangwoo",
//     age:33,
//     gender:"Male",
//     isHandsome:true,

//     //array in the object ver.1
//     favMovies: ["dark city","thanks for smoking","struct by lighting","Upgrade"],

//     //array in the object ver.2
//     favFood: [
//         {
//             name:"Kimchi", 
//             fatty:false
//         }, 
//         {
//             name:"Cheese burger", 
//             fatty:true
//         }
//     ]    
// }
// console.log(sangwooInfo);
// console.log(sangwooInfo.gender);  //특정 오브젝트에만 접근하고싶을때
// sangwooInfo.gender = "Femail";    //특정 오브젝트만 변경가능
// console.log(sangwooInfo.gender);  //특정 오브젝트에만 접근하고싶을때
// console.log(sangwooInfo.favFood[1]);  //특정 오브젝트에만 접근하고싶을때
// console.log(sangwooInfo.favMovies[1]);  //특정 오브젝트에만 접근하고싶을때

// //function 사용법1
// function sayHello(name,age){
//     console.log(`name: ${name} , age: ${age}`);    
// }
// sayHello("sangwoo", 2019-1989);



// //function 사용법2
// function info(name,age){
//     return (`name: ${name} , age: ${age}`);    
// }

// const infoSangwoo = info("sangwoo", 2019-1989);

// //function 사용법2
// console.log(infoSangwoo);

// //object 안에서 function 사용
// const calculator = {
//     sum: function(a, b){
//         return a + b;
//     },
//     min: function(a, b){
//         return a - b;
//     },
//     mul: function(a, b){
//         return a * b;
//     },
//     div: function(a, b){
//         return a / b;
//     },
//     pow: function(a, b){
//         return a ** b;
//     }
// }

// // console.log();
// const sum = calculator.sum(5,6);
// const min = calculator.min(5,6);
// const mul = calculator.mul(5,6);
// const div = calculator.div(5,6);
// const pow = calculator.pow(2,3); //거듭제곱 값
// console.log(sum,min,mul,div,pow);

//document = html
// const title = document.getElementById("title");
// const title = document.querySelector("#title");
// console.log(title);

// title.innerHTML = "Hi From JS";
// title.style.color = "white";

// document.title = "welcome";

// function handleReesize(event){
//     console.log(event);
//     console.log("I have resized");
// }


// //resize 브라우저창의 크기가 변경되면 실행되는 이벤트
// window.addEventListener("resize", handleReesize);  //handleResize()로 호출하면 그냥 바로 실행됨




//event ex2 클릭시 이벤트
// const title = document.querySelector("#title");


// function handleClick(){    
    
//     if(title.style.color==="blue"){
//         title.style.color = "red";  
//     }else{
//         title.style.color = "blue";  
//     }
// }


// title.addEventListener("click",handleClick);


// //event ex3 
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){    
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }

// }
// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick);   //마우스 커서가 범위안에 들어가면 이벤트작동
// }

// init();  //초기화




// //online event ex1  wifi에 반 응하는듯(아마도...)

// const title = document.querySelector("#title");

// function handleOnline(){
//     console.log("Welcome back!");  
// }


// function handleOffline(){
//     console.log("Bye bye");  
// }


// window.addEventListener("online", handleOnline);



//##########클래스로 조절
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"; 


function handleClick() {    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // console.log(hasClass);
    // if(!hasClass){        
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);  //위 내용을 간단하게 해줌
}


function init(){
    title.addEventListener("click", handleClick);
}
init();