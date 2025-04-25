import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import './App.css'

function toCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function toFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function tryConvert(value, convertFn) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return '';
  const output = convertFn(input);
  return Math.round(output * 100) / 100;
}

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale('f');
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <h2>Temperature Converter</h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;

