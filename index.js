const slider = document.querySelector('.items')

let mouseDown = false
let startX
let leftScroll

slider.addEventListener('mouseup', () => {
    mouseDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseleave', () => {
    mouseDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) => {
    if (!mouseDown) return;   //Stop the function
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = x - startX
    slider.scrollLeft = leftScroll -  walk

})

slider.addEventListener('mousedown', (e) => {
    mouseDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    leftScroll = slider.scrollLeft
})
