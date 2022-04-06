// this makes the fooder fore all the pages
const footer = document.querySelector('#foot')

const logo = document.createElement('a')
const logoImg = document.createElement('img')


logoImg.loading ='lazy' 
logoImg.src ='images/cf6c52221905bfcf348a5744df9ed076.svg'
logoImg.alt ="icon"
logoImg.className = 'icon'
footer.appendChild(logoImg)

let date = new Date()
const time = document.createElement('div')
time.id ='time'
time.innerHTML = Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);
footer.appendChild(time)

const hr = document.createElement('a')

hr.innerText='Visit HR'
hr.href='https://goo.gl/maps/cjb1g8hcZ6XwLYTs9'
hr.target="_blank"
footer.appendChild(hr)


const fSocialf = document.createElement('a')
fSocialf.href="https://www.facebook.com/"
fSocialf.target="_blank"
fSocialf.innerHTML=`
<img class="soimg" src="images/Facebook-logo.png" alt="Facebook">
`
footer.appendChild(fSocialf)
const inSocialf = document.createElement('a')
inSocialf.href="https://www.instagram.com/"
inSocialf.target="_blank"
inSocialf.innerHTML=`
<img class="soimg" src="images/instagram.png" alt="Facebook">
`
footer.appendChild(inSocialf)