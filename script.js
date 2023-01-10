
var texto = document.getElementById('textoinserido').value

var criptografar = textoinserido.replace(
    ("e", "enter"),
    ("i", "imes"),
    ("a", "ai"),
    ("o", "ober"),
    ("u", "ufat")
)



function criptografar(){
    document.getElementById("textoinserido").innerHTML
    

}

 
var button = document.getElementById("criptografar")
button.addEventListener("Onclick", criptografar())




// var reverter = (
//     ("enter", "e"),
//     ("imes", "i"),
//     ("ai", "a"),
//     ("ober", "o"),
//     ("ufat", "u")
// )


