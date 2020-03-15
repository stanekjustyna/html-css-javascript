const bodySelector = document.querySelector('body');

const headerSelector = document.querySelector('header');

const footerSelector = document.querySelector('footer');

const toggleBackgroundButtonSelector = document.querySelector('.toggle-background');

const weatherSelector = document.querySelector('.weather');

const elements = [headerSelector, footerSelector];

const photoSelector = document.querySelector('.profile-photo');

const underlineSelector = document.querySelectorAll('.underline');


toggleBackgroundButtonSelector.addEventListener('click', () => {
    if(bodySelector.classList.contains('background-white') == true) {

        bodySelector.classList.remove('background-white');
        bodySelector.classList.add('background-dark');
        elements.forEach(e => {
            e.classList.remove('background-blue');
            e.classList.add('background-yellow')
        });

        weatherSelector.setAttribute('style', 'border: 0.5rem solid #c7900a');
        photoSelector.setAttribute('style', 'box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #c7900a');
        toggleBackgroundButtonSelector.setAttribute('style', 'background-color: #c7900a');
        underlineSelector.forEach(e => e.classList.remove('underline'));
        underlineSelector.forEach(e => e.classList.add('underline-yellow'));

    }else {

        bodySelector.classList.remove('background-dark');
        bodySelector.classList.add('background-white');
        elements.forEach(e => {
            e.classList.remove('background-yellow');
            e.classList.add('background-blue')
        });

        weatherSelector.setAttribute('style', 'border: 0.5rem solid #4267b2');
        photoSelector.setAttribute('style', 'box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #4267b2');
        toggleBackgroundButtonSelector.setAttribute('style', 'background-color: #4267b2');
        underlineSelector.forEach(e => e.classList.remove('underline-yellow'));
        underlineSelector.forEach(e => e.classList.add('underline'));
    }
});

fetch('http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&APPID=f34108513107ae71172d777270e7e697')
.then(response => response.json())
.then(data => weatherSelector.innerHTML=`<div class="weather-conditions">Weather in ${data.name} (${data.sys.country}) on ${myDateFunction(data.dt)} is: 
<br><br>
<span>Temperature: ${Number.parseInt(data.main.temp)-273}<temperatura>&#8451;</span><span>Pressure: ${data.main.pressure}<cisnienie>kPa</span></span></div>`)


const myDateFunction = function(data) {
    const objectDate = new Date(data*1000);
    const dzien = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
    const miesiac = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'November', 'December'];
    
    const endingFunction = function() {
    let parameter = Number.parseInt(objectDate.getDate()%10);
     switch(parameter){
        case 1: return "st"; 
        case 2: return "nd"; 
        case 3: return "rd"; 
        default: return "th";     
    } 
}
    return `${dzien[objectDate.getDay()-1]} ${objectDate.getDate()}${endingFunction()} of ${miesiac[objectDate.getMonth()]} ${objectDate.getFullYear()}`;
}