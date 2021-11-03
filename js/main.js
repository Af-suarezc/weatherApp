let weather = {
    "apiKey":"81ad927396b99940625f18d1c40a426d",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apiKey).then((response)=> response.json()).then((data)=>this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText ="The weather in " +  name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".temp").innerText =temp + " °C";
        document.querySelector(".humidity").innerText ="The humidity is: " +humidity + " %";
        document.querySelector(".description").innerText =description;
        document.querySelector(".wind").innerText ="The wind speed is: " + speed    + " km/h";
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", function buscar (){
    weather.search()
});

//adding the search function to the keyUp event, with the Enter key

document.querySelector(".search-bar").addEventListener("keyup", function buscarEnter(event){
    if(event.key == "Enter"){
        weather.search();
    }
})