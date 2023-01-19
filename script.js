function criptografar(){

    var texto = document.getElementById("textoinserido").value
    var textocriptografado = ""

    textocriptografado = texto.replaceAll("e", "enter") 
    textocriptografado = textocriptografado.replaceAll("i", "imes")
    textocriptografado = textocriptografado.replaceAll("a", "ai")
    textocriptografado = textocriptografado.replaceAll("o", "ober")
    textocriptografado = textocriptografado.replaceAll("u", "ufat")

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