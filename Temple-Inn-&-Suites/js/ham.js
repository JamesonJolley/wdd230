// this makes the nav and banner for all the pages  
const banner = document.querySelector('#banner')
const ham = document.createElement('div')
ham.id = 'ham'
ham.innerHTML='<p>&#9776;</p>'

const banimg = document.createElement('img')

banimg.src='images/temple_exterior_columbus_ohio.jpeg'


const nav = document.createElement('nav')
const list = document.createElement('ul')
list.className="responsive" 
//makes the ham responsive
ham.addEventListener('click', ()=>{
    list.classList.toggle('responsive')   
},false)

const pages = [
    ['Home','index.html'],
    ['Services','services.html'],
    ['About','about.html'],
]

pages.forEach(element => {
    let link = document.createElement('a')
    let li = document.createElement('li')
    link.href = element[1]
    link.innerHTML =`${element[0]}`
    li.appendChild(link)
    list.appendChild(li)
    
});
nav.appendChild(ham)
nav.appendChild(list)
banner.appendChild(nav)
banner.appendChild(banimg)

const title = document.createElement('div')
title.id = 'title'

title.innerHTML=`
<img loading="lazy" src="images/cf6c52221905bfcf348a5744df9ed076.svg" alt="icon" class="icon">
<div>
    <h3>Temple Inn & Suites</h3>
    <h5>1800-000-0000</h5>
</div>
`
banner.appendChild(title)