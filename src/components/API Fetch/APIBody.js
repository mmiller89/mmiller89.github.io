import React from "react";
import './apibody.css';
import { useState } from "react";
import sun from '../../images/sun.gif';
import rain from '../../images/drop.gif';
import cloud from '../../images/clouds.gif';
import snow from '../../images/snow.gif';
import storm from '../../images/windy.gif';
import frog from '../../images/meme_frog.png';

//UPDATE 5/31
//Added Metric/Imperial conversion and an input field to type a name of your choice.
//Added basic error handling.

/**
 * DEMONSTRATED SKILLS
 * -----
 * API fetch request with error handling.
 * Manipulation of user data with API calls.
 * Dynamic display based on API call data.
 * Meme humor (type a non-existant city into the input field)
 */

//TO-DO
//More error checking and handling. 
//More styling.


const APIBody = () => {

   
    const [degreeType, setDegreeType] = useState("F");
    const [mOrI, setMOrI] = useState("imperial")
    const [temp, setTemp] = useState("34");
    const [timeZone, setTimeZone] = useState("");
    const [highTemp, setHighTemp] = useState("");
    const [lowTemp, setLowTemp] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    const [forecast, setForecast] = useState("");
    const [humidity, setHumidity] = useState("");
    const [airPressure, setAirPressure] = useState("");
    const [weatherImage, setWeatherImage] = useState(sun);
    const [canSearch, setCanSearch] = useState(false);



    const apiKey = '4bb72e9fc33a65271b444a52f7cd8876';
    
    let long;
    let lat;
    let apiCallGeo;
    let array = [];
    let typedCity;
    
    
    
  

    const fetchData = (request, apiCallCity) => {
        if (request === "city"){
            fetch(apiCallCity)
            .then(response => {
                if(!response.ok){
                    setTimeZone(<div><img src={frog} alt="Meme Frog" /><div>Not Found</div></div>);
                    setTemp("");
                    setHighTemp("");
                    setLowTemp("");
                    setWindSpeed("")
                    setForecast("")
                    setHumidity("");
                    setAirPressure("");
                    {throw response}
                } else {
                   return response.json()
                }
                })
            .then(response => {
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
            .then(response => {
                if(!response.ok){
                    setTimeZone(<div><img src={frog} alt="Meme Frog"/><div>Not Found</div></div>);
                    setTemp("");
                    setHighTemp("");
                    setLowTemp("");
                    setWindSpeed("")
                    setForecast("")
                    setHumidity("");
                    setAirPressure("");
                    {throw response}
                } else {
                   return response.json()
                }
                })
            .then(response => {
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
            //array push is a synchronous
        
            
                
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
            default:
                setWeatherImage(sun)
                break;

        }
        if (mOrI === "imperial"){
            setDegreeType("F")
        } else {
            setDegreeType("C")
        }
        
    }

    const retrieveLL = (pos) => {
        long = pos.coords.longitude;
        lat = pos.coords.latitude;
        apiCallGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${mOrI}`;
       
        
    }

    const failRetrieve = () => {
        alert("Failed to retrieve location data.")
    }

    const degreeConvert = (event) => {
        setCanSearch(true);
        if (event.target.value === "imperial"){
            setMOrI("imperial")
        } else if (event.target.value === "metric"){
            setMOrI("metric");
            
        }

       
    }
    const pullWeatherData = (value) => {
        if (canSearch === true){
            let cityName = value.target.value;
            let newCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${mOrI}`;
            if (cityName === "My"){
                fetchData("geo");
            } else {
                fetchData("city", newCall);
            }
        } else {
            alert("Ensure Celcius or Farhenheit is enabled.")
        }
        

       
        
    }

    const inputChangeHandler = (event) => {
        typedCity = event.target.value;
    }

    const submitTypedCity = () => {
        if (canSearch === true){
            let newCall = `https://api.openweathermap.org/data/2.5/weather?q=${typedCity}&appid=${apiKey}&units=${mOrI}`;
            fetchData("city", newCall);
        } else {
            alert("Ensure Celcius or Farhenheit is enabled.")
        }
       
    }



    
    
    

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="skyblue" fill-opacity="1" d="M0,224L26.7,208C53.3,192,107,160,160,154.7C213.3,149,267,171,320,192C373.3,213,427,235,480,224C533.3,213,587,171,640,138.7C693.3,107,747,85,800,85.3C853.3,85,907,107,960,117.3C1013.3,128,1067,128,1120,133.3C1173.3,139,1227,149,1280,176C1333.3,203,1387,245,1413,266.7L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                <div  className="main-weather jump-head location">
                        <div className='location-timezone text'>
                            <div className='large-text font-indie' onClick={navigator.geolocation.getCurrentPosition(retrieveLL, failRetrieve)}>{timeZone}</div>
                            <div className="descriptor-data">
                                <input type="radio" id="f" name="imperial" value="imperial" className="radio-button" onChange={degreeConvert}/>
                                <label htmlFor="html" className="radio-button"> Farhenheit</label>
                                <input type="radio" id="c" name="metric" value="metric" className="radio-button" onChange={degreeConvert}/>
                                <label htmlFor="css">Celcius</label>
                            </div>
                            
                            <div className='city-selector'>
                                <label className="right-space choose-city descriptor-data" htmlFor="city">Choose a city </label>
                                <select className="right-space" onChange={pullWeatherData} name="city" id="city">
                                <option disabled selected value>Select</option>
                                <option value="My">My Location</option>
                                <option value="London">London</option>
                                <option value="Paris">Paris</option>
                                <option value="New York">New York</option>
                                <option value="Tokyo">Tokyo</option>
                                
                                </select>
                                <div className="descriptor-data radio-button">
                                    Enter City/State Name*   <input type="text" onChange={inputChangeHandler} />  
                                    <button type="button" className="btn btn-primary" onClick={submitTypedCity}>Check</button>
                                </div>
                                
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
                                        <div>*Prototype - Not case sensitive, but space sensitive.</div>
                                    </div>
                                    
                                    
                                </div>
                               
                                
                                      
                            </div>
                            
                            
                            </div>
                            
                    </div>
                    
                       
                    
                   
                
                    
                
                
        </div>
    
    )
}


export default APIBody;