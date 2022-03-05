const contaner = document.querySelector('#cards')


fetch("data/data.json")
  .then(response => response.json())
  .then(json => console.log(json));

const makeCard = (data) =>{
    let address = document.createElement("p")
    let phone = document.createElement("p")
    let logo = document.createElement("img")
    let name = document.createElement("p")
    let card = document.createElement("div")

    address.innerText = data.address
    phone.innerText = data.phone
    logo.src = data.logo
    name.innerHTML = data.name

    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(logo)
    card.appendChild(name)

    contaner.append(card)
}