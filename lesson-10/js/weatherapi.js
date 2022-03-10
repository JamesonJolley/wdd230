const apiKey ='0b23547fb1e8ec23669e9206b702289d'
const zip ='88220'
const apyurl =`https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=${apiKey}`



fetch(apyurl).then((response) => response.json()).then((jsObj)=>{
    console.log(jsObj)
    document.querySelector('#current-temp').textContent = jsObj.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObj.weather[0].icon}.png`;
    const desc = jsObj.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

})


