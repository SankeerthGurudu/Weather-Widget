import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo] = useState({
        city: "Gurudu Dynasty",
        feelslike: 24.84,
        temp: 14.03,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}