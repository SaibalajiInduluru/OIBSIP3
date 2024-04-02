function convertTemperature() {
    var temperatureInput = document.getElementById('temperatureInput').value;
    var unitSelect = document.getElementById('unitSelect').value;
    var convertedTemperature = document.getElementById('convertedTemperature');
  
    if (!temperatureInput || isNaN(temperatureInput)) {
      convertedTemperature.textContent = 'Please enter a valid temperature.';
      return;
    }
  
    temperatureInput = parseFloat(temperatureInput);
  
    if (unitSelect === 'celsius') {
      var convertedValue = (temperatureInput * 9 / 5) + 32;
      convertedTemperature.textContent = convertedValue.toFixed(2) + ' °F';
    } else if (unitSelect === 'fahrenheit') {
      var convertedValue = (temperatureInput - 32) * 5 / 9;
      convertedTemperature.textContent = convertedValue.toFixed(2) + ' °C';
    } else if (unitSelect === 'kelvin') {
      var convertedValue = temperatureInput + 273.15;
      convertedTemperature.textContent = convertedValue.toFixed(2) + ' K';
    }
  }
  