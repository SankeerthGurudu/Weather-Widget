import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

export default function SearchBox({updateInfo}) {
    const [city, setcity] = useState('');
    const [error, seterror] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="fda5c21697d8e1065e9b4589d1a1f078"

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse=await response.json()
            // console.log(jsonResponse)
            let result={
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    };


    let handleChange=(e)=>{
        setcity(e.target.value);
    };

    let handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            console.log(city);
            setcity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            seterror(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br/>
                <br /> 
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}