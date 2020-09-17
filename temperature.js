var celcius;
var fahrenheit;

function fahrenheitToCelsius(fahrenheit) {
  celcius = ((fahrenheit - 32) * 5) / 9;
  console.log(
    "You entered fahrenheit: " + fahrenheit,
    "\n",
    "In celcius is " + celcius.toFixed(2)
  );
}

function convertFahrenheitOrCelcius(temperatureType, degree) {
  if (!temperatureType || !degree) {
    console.log(
      "please enter both arguments, the temperature type followed by the degree"
    );
    return;
  } else if (
    temperatureType == "fahrenheit" ||
    temperatureType == "Fahrenheit"
  ) {
    celcius = ((degree - 32) * 5) / 9;
    console.log(
      "You entered in fahrenheit: " + degree,
      "\n",
      "In celcius is " + celcius.toFixed(2)
    );
    return;
  } else if (temperatureType == "celcius" || temperatureType == "Celcius") {
    fahrenheit = (degree * 9) / 5 + 32;
    console.log(
      "You entered in celcius: " + degree,
      "\n",
      "In fahrenheit is " + fahrenheit.toFixed(2)
    );
    return;
  }

  console.log(
    'Entry not recongized. Please enter first argument temperatureType in "string" format, and the second argument degree as a number'
  );
}
