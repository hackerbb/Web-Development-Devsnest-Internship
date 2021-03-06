import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const [fdata,setfdata] = useState([]);
  const a = new Date().getHours();
  const updatePlaceData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=08b3afe0bb224a198ed75707212508&q=${place}`)
      .then((res) => res.json())
      .then((data)=>{
        setPlaceData(data)
       
      });
      console.log(placeData)
     updatefdata()
      console.log(a)
  };
const updatefdata  =  () => {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=08b3afe0bb224a198ed75707212508&q=${place}`)
    .then((res) => res.json())
      .then((data)=>{
         setfdata(data.forecast.forecastday[0].hour);
      });
    
      console.log(fdata);
    }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="form">
            <input type="text" 
            value={place}
            onChange={(e)=>{
              setPlace(e.target.value);
            }}/>
            <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
          </div>
          <div className="offset-md-4  col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°C</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">Wind now
                        </div>
                        <div className="data">{placeData.current.wind_kph}<span className="unit">Kmph</span></div>
                      </div>
                      <div className="col">
                      <div className="title">Humidity  </div>
                    
                      <div className="data">{placeData.current.humidity}
                        <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                      <div className="title">Precipitation</div>
                        <div className="data">{placeData.current.precip_in}
                        <span className="unit">%</span></div>
                      </div>
                    </div>
                  </div>

                </div>
              ):
              (
                <h2>Place not found</h2>
              )}
            </div>

             <div className="card card2">Forecast (+1hr)
              {fdata[0] ? (
                 <div>
                 <img src={fdata[a+1].condition.icon} alt="" />
                 <div className="temp">{fdata[a+1].temp_c}°C</div>
                 <div className="desc">{fdata[a+1].condition.text}</div>
                
                 <div className="container">
                   <div className="row whp">
                     <div className="col">
                       <div className="title">Wind now
                       </div>
                       <div className="data">{fdata[a+1].wind_kph}<span className="unit">Kmph</span></div>
                     </div>
                     <div className="col">
                     <div className="title">Humidity  </div>
                   
                     <div className="data">{fdata[a+1].humidity}
                       <span className="unit">%</span>
                       </div>
                     </div>
                     <div className="col">
                     <div className="title">Precipitation</div>
                       <div className="data">{fdata[a+1].precip_in}
                       <span className="unit">%</span></div>
                     </div>
                   </div>
                 </div>

               </div>):(<div>not found</div>)}
               </div> 
             <div className="card card3">Forecast ( +2hr)
             {fdata[0] ? (
                 <div>
                 <img src={fdata[a+2].condition.icon} alt="" />
                 <div className="temp">{fdata[a+2].temp_c}°C</div>
                 <div className="desc">{fdata[a+2].condition.text}</div>
                
                 <div className="container">
                   <div className="row whp">
                     <div className="col">
                       <div className="title">Wind now
                       </div>
                       <div className="data">{fdata[a+2].wind_kph}<span className="unit">Kmph</span></div>
                     </div>
                     <div className="col">
                     <div className="title">Humidity  </div>
                   
                     <div className="data">{fdata[a+2].humidity}
                       <span className="unit">%</span>
                       </div>
                     </div>
                     <div className="col">
                     <div className="title">Precipitation</div>
                       <div className="data">{fdata[a+2].precip_in}
                       <span className="unit">%</span></div>
                     </div>
                   </div>
                 </div>

               </div>):(<div>not found</div>)}
               </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;