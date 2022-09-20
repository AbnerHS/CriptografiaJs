function cifrar(msg, chave) {
  msg = msg.toUpperCase()
  var msgCifrada = ""
  for (var i = 0; i < msg.length; i++) {
    var charCode = msg.charCodeAt(i)
    if (charCode != 32)
      if (charCode + chave <= 90)
        msgCifrada += String.fromCharCode(charCode + chave)
      else
        msgCifrada += String.fromCharCode(charCode + chave - 26)
    else
      msgCifrada += String.fromCharCode(charCode)
  }
  return msgCifrada
}

function decifrar(msgCifrada, chave) {
  msgCifrada = msgCifrada.toUpperCase()
  var msg = ""
  for (var i = 0; i < msgCifrada.length; i++) {
    var charCode = msgCifrada.charCodeAt(i)
    if (charCode != 32)
      if (charCode - chave >= 65)
        msg += String.fromCharCode(charCode - chave)
      else
        msg += String.fromCharCode(charCode - (chave - 26))
    else
      msg += String.fromCharCode(charCode)
  }
  return msg
}

var op;
do {
  op = prompt("---------------CIFRA DE CÉSAR-------------\n1 - Cifrar\n2 - Decifrar\n0 - Sair")
  switch (op) {
    case '1':
      var fraseOriginal = prompt("Insira a frase para cifrar")
      var chave = parseInt(prompt("Insira a chave"))
      if (chave < 1 || chave > 25)
        alert("A chave deve ser um número entre 1 e 25!")
      else
        alert(cifrar(fraseOriginal, chave))
      break
    case '2':
      var fraseCifrada = prompt("Insira a frase para decifrar")
      var chave = parseInt(prompt("Insira a chave"))
      if (chave < 1 || chave > 25)
        alert("A chave deve ser um número entre 1 e 25!")
      else
        alert(decifrar(fraseCifrada, chave))
      break
  }
} while (op != 0)