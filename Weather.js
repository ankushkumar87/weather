//for styling add css
import React from 'react'
import { useState } from 'react';
const Weather = () => {
    let[city,setcity]=useState('');
    let[msg,setmsg]=useState('');
    let[weather,setweather]=useState();
    const fetchdata=async()=>{
      try{
        if(!city){
          setmsg('Please Enter the city name!!');  
         }else{
           let key='e6f2d9b7cfd567a69bfe264d3a82b175'; 
           let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;      
         let response=await fetch(url);
          let result=await response.json();
          console.log(result);
          setweather(result);
          setmsg('');
          if(!result.message){        
          }else{
           setmsg('No Data found Please enter the valid city name');
          }
         }
      }catch(error){
         console.log(error);
      }     
     }     
   return (
    <div className='ctnr'>
     <div className='city'>
       <input type='text' className='w'  value={city} placeholder='Enter the City Name' onChange={(e)=>setcity(e.target.value)}/>
       <button  className='se' onClick={fetchdata}>
       <i class="fa-solid fa-magnifying-glass" style={{backgroundColor:"white",cursor:"pointer"}}></i>
       </button>
       </div>
       {
          msg && <span className='msg'>{msg}</span>
       }
       {
        weather&&weather.weather&&
        <div>
          <div className='icon'>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='img'/>
            <h4 style={{marginTop:"-20px",textTransform:"capitalize"}}>{weather.weather[0].description}</h4>
           </div>
           <div className='temp'>
            <h1>{Math.floor(weather.main.temp)}<span>&deg;C</span></h1>
            <h3 style={{fontSize:"16px,"}}><span style={{color:"brown"}}><i class="fa-solid fa-location-dot"></i></span>{' '}
             {weather.name},{weather.sys.country}</h3>
           </div>
           <div className='card'>
           <div className='card1'>
            <span className='ico'><i class="fa-solid fa-wind"></i></span>
            <h4 style={{textAlign:"center",marginTop:"15px"}}>{weather.wind.speed}km/h</h4>
            <h3 style={{textAlign:"center",marginTop:"5px",fontSize:"16px"}}>WIND SPEED</h3>
            </div>
           <div className='card2'>          
            <spna className='ico'><i class="fa-solid fa-droplet"></i></spna>
             <h4 style={{textAlign:"center",marginTop:"15px"}}>{weather.main.humidity}%</h4>
             <h3 style={{textAlign:"center",marginTop:"5px",fontSize:"16px"}}>HUMIDITY</h3>
           </div>
           </div>
        </div>
       }
       <div>
      </div>
    </div>
  )
}
export default Weather
