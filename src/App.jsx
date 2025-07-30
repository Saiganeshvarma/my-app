import React, { useState } from 'react'
import "./App.css"

function App(){
    var [weather,setWeather] = useState(null)
    var [input,setInput] = useState("")
    var [found,setFound] = useState("")
    async function handleWeather(){
        var API_KEY =  "79c867ebef74d6778930aaed31c02ecf"
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`
         var result = await fetch(url)
         var response = await result.json()
         if(response.cod === 200){
            setWeather(response)
            setFound("")
         }else{
            setFound("no city found")
            setWeather("")
         }

    }
    return(
        <div>
            <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
            <button onClick={handleWeather}>Weather</button>
            {
                weather && (
                    <div>
        <h3>City: {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>

                    </div>
                )
            }
            <h1>{found}</h1>

        </div>
        
    )
}
export default App