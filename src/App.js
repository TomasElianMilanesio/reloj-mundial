import React, {useState, useEffect} from "react";
import "./App.css";

const Clock = ({city, timezone, flag}) => {
  const [time, setTime] = useState (new Date());


  useEffect(() => {
  const interval = setInterval (() => {
    setTime(new Date()); 
  }, 1000);

  return () => clearInterval(interval);
}, []);

  const options = {
   timeZone: timezone,
   hour: "numeric",
   minute: "numeric",
   second: "numeric",
};

  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(time);

  return (
  <div className="clock">
    <h2>{city}</h2>
    <img src={`./flags/${flag}.png`} alt={`${city} Flag`}/>
    <p>{formattedTime}</p>
  </div>
  );
};

  function App() {
   return (
    <div className="App">
      <h1>World Clock</h1>
      <div className="clock-container">
        <Clock city="New York" timezone= "America/New_York" flag="usa"/>
        <Clock city="Londres" timezone= "Europe/London" flag="england"/>
        <Clock city="Tokio" timezone= "Asia/Tokyo" flag="japan"/>
        <Clock city="México" timezone="America/Mexico_City" flag="mexico"/>
      </div>
    </div>

  );
}

export default App;
