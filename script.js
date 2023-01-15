
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

    textodescriptografado = texto.replace("enter", "e")
    textodescriptografado = textodescriptografado.replace("imes", "i")
    textodescriptografado = textodescriptografado.replace("ai", "a")
    textodescriptografado = textodescriptografado.replace("ober", "o")
    textodescriptografado = textodescriptografado.replace("ufat", "u")

    document.getElementById("resultado").innerHTML = textodescriptografado
} 

// function copiar() {
//    var textocopiado = window.clipboardData.getData('Text')
//    document.getElementById("textoinserido").value = textocopiado
// }



