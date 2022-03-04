const contaner = document.querySelector('#cards')


fetch('chamber/data/data.json').then(response => {
    return response.json();}).then(data => {
        data.array.forEach(element => {
            console.log(element)
        });

    });

const makeCard = (data) =>{
    let address = document.createElement("p")
    let phone = document.createElement("p")
    let logo = document.createElement("img")
    let name = document.createElement("p")


}