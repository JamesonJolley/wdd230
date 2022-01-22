
const year = new Date().getFullYear();
const footer = document.querySelector("footer")
//makes elements
let copyright = document.createElement("p")
copyright.append(`© ${year} |Jameson M. Jolley| New Mexico`)
let lastM = document.createElement("p")
lastM.append(`${document.lastModified}`)
//appends to the DOM
footer.append(copyright)
footer.append(lastM)