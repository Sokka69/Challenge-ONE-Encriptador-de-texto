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

function btnEncriptar(){
    let texto = textArea.value
    let textoValidado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ") ;

    if(texto ==""){
        validacion.style.fontWeight = "700";
        validacion.textContent = "Ingrese un texto para encriptar";
        setTimeout(()=>{
            validacion.removeAttribute("style")
        },1500);
        
        
    }
    else if (texto !== textoValidado){
        validacion.style.fontWeight = "700";
        validacion.textContent = "Texto no debe caracteres especiales";
        setTimeout(()=>{
            validacion.removeAttribute("style")
        },1500);
        
    }
            else{
        const txtEncriptado = encriptar(textArea.value);
        traductor.value = txtEncriptado;
        textArea.value = "";
        elemento.style.visibility = "hidden";
        mostrarBoton();
   }
}

function btnDesencriptar(){
    const txtEncriptado = desencriptar(textArea.value);
    traductor.value = txtEncriptado;
    textArea.value = "";
    elemento.style.visibility = "hidden";
    mostrarBoton();
    setInterval("location.reload()",4000);
};

function encriptar(textoEncriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoEncriptado;
};


function desencriptar(textoDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return textoDesencriptado;
};

function btnCopiar(){
    let copiar = traductor.value;
    navigator.clipboard.writeText(copiar);
    
    setInterval("location.reload()",1500);
};

function mostrarBoton(){
    let btn = document.querySelector(".btn_copiar");
    btn.style.visibility = "inherit";

};