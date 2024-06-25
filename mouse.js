const cursorPosition = document.getElementById('mousefollow');


const diametroCursor = 500

window.addEventListener('pointermove', (event)=> {
    cursorPosition.style.top = (event.pageY - (diametroCursor/2)) + "px"
    cursorPosition.style.left = (event.pageX - (diametroCursor/2)) + "px"
})