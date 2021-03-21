import React, { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState();
  const [result, setResult] = useState();
  const [type, setType] = useState("celsius");
  const [show, setShow] = useState(false);

  // const handleChange = (e) => {
  //   setType(e.target.value);
  // };

  const convert = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(temp);
    console.log(type);
    if (type == "celsius") {
      setResult([
        `${((temp * 9) / 5 + 32).toFixed(2)}°F   `,
        `${parseInt(temp) + parseInt(273.15)}°K`,
      ]);
    } else if (type == "fahrenheit") {
      setResult([
        `${(((temp - 32) * 5) / 9).toFixed(2)}°C   `,
        `${(((temp - 32) * 5) / 9 + 273.15).toFixed(2)}°K`,
      ]);
    } else if (type == "kelvin") {
      setResult([
        `${(temp - 273.15).toFixed(2)}°C   `,
        `${(((temp - 273.15) * 9) / 5 + 32).toFixed(2)}°F`,
      ]);
    }
  };

  return (
    <div className="App">
      <form>
        <h1>Temperature Converter</h1>
        <input
          type="number"
          placeholder="Input Temperature"
          onChange={(e) => setTemp(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <button onClick={convert}>Convert</button>
        <p>{show ? result : ""}</p>
      </form>
    </div>
  );
}

export default App;
