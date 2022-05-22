import React from "react";
import './apibody.css';
import { useState } from "react";
import sun from '../../images/sun.gif';
import rain from '../../images/drop.gif';
import partycloudy from '../../images/cloudy.gif';
import heavyclouds from '../../images/clouds.gif';
import thunder from '../../images/thunder.gif';
import snow from '../../images/snow.gif';

const APIBody = () => {

   
    const [degreeType, setDegreeType] = useState("F");
    const [temp, setTemp] = useState("34");
    const [timeZone, setTimeZone] = useState("");
    const [highTemp, setHighTemp] = useState("");
    const [lowTemp, setLowTemp] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [forecast, setForecast] = useState("clear sky");
    const [weatherImage, setWeatherImage] = useState(sun);



    const apiKey = '4bb72e9fc33a65271b444a52f7cd8876';
    let long;
    let lat;
    let apiCallF;
    let apiCallC;
  

    const fetchData = () => {
        fetch(apiCallF)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setTimeZone(response.name)
            setTemp(response.main.temp.toFixed(1));
            setHighTemp(response.main.temp_max.toFixed(1));
            setLowTemp(response.main.temp_min.toFixed(1));
            setWindSpeed(response.wind.speed + " MPH")
            setForecast(response.weather[0].main)
        })

        switch(forecast){
            case "clear sky":
                setWeatherImage(sun)
                break;
            case "few clouds":
                setWeatherImage(heavyclouds)
                break;
            case "scattered clouds":
                setWeatherImage(partycloudy)
                break;
            case "broken clouds":
                setWeatherImage(partycloudy)
                break;
                
            case "shower rain":
                setWeatherImage(rain)
                break;
            case "rain":
                setWeatherImage(rain)
                break;
            case "thunderstorm":
                setWeatherImage(thunder)
                break;
            case "snow":
                setWeatherImage(snow)
                break;
            case "mist":
                setWeatherImage(rain)
                break; 
        }
        
    }
    
 

    const retrieveLL = (pos) => {
        long = pos.coords.longitude;
        lat = pos.coords.latitude;
        apiCallF = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
        apiCallC = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        fetchData();
    }

    const failRetrieve = () => {
        alert("Failed to retrieve location data.")
    }



    
    
    

    return (
        <div className="main-weather jump-head">
            <div className='location'>
                
                        <div className='location-timezone text'>
                            <p className='large-text' onClick={navigator.geolocation.getCurrentPosition(retrieveLL, failRetrieve)}>{timeZone}</p>
                            <div className="descriptor-data">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="descriptor-title">High/Low</div>
                                            <div className="descriptor-space">{highTemp + " / " + lowTemp + "  " + degreeType}</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="descriptor-title">Wind</div>
                                            <div className="descriptor-space">{windSpeed}</div>
                                        </div>
                                        <div className="col-4">
                                            <div className="descriptor-title">Forecast</div>
                                            <div className="descriptor-space">{forecast}</div>  
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <img src={weatherImage} alt="Cloud" height="300" width="300"/>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="temperature-degree large-text">{temp} {degreeType}</div>
                                    </div>
                                    <div className="row">
                                        <center><a href="https://www.flaticon.com/free-animated-icons/sun" title="sun animated icons">Animated icons created by Freepik - Flaticon</a></center>
                                    </div>
                                </div>
                               
                                
                                      
                            </div>
                            
                            
                            </div>
                            
                    </div>
                    
                       
                    
                   
                
                    
                
                
        </div>
    
    )
}


export default APIBody;