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
      <h1>WORLD CLOCK</h1>
      <div className="clock-container">
        <Clock city="EE UU" timezone= "America/New_York" flag="usa"/>
        <Clock city="ENGLAND" timezone= "Europe/London" flag="england"/>
        <Clock city="JAPAN" timezone= "Asia/Tokyo" flag="japan"/>
        <Clock city="MEXICO" timezone="America/Mexico_City" flag="mexico"/>
        <Clock city="ESPAÑA" timezone="Europe/Madrid" flag="spain" />
        <Clock city="ARGENTINA" timezone="America/Argentina/Buenos_Aires" flag="argentina" />
      </div>
    </div>

  );
}

export default App;
