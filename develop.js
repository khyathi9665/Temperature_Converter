const celsiusInput=document.getElementById("Celsius");
const fahrenheitInput=document.getElementById("Fahrenheit");
const kelvinInput=document.getElementById("Kelvin");
const inputs = document.getElementsByClassName("input");
for(let i=0;i<inputs.length;i++) {
    let input=inputs[i];
    input.addEventListener("input",function(e) {
        let value=parseFloat(e.target.value);
        switch(e.target.name) {
            case "Celsius":
                fahrenheitInput.value=(value*1.8)+32;
                kelvinInput.value= value+273.15;
                break;
            case "Fahrenheit":
                celsiusInput.value=(value-32)/1.8;
                kelvinInput.value=((value-32)/1.8)+273.15;
                break;
            case "Kelvin":
                celsiusInput.value=value-273.15;
                fahrenheitInput.value=((value-273.15)*1.8)+32;
                break;             
        }
    });
}
function clear() {
    celsiusInput.value="";
    fahrenheitInput.value="";
    kelvinInput.value="";
}