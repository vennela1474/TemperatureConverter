// Accesing using the ID
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

celsius.oninput = () => {
//converting celcius into fahrenheit 
    let output =(parseFloat(celsius.value) * 9) /5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2))
};



fahrenheit.oninput = () => {
//converting fahrenheit into celsius 
    let output =(parseFloat(fahrenheit.value)-32) * 5/9;
    celsius.value = parseFloat(output.toFixed(2))
};
