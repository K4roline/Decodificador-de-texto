
function criptografar(){

    var texto = document.getElementById("textoinserido").value
    var textocriptografado = ""

    textocriptografado = texto.replace("e", "enter") 
    textocriptografado = textocriptografado.replace("i", "imes")
    textocriptografado = textocriptografado.replace("a", "ai")
    textocriptografado = textocriptografado.replace("o", "ober")
    textocriptografado = textocriptografado.replace("u", "ufat")

    document.getElementById("resultado").innerHTML = textocriptografado
}

 
function descriptografar() {
    var texto = document.getElementById("textoinserido").value
    var textodescriptografado = ""

    textodescriptografado = texto.replaceAll("enter", "e")
    textodescriptografado = textodescriptografado.replaceAll("imes", "i")
    textodescriptografado = textodescriptografado.replaceAll("ai", "a")
    textodescriptografado = textodescriptografado.replaceAll("ober", "o")
    textodescriptografado = textodescriptografado.replaceAll("ufat", "u")

    document.getElementById("resultado").innerHTML = textodescriptografado
} 

// function copiar() {
//    var textocopiado = window.clipboardData.getData('Text')
//    document.getElementById("textoinserido").value = textocopiado
// }



