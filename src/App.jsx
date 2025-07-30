import React, { useState } from 'react'
import "./App.css"

function App() {
  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState("")
  const [found, setFound] = useState("")

  async function handleWeather() {
    const API_KEY = "79c867ebef74d6778930aaed31c02ecf"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`
    const result = await fetch(url)
    const response = await result.json()

    if (response.cod === 200) {
      setWeather(response)
      setFound("")
    } else {
      setFound("No city found")
      setWeather(null)
    }
  }

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city"
        />
        <button onClick={handleWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="weather-info">
          <h3>City: {weather.name}</h3>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}

      {found && <h2 className="error-message">{found}</h2>}
    </div>
  )
}

export default App
