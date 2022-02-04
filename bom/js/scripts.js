const button = document.querySelector('button')
const input = document.querySelector('#favchap')
const list = document.querySelector('.list')
console.log(input.value)
input.focus()

button.addEventListener('click', ()=>{
  //console.log(document.querySelectorAll('.x'))
  const i = document.createElement('li')
  i.innerHTML = `${input.value} <button class='x' type="submit">X</button>`
  list.appendChild(i)

  const listE = document.querySelectorAll('.x')
  listE.forEach((e)=>{
    e.addEventListener('click',()=>{
      //console.log(e.parentElement)
      e.parentElement.remove()
    })
  })
  
  input.value =''
  input.focus()
})

