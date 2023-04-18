var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

  var result1 = texto.replace(/e/g, "enter");
  var result2 = result1.replace(/i/g, "imes");
  var result3 = result2.replace(/a/g, "ai");
  var result4 = result3.replace(/o/g, "ober");
  var result5 = result4.replace(/u/g, "ufat");
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + result5 + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textInput.value;
  
    var result1 = texto.replace(/enter/g, "e");
    var result2 = result1.replace(/imes/g, "i");
    var result3 = result2.replace(/ai/g, "a");
    var result4 = result3.replace(/ober/g, "o");
    var result5 = result4.replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + result5 + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop =  document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}  
