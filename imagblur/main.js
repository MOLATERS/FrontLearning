const images = document.querySelectorAll('header > div >img')
document.querySelector('header').addEventListener('mousemove',(e)=>{
    let percentage = e.clientX/window.outerWidth
    let set = e.clientY/window.outerHeight
    let offset = 10 * percentage
    let blur = 20
    if(set>0.02){
        for(let [index,image] of images.entries()){
            offset *= 1.3
            let blurvalue=(Math.pow((index / images.length - percentage),2)* blur)
            image.style.setProperty('--offset',`${offset}px`)
            image.style.setProperty('--blur',`${blurvalue}px`)
        }
    
    }

})