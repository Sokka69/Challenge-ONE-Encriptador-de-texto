/* clave
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

const textArea = document.querySelector(".text_area");
const traductor = document.querySelector(".traductor");
const elemento = document.querySelector(".contenedor_dos_mensaje");
const validacion = document.querySelector(".mensaje_validacion");

function mostrarBoton(){
    let btn = document.querySelector(".btn_copiar");
    btn.style.visibility = "inherit";

}
function btnEncriptar(){

    validarTexto()
    const txtEncriptado = encriptar(textArea.value);
    traductor.value = txtEncriptado;
    textArea.value = "";
    elemento.style.visibility = "hidden";
    mostrarBoton();
     
}

// Validaciones

function validarTexto(){
    let text = textArea.value
    let textValidado = text.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f'] /g,"" ) ;

    if(text==""){
         validacion.textContent = "Ingrese un texto para encriptar";
         elemento.style.visibility = "hidden"


    }
}



function encriptar(textoEncriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoEncriptado;
}

 