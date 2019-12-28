// Obtengo todos los talles
let talles = document.querySelectorAll(".size p");



// Le pongo un listener a cada talle 

function callbackTalle(e){
    let talleElegido = e.currentTarget.innerText;

    talles.forEach(function(talleParticular2){
        talleParticular2.classList.remove("selected");
    })
    e.currentTarget.classList.add("selected");


}

talles.forEach(function(talleParticular){
    talleParticular.addEventListener("click",callbackTalle);
})

// Se añade una clase al elemento seleccionado

// Se le activa el checked al input con el mismo value que el dataset seleccionado