const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';  //toDos

let toDos = [];



function deleteTodo(event){
    //console.log(event.target.parentNode);
    const btn = event.target; 
    const li = btn.parentNode;
    toDoList.removeChild(li);
    console.log(localStorage.getItem(TODOS_LS));
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);    
    });
    toDos = cleanToDos;
    saveToDos();

}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  
    //로컬스토리에는 자바스크립트를 추가 불가능 그래서 스트링형태로 변환후(JSON.stringify()) 추가가능
}

function paintToDo (text){    //인풋값을 넘겨받아 각종 값을 만들어줌
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    span.innerText = text;
    delBtn.addEventListener("click",deleteTodo);
    
    li.appendChild(delBtn);  //li에 delBtn 추가
    li.appendChild(span);   //li에 span 추가 
    li.id = newId;   //li에 id 추가

    toDoList.appendChild(li);  //toDoList에 위에 추가된 내용인 li를 전부

    toDoInput.value=""; //입력후 인풋창 초기화
    
    const toDoObj = { //오브젝트화 시켜서 데이터를 저장
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){  //초기화시 실행되는 함수1
    event.preventDefault();  //이벤트 중지
    const currentValue = toDoInput.value;  //toDo의 인풋값을 가져옴
    paintToDo(currentValue);  //paintToDo함수 로 인풋값 넘기고 함수실행
   
}

function loadToDos(){   //로컬스토리지에 저장된 toDoList에서 값을 가져옴
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null ){
        
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){  //parseToDos안에있는 데이터마다 함수를 각각 실행시킨다
            paintToDo(toDo.text);            
        });       
        
    }
}


function init(){  //초기화
    loadToDos();    
    toDoForm.addEventListener("submit", handleSubmit);
}

init();  //초기화 실행