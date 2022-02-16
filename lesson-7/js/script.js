picks = document.querySelectorAll('[data-src]')


const setImg = (element) => {
    const src = element.getAttribute('data-src')
    if(!src){
        return
    }else{
        element.src = src
    }
};

const imgOptions = {
    threshold: 0,
    rootMargin:"0px 0px 30px 0px"
}

const imgObserver = new IntersectionObserver((entries,imgObserver)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return
        }else{
            setImg(entry.target)
            imgObserver.unobserve(entry.target)
        }
    })
},imgOptions)

picks.forEach(img => {
    imgObserver.observe(img)
})