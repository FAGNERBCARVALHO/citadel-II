let formulario = document.getElementById('contato')
const mascara = document.querySelector(".mascara-formulario")

function aparecerFormulario(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function desaparecerFormulario(){
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"

}
console.log(aparecerFormulario)



//<div class="menu-toggle" id="menu-toggle">&#9776;</div>