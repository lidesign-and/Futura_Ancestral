const moodboard = document.getElementsByClassName("moodboard");
const boceto = document.getElementsByClassName("boceto");
const fotografia = document.getElementsByClassName("fotografia");
const descripcion = document.getElementsByClassName("descripcion");
const aureola = document.getElementsByClassName("aureola");
const intervencion = document.getElementsByClassName("intervencion");

const indmoodboard = document.querySelector("#indmoodboard");
const indboceto = document.querySelector("#indboceto");
const indfotografia = document.querySelector("#indfotografia");
const inddescripcion = document.querySelector("#inddescripcion");
const indaureola = document.querySelector("#indaureola");
const indintervencion = document.querySelector("#indintervencion");

indmoodboard.addEventListener("mouseover", ()=>{
    for(let index=0;index<moodboard.length;index++)
        {
            moodboard[index].classList.add('visible')
        }
});

indmoodboard.addEventListener("mouseleave", ()=>{
    for(let index=0;index<moodboard.length;index++)
        {
            moodboard[index].classList.remove('visible')
        }
});

indboceto.addEventListener("mouseover", ()=>{
    for(let index=0;index<boceto.length;index++)
        {
            boceto[index].classList.add('visible')
            moodboard[index].classList.remove('visible')
        }
});

indboceto.addEventListener("mouseleave", ()=>{
    for(let index=0;index<boceto.length;index++)
        {
            boceto[index].classList.remove('visible')
            
        }
});

indfotografia.addEventListener("mouseover", ()=>{
    for(let index=0;index<fotografia.length;index++)
        {
            fotografia[index].classList.add('visible')
            moodboard[index].classList.remove('visible')
        }
});

indfotografia.addEventListener("mouseleave", ()=>{
    for(let index=0;index<fotografia.length;index++)
        {
            fotografia[index].classList.remove('visible')
        }
});

inddescripcion.addEventListener("mouseover", ()=>{
    for(let index=0;index<descripcion.length;index++)
        {
            descripcion[index].classList.add('visible')
            moodboard[index].classList.remove('visible')
        }
});

inddescripcion.addEventListener("mouseleave", ()=>{
    for(let index=0;index<descripcion.length;index++)
        {
            descripcion[index].classList.remove('visible')
        }
});

indaureola.addEventListener("mouseover", ()=>{
    for(let index=0;index<aureola.length;index++)
        {
            aureola[index].classList.add('visible')
            moodboard[index].classList.remove('visible')
        }
});

indaureola.addEventListener("mouseleave", ()=>{
    for(let index=0;index<aureola.length;index++)
        {
            aureola[index].classList.remove('visible')
        }
});

indintervencion.addEventListener("mouseover", ()=>{
    for(let index=0;index<intervencion.length;index++)
        {
            intervencion[index].classList.add('visible')
            moodboard[index].classList.remove('visible')
        }
});

indintervencion.addEventListener("mouseleave", ()=>{
    for(let index=0;index<intervencion.length;index++)
        {
            intervencion[index].classList.remove('visible')
        }
});