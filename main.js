
let city=document.getElementById("city");
let searchBtn=document.getElementById("searchBtn")
let displayCity=document.getElementById("displayCity")
let temp = document.getElementById('temp')
let wind= document.getElementById('wind')
let humidity=document.getElementById('humidity')
let historyItem = document.querySelector('.historyItem')
let description= document.getElementById('description')
let date= document.getElementById('date')
let tempCard1=document.querySelector('.tempCard1')
let tempCard2=document.querySelector('.tempCard2')
let tempCard3=document.querySelector('.tempCard3')
let tempCard4=document.querySelector('.tempCard4')
let tempCard5=document.querySelector('.tempCard5')
let dateCard1=document.querySelector('.dateCard1')
let dateCard2=document.querySelector('.dateCard2')
let dateCard3=document.querySelector('.dateCard3')
let dateCard4=document.querySelector('.dateCard4')
let dateCard5=document.querySelector('.dateCard5')
let deskCard1=document.querySelector('.deskCard1')
let deskCard2=document.querySelector('.deskCard2')
let deskCard3=document.querySelector('.deskCard3')
let deskCard4=document.querySelector('.deskCard4')
let deskCard5=document.querySelector('.deskCard5')
let windCard1=document.querySelector('.windCard1')
let windCard2=document.querySelector('.windCard2')
let windCard3=document.querySelector('.windCard3')
let windCard4=document.querySelector('.windCard4')
let windCard5=document.querySelector('.windCard5')
let humidityCard1=document.querySelector('.humidityCard1')
let humidityCard2=document.querySelector('.humidityCard2')
let humidityCard3=document.querySelector('.humidityCard3')
let humidityCard4=document.querySelector('.humidityCard4')
let humidityCard5=document.querySelector('.humidityCard5')
let icon=document.querySelector('.icon')
let icon1=document.querySelector('.icon1')
let icon2=document.querySelector('.icon2')
let icon3=document.querySelector('.icon3')
let icon4=document.querySelector('.icon4')
let icon5=document.querySelector('.icon5')
let historyBox=document.querySelector('.historyBox')
let today= new Date().toLocaleDateString();


searchBtn.addEventListener("click", searchFunc);



function searchFunc(e){
  
 date.innerHTML= today;
    if(searchBtn){
        fetchData(city.value); 
           
    //setCity();
      
      setStorage();
    }city.value='';

}

function fetchData(value){
    
    fetch('https://api.openweathermap.org/data/2.5/forecast/?q='+value+'&appid=c72883eda9179bf6e121bd23941488cd')
    .then((res)=>res.json())
    .then((forecast)=>{
        displayCity.innerHTML=forecast.city.name;
        temp.innerHTML= `${Math.round((((forecast.list[0].main.temp)-273.15)*1.8) +32)}&#176;F`
        description.innerHTML=forecast.list[0].weather[0].main;
        wind.innerHTML= `${Math.round(forecast.list[0].wind.speed)} mph`;
        humidity.innerHTML=`${forecast.list[0].main.humidity} %`;  

        if(description.innerHTML == "Clouds"){
            icon.src = "./images/cloud-sun-solid.svg"
         }else if (description.innerHTML == "Clear"){
             icon.src = "./images/sun-regular.svg"
         }else if(description.innerHTML == "Rain"){
             icon1.src = "./images/cloud-rain-solid.svg"
         }

        setFiveDay(forecast);
    })
    
}
let cityArr=[]
function setStorage(){
  let historyCities=JSON.parse(localStorage.getItem('cityArr'))
    cityArr.push(city.value)
    localStorage.setItem('cityArr', JSON.stringify(cityArr))

    //historyCities.forEach(function(historyItem){
    
        historyItem.classList.add("archivedItems");
    historyItem.innerHTML=historyCities;

   // })
 
}


function setFiveDay(forecast){
    //tomorrow index 8
    let tomorrow= new Date()
    tomorrow.setDate(tomorrow.getDate()+1)
        dateCard1.innerHTML=tomorrow.toLocaleDateString()
        tempCard1.innerHTML= `${Math.round((((forecast.list[8].main.temp)-273.15)*1.8) +32)}&#176;F`;
        deskCard1.innerHTML=forecast.list[8].weather[0].main;
        windCard1.innerHTML= `${Math.round(forecast.list[8].wind.speed)} mph`;
        humidityCard1.innerHTML=`${forecast.list[8].main.humidity} %`;    
          
        if(deskCard1.innerHTML == "Clouds"){
           icon1.src = "./images/cloud-sun-solid.svg"
        }else if (deskCard1.innerHTML == "Clear"){
            icon1.src = "./images/sun-regular.svg"
        }else if(deskCard1.innerHTML == "Rain"){
            icon1.src = "./images/cloud-rain-solid.svg"
        }
    //the day after tomorrow index 16
    //the 3rd day index 24
    //the 4th day index 32
    //the 5th day index 39
       
}


//fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=c72883eda9179bf6e121bd23941488cd').then((res)=>res.json()).then(console.log)

