const wetherContaner = document.querySelector('#wether')
const apiKey ='0b23547fb1e8ec23669e9206b702289d'
const zip ='43215'
const apyurl =`https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&units=imperial&appid=${apiKey}`


function printcard(iconsrc,temp,windSpeed,windChill,weatherDesc){
    let windS = document.createElement('p')
    let windC = document.createElement('p')
    let F = document.createElement('p')
    let iconimg = document.createElement('img')
    let Contaner = document.createElement('div')
    let description = document.createElement('p')

    windC.innerHTML = `Windchill:${windChill}`
    windS.innerHTML = `Windspeed:${windSpeed}`
    F.innerHTML = `${temp}&#8457;`
    iconimg.src = iconsrc
    iconimg.alt = "wether icon"
    iconimg.loding = 'lazy'
    Contaner.id = 'WContaner'   
    description.innerHTML = `${weatherDesc}`

    wetherContaner.appendChild(iconimg)
    wetherContaner.appendChild(description)
    Contaner.appendChild(F)
    Contaner.appendChild(windS)
    Contaner.appendChild(windC)
    wetherContaner.appendChild(Contaner)
    
     
}
const compute = (temp,windspeed)=>{
    let out = 35.74 + 0.6215* temp - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * temp * Math.pow(windspeed,0.16)
    return out
}
fetch(apyurl).then((response) => response.json()).then((jsObj)=>{
    //console.log(jsObj)
    const iconsrc= `https://openweathermap.org/img/w/${jsObj.weather[0].icon}.png`;
    const temp = jsObj.main.temp;
    const weatherDesc = jsObj.weather[0].description;
    const windSpeed = jsObj.wind.speed;
    

    if (temp <= 50 && windSpeed > 3){
        const windChill = Math.round(compute(temp,windSpeed)) 
        printcard(iconsrc,temp,windSpeed,windChill,weatherDesc)
    }else{
        const windChill = 'N/A'
        printcard(iconsrc,temp,windSpeed,windChill,weatherDesc)
    }

    
})
