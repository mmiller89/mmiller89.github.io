import React from "react";
import './apibody.css';
import { useState } from "react";
import sun from '../../images/sun.gif';
import rain from '../../images/drop.gif';
import cloud from '../../images/clouds.gif';
import snow from '../../images/snow.gif';
import storm from '../../images/windy.gif';

const APIBody = () => {

   
    const [degreeType, setDegreeType] = useState("F");
    const [temp, setTemp] = useState("34");
    const [timeZone, setTimeZone] = useState("");
    const [highTemp, setHighTemp] = useState("");
    const [lowTemp, setLowTemp] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [forecast, setForecast] = useState("");
    const [humidity, setHumidity] = useState("");
    const [desc, setDesc] = useState("");
    const [airPressure, setAirPressure] = useState("");
    const [weatherImage, setWeatherImage] = useState(sun);



    const apiKey = '4bb72e9fc33a65271b444a52f7cd8876';
    let long;
    let lat;
    let apiCallGeo;
    let cOrF;
    let array = [];
    
  

    const fetchData = (request, apiCallCity) => {
        if (request === "city"){
            fetch(apiCallCity)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setTimeZone(response.name)
                setTemp(response.main.temp.toFixed(1));
                setHighTemp(response.main.temp_max.toFixed(1));
                setLowTemp(response.main.temp_min.toFixed(1));
                setWindSpeed(response.wind.speed + " MPH")
                setForecast(response.weather[0].main)
                setHumidity(response.main.humidity);
                setAirPressure(response.main.pressure);
                array.push(response.weather[0].description);
                setImage();
           
            })
         
            
        } else {
            fetch(apiCallGeo)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setTimeZone(response.name)
                setTemp(response.main.temp.toFixed(1));
                setHighTemp(response.main.temp_max.toFixed(1));
                setLowTemp(response.main.temp_min.toFixed(1));
                setWindSpeed(response.wind.speed + " MPH")
                setForecast(response.weather[0].main)
                setHumidity(response.main.humidity);
                setAirPressure(response.main.pressure);
                array.push(response.weather[0].description);
                setImage();
               
            })

            //Had a huge problem with images not loading properly, they would load the previous
            //weather condition. I tried to base it off a 0 array, which I'm guessing works because
            //array push is a synchronous task.
        
            
                
        }

      
        
       

        
        
    }
    
  

    const setImage = () => {
        switch(array[0]){
            case "dust":
                setWeatherImage(storm)
                break;
            case "clear sky":
                setWeatherImage(sun)
                break;
            case "few clouds":
                setWeatherImage(cloud)
                break;
            case "scattered clouds":
                setWeatherImage(cloud)
                break;
            case "broken clouds":
                setWeatherImage(cloud)
                break;
                
            case "shower rain":
                setWeatherImage(rain)
                break;
            case "rain":
                setWeatherImage(rain)
                break;
            case "thunderstorm":
                setWeatherImage(cloud)
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
        cOrF = "imperial"
        apiCallGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${cOrF}`;
       
        
    }

    const failRetrieve = () => {
        alert("Failed to retrieve location data.")
    }

    const pullWeatherData = (value) => {
        
        let cityName = value.target.value;
        let newCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${cOrF}`;
        if (cityName == "My"){
            fetchData("geo");
        } else {
            fetchData("city", newCall);
        }
        
    }



    
    
    

    return (
        <div>
            <div  className="main-weather jump-head location">
                
                        <div className='location-timezone text'>
                            <p className='large-text font-indie' onClick={navigator.geolocation.getCurrentPosition(retrieveLL, failRetrieve)}>{timeZone}</p>
                            <div className='city-selector'>
                                <label className="right-space" htmlFor="city">Choose a city </label>
                                <select className="right-space" onChange={pullWeatherData} name="city" id="city">
                                <option value="London">London</option>
                                <option value="Paris">Paris</option>
                                <option value="New York">New York</option>
                                <option value="Tokyo">Tokyo</option>
                                <option value="My">My Location</option>
                                </select>
                            </div>
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
                                        <div className="col-4">
                                            <div className="descriptor-title">Humidity</div>
                                            <div className="descriptor-space">{humidity}%</div> 
                                        </div>
                                        <div className="col-4">
                                            <img className='weather-img' src={weatherImage} alt="Weather"/>
                                        </div>
                                        <div className="col-4">
                                            <div className="descriptor-title">Air Pressure</div>
                                            <div className="descriptor-space">{airPressure}</div> 
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="temperature-degree large-text">{temp} {degreeType}</div>
                                    </div>
                                    
                                </div>
                               
                                
                                      
                            </div>
                            
                            
                            </div>
                            
                    </div>
                    
                       
                    
                   
                
                    
                
                
        </div>
    
    )
}


export default APIBody;