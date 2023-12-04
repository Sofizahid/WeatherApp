import React, { useState } from "react";
import './Weather.css';

const  Weather=()=>{
  let api_key="52ff285a5bd70bbdf4e35b597f0f3394";
  const search= async()=>{
    let element=document.getElementsByClassName('cityinput')
    if(element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response=await fetch(url);
    let data=await response.json();
    const humidity=document.getElementsByClassName('humidity-percentage');
    const windSpeed=document.getElementsByClassName('wind-speed');
    const temperature=document.getElementsByClassName('weather-temp');
    const location=document.getElementsByClassName('weather-location');
    humidity[0].innerHTML=data.main.humidity+"%";
    windSpeed[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
    temperature[0].innerHTML=Math.floor(data.main.temp)+"°c";
    location[0].innerHTML=data.name;
 
  }
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text"className='cityinput' placeholder='search' />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src="Asset/search.png" alt="" />
        </div>
      </div>
        <div className="weather-image">
          <img src="Asset/cloud.png" alt="cloudimg"  />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src="Asset/humidity.png" alt="" className="icon" />
            <div className="data">
              <div className="humidity-percentage">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src="Asset/wind.png" alt="" className="icon" />
            <div className="data">
              <div className="wind-speed">18km/h</div>
              <div className="text">wind speed</div>
            </div>
          </div>
        </div>

     </div>
    

  )
}

export default Weather;