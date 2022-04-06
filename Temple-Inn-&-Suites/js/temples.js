const contater = document.querySelector('#temples')
const requestURL ="https://jamesonjolley.github.io/wdd230/Temple-Inn-&-Suites/data/temples.json"

fetch(requestURL).then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const cards = jsonObject['Temples'];
    
    cards.forEach(element => {
      makeCard(element)
    });
  });

const makeCard =(element)=>{
    let card = document.createElement("div")
    card.className = 'card'
    let name = document.createElement('h1')
    name.innerText = element.name
    card.appendChild(name)

    let tempimg = document.createElement('img')
    tempimg.loding = 'lazy'
    tempimg.src = element.img
    card.appendChild(tempimg)

    let list = document.createElement('ul')
    let phone = document.createElement('li')
    phone.innerText = element.Telephone
    list.appendChild(phone)

    let addressli = document.createElement('li')
    let link = document.createElement('a')
    link.innerText = element.Address
    link.href = element.link
    link.target ="_blank"
    addressli.appendChild(link)
    list.appendChild(addressli)

    card.appendChild(list)
    contater.appendChild(card)

}