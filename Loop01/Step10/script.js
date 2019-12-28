
const elemento = document.querySelector(".sportband");
const imagen = document.querySelector(".animada");
const opciones = {
    root:null,
    threshold: [0.2,0.3],
};
const observer = new IntersectionObserver(callbackAnimar,opciones);

observer.observe(imagen);

function callbackAnimar(e){
    console.log(e[0].intersectionRatio);
    if(e[0].intersectionRatio > 0.3){
        imagen.classList.add("activado");
    }
    if(e[0].intersectionRatio < 0.2){
        imagen.classList.remove("activado")
    }
}




const seccion = document.querySelector(".take-control")
const opciones2 = {
    root:null,
    threshold:0.1,
}

const observer2 = new IntersectionObserver(callbackFondo,opciones2);
observer2.observe(seccion);

function callbackFondo(e){
    console.log(e[0].intersectionRatio);
    if(e[0].intersectionRatio > 0.1){
        seccion.classList.add("activado");

    }

}
