import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Enter temperature in {scaleNames[scale]}:
        <input
          type="number"
          value={temperature}
          onChange={(e) => onTemperatureChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default TemperatureInput;
