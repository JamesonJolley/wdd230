const contaner = document.querySelector('#cards')
const requestURL = "https://jamesonjolley.github.io/wdd230/chamber/data/data.json"

 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const cards = jsonObject["companies"];
    _cards = []
    cards.forEach(element => {
      _cards.push(element)
    });
   for (let i = 0; i < 3; ) {

    cardnum = getRandomInt(10)
    if(_cards[cardnum].membership == 'Gold'||'Silver'){
      i++
      makeCard(_cards[cardnum])
    }
  }
  });
 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
const makeCard = (data) =>{
    let address = document.createElement("p")
    let phone = document.createElement("p")
    let logo = document.createElement("img")
    let name = document.createElement("p")
    let card = document.createElement("div")
    let link = document.createElement('a')

    link.target ='_blank'
    link.href= data.link
    link.className = '_card' 

    card.className = 'card'
    address.innerText = data.address
    phone.innerText = data.phone
    logo.src = data.logo
    logo.loading = "lazy"
    logo.alt = `${data.name}'s logo`
    name.innerHTML = data.name

    card.appendChild(name)
    card.appendChild(logo)
    card.appendChild(address)
    card.appendChild(phone)

    link.appendChild(card)
    contaner.append(link)
}

