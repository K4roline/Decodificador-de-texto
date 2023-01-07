
var texto = document.getElementById('textoinserido').value

var substituir = textoinserido.replace(
    ("e", "enter"),
    ("i", "imes"),
    ("a", "ai"),
    ("o", "ober"),
    ("u", "ufat")
)

// var reverter = (
//     ("enter", "e"),
//     ("imes", "i"),
//     ("ai", "a"),
//     ("ober", "o"),
//     ("ufat", "u")
// )



const name = document.getElementById("criptografar")

function criptografar(){
    var funcao = substituir()
    

}

 
var btn = document.getElementById("btn")
btn.addEventListener("click", criptografar ())


