const wetherContaner = document.querySelector('#wether')
const temp = 40 
const windspeed = 5 

function printcard(windChill){
    wetherContaner.innerHTML =`
    <header>
        <h1>wether</h1>
    </header>
        <main style ='
                display: grid;
                grid-template:1fr/ 25% 1fr;
                justify-items: center;
                gap: 0;
            '>
            <img src="images/cloudy-day-weather-svgrepo-com.svg" alt="wether icon"> 
            <div style ='
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    gap: 10%;
                '>
                <span>temp: ${temp} &#176;F </span>
                <span>wind-speed: ${windspeed} </span>
                <span>wind chill: ${windChill}&#176;F </span>
            </div>
        <main>
     `
}
const compute = (temp,windspeed)=>{
    let out = 35.74 + 0.6215* temp - 35.75 * Math.pow(windspeed,0.16) + 0.4275 * temp * Math.pow(windspeed,0.16)
    return out
}

if (temp <= 50 && windspeed > 3){
    const windChill = Math.round(compute(temp,windspeed)) 
    printcard(windChill)
}else{
    const windChill = 'N/A'
    printcard(windChill)
}
