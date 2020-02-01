const API_KEYU = `dea71981bd5b45dadedd05e9c5bec3e8`;
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

 function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYU}&units=metric`
    ).
    then(function(response){  //값을 받은다음 실행되는 함수           
        return response.json();  //obj를 json으로 가져옴
    }).
    then(function(json){   //json 호출
//        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
      
 }

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));   //obj를 string으로 변환함
}

function handleGeosucces(position){   //위치를 알아낼수있으면 실행
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;    
    const coordsObj = {
        latitude,          //원래는 latitude : latitude 오브젝트의 이름과 설정된 변수의 이름이 같은경우 생략가능
        longitude          //위와같음 longitude : longitude 오브젝트의 이름과 설정된 변수의 이름이 같은경우 생략가능
    };

    saveCoords(coordsObj);

    console.log(coordsObj);   

    getWeather(latitude,longitude);
}

function handleGeoError(){   //위치를 알아낼수 없으면 실행
    console.log('Cant access geo location');
}

function askForCoords(){ //접속한 사람의 위도경도를 나타냄
    navigator.geolocation.getCurrentPosition(handleGeosucces , handleGeoError);  //인자순서 -> 위치를 알아냈을때 함수실행, 위치를 알아낼수 없을때 함수 실행
}

function loadCoords (){  

    const loadedCoords = localStorage.getItem(COORDS);   //coords라는 이름의 저장소내용을 가져옴

    if(loadedCoords === null){  //저장소의 내용이 없다면
        askForCoords();   //함수실행

    }else{   //저장소의 내용이 있다면
        const parseCoords = JSON.parse(loadedCoords);  //string으로 obj로 변환함
        getWeather(parseCoords.latitude, parseCoords.longitude)   //
    }
}







function init(){
    loadCoords();
}




init();