// this makes the fooder fore all the pages
const footer = document.querySelector('#foot')

const logo = document.createElement('a')
const logoImg = document.createElement('img')


logoImg.loading ='lazy' 
logoImg.src ='images/cf6c52221905bfcf348a5744df9ed076.svg'
logoImg.alt ="icon"
logoImg.className = 'icon'
footer.appendChild(logoImg)

