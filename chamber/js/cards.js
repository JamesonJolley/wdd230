const contaner = document.querySelector('#cards')
const requestURL = "https://jamesonjolley.github.io/wdd230/chamber/data/data.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const cards = jsonObject["companies"];
    
    cards.forEach(element => {
      makeCard(element)
    });
  });


 
 
const makeCard = (data) =>{
    let address = document.createElement("p")
    let phone = document.createElement("p")
    let logo = document.createElement("img")
    let name = document.createElement("p")
    let card = document.createElement("div")
    let link = document.createElement('a')

    card.className = 'card'
    address.innerText = data.address
    phone.innerText = data.phone
    logo.src = data.logo
    logo.loading = "lazy"
    name.innerHTML = data.name

    card.appendChild(name)
    card.appendChild(logo)
    card.appendChild(address)
    card.appendChild(phone)

    contaner.append(card)
}