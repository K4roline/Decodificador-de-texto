
var texto = document.getElementById('textoinserido').value

function criptografar(){
    textoinserido.replace("e", "enter")
    textoinserido.replace("i", "imes")
    textoinserido.replace("a", "ai")
    textoinserido.replace("o", "ober")
    textoinserido.replace("u", "ufat")
}

 
var button = document.getElementById('texto')
button.addEventListener("Onclick", criptografar())




// 
//     replace("enter", "e")
//     replace("imes", "i")
//     replace("ai", "a")
//     replace("ober", "o")
//     replace("ufat", "u")
// 


