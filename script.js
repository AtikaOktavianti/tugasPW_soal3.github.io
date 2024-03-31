document.addEventListener("DOMContentLoaded", function() {
    const inputCelsius = document.getElementById('inputCelsius');
    const outputFahrenheit = document.getElementById('outputFahrenheit');
    const convertButton = document.getElementById('convertButton');
  
    convertButton.addEventListener('click', function() {
      const celsius = parseFloat(inputCelsius.value);
      if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        outputFahrenheit.value = fahrenheit.toFixed(2);
      } else {
        outputFahrenheit.value = '';
        alert('Silakan masukkan angka yang valid untuk suhu Celsius.');
      }
    });
  });
  
  