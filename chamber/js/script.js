
const year = new Date().getFullYear();
const footer = document.querySelector("footer")
//makes elements
let copyright = document.createElement("p")
copyright.append(`| © ${year} Chamber of WDD230 | Jameson M. Jolley | WDD 230 | last Modification:${document.lastModified} |`)

//appends to the DOM
footer.appendChild(copyright)

let date = new Date()

time =document.querySelector('#time')
if(time != null){
time.innerHTML = Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(date);
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */