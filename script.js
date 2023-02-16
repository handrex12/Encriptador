const textArea = document.querySelector(".text-area");
const mesaje = document.querySelector(".mesaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mesaje.value=textoEncriptado
    textArea.value="";
}
function btnDesencriptar(){
    const textoEncriptado = Desencriptar(textArea.value)
    mesaje.value=textoEncriptado
    textArea.value="";
}

function copiarTexto(){
    let texto = document.getElementById('mesaje');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');

    tooltipFunction();
}
const tooltipFunction = () => {  
    const tooltip = document.getElementById("tooltip");

    tooltip.classList.add('active');
    setTimeout(() => {
       tooltip.classList.remove('active');
    }, 1500);

    
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptada

}
function Desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }

    }
    return stringDesencriptada

}

