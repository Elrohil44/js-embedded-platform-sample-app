/* USER CODE START */

var gpio = require('gpio');var sw = false;
gpio.setup(gpio.PORTB, gpio.PIN0, gpio.MODE_OUT_PP, gpio.NOPULL);
gpio.setup(gpio.PORTB, gpio.PIN7, gpio.MODE_OUT_PP, gpio.NOPULL);
gpio.setup(gpio.PORTC, gpio.PIN13, gpio.MODE_IN, gpio.PULLDOWN);
setInterval(function(){ gpio.set(gpio.PORTB, gpio.PIN0, sw); sw = !sw; }, 250);
setInterval(function(){ var isSet = gpio.get(gpio.PORTC, gpio.PIN13); gpio.set(gpio.PORTB, gpio.PIN7, isSet); }, 150);;

/* USER CODE END */