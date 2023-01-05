
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



function criptografar(){
    var funcao = substituir()

}

 
var btn = document.getElementById("criptografar")
btn.addEventListener("click", criptografar)


