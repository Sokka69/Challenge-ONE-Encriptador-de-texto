/* claves
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

const textArea = document.querySelector(".text_area");
const traductor = document.querySelector(".traductor");
const elemento = document.querySelector(".contenedor_dos_mensaje");

//---Funciones de codificacion---//
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


function desencriptar(textoDesencriptado){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return textoDesencriptado;
}

//--- Funciones de botones ---//
function btnEncriptar(){
    let texto = textArea.value
    let textoValidado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ") ;

    if(texto ==""){
        mensaje("Ingresa un texto para encriptar!", "error");
    
    }
    else if (texto !== textoValidado){
        mensaje("Tu texto no debe tener caracteres especiales", "warning");
      
    }
        else{
        const txtEncriptado = encriptar(textArea.value);
        traductor.value = txtEncriptado;
        limpiar(textArea,"hidden")
       
        boton("inherit");

   }
}

function btnDesencriptar(){
    let texto = textArea.value    
    let textoValidado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ") ;
    
    if(texto ==""){
        mensaje("Ingresa un texto para desencriptar.!","error");
      
    }  else if (texto !== textoValidado){
        mensaje("Tu texto no debe tener caracteres especiales", "warning");
           
    }else {
        const txtEncriptado = desencriptar(textArea.value);
        traductor.value = txtEncriptado;
        limpiar(textArea,"hidden");
        boton("inherit");
        setTimeout(reiniciar,3000);
        };
        
}

function btnCopiar(){
    let copiar = traductor.value;
    navigator.clipboard.writeText(copiar);
    boton("hidden", 1);
    limpiar(traductor,"inherit");
    
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Texto copiado!",
        showConfirmButton: false,
        timer: 1500
      });
    
}

function boton(visibility){
    let btn = document.querySelector(".btn_copiar");
    btn.style.visibility = visibility;

}

function limpiar(area,visibility){
    area.value = "";
    elemento.style.visibility = visibility;

}

function mensaje(aviso, btn){
    Swal.fire({
        icon: `${btn}`,
        title: "Oops...",
        text: `${aviso}`,
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            limpiar(textArea,"");
        }
      });
}

function reiniciar(){
    Swal.fire({
        title: "Excelente!",
        text: "Quieres volver a encriptar. !",
        icon: "success",
        showCancelButton: true, 
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        
        }
    });
      
}