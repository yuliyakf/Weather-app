
let city=document.getElementById("city");
let searchBtn=document.getElementById("searchBtn")
let displayCity=document.getElementById("displayCity")
let temp = document.getElementById('temp')
let wind= document.getElementById('wind')
let humidity=document.getElementById('humidity')
let historyItem = document.getElementById('historyItem')
let description= document.getElementById('description')

searchBtn.addEventListener("click", searchFunc);

function searchFunc(e){
  
    if(searchBtn){
        fetchData(city.value);   
    setStorage();
      city.value='';
    }
}

function fetchData(value){
    //;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=c72883eda9179bf6e121bd23941488cd')
    .then((res)=>res.json())
    .then((weather)=>{
        displayCity.innerHTML=weather.name;
        temp.innerHTML= weather.main.temp;
        description.innerHTML=weather.weather[0].main;
        wind.innerHTML= weather.wind.speed;
        humidity.innerHTML=weather.main.humidity;  
    })
    .catch((error)=>console.log(error))
    setStorage(); 
}

function setStorage(){
    if(!localStorage.getItem('city.value')){
        populateStorage();
    }else {
        setCity();
    }
}

function populateStorage(){
    localStorage.setItem("city", city.value)
    setCity();
}
function setCity(){
    historyItem.innerHTML=localStorage.getItem("city")

}





//fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=c72883eda9179bf6e121bd23941488cd').then((res)=>res.json()).then(console.log)