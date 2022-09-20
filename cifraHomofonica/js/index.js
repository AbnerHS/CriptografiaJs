var cifra = [
  { "key": "A", "value": ["+", "K", "V", "S"] },
  { "key": "B", "value": ["M"] },
  { "key": "C", "value": ["F"] },
  { "key": "D", "value": ["N"] },
  { "key": "E", "value": ["B", "A", "Q"] },
  { "key": "F", "value": ["R"] },
  { "key": "G", "value": ["$"] },
  { "key": "H", "value": ["G"] },
  { "key": "I", "value": ["U"] },
  { "key": "J", "value": ["@"] },
  { "key": "K", "value": ["H"] },
  { "key": "L", "value": ["X"] },
  { "key": "M", "value": ["/"] },
  { "key": "N", "value": ["C"] },
  { "key": "O", "value": ["Z"] },
  { "key": "P", "value": ["%"] },
  { "key": "Q", "value": ["J"] },
  { "key": "R", "value": ["L"] },
  { "key": "S", "value": ["D"] },
  { "key": "T", "value": ["&"] },
  { "key": "U", "value": ["E"] },
  { "key": "V", "value": ["Y"] },
  { "key": "W", "value": ["I"] },
  { "key": "X", "value": ["*"] },
  { "key": "Y", "value": ["T"] },
  { "key": "Z", "value": ["P"] },
]
var cifraMap = new Map()
cifra.forEach(letra => {
  cifraMap.set(letra.key, letra.value)
})

function getKeyByValue(value) {
  return [...cifraMap].find(([key, val]) => val.includes(value))[0]
}

function cifrar(msg) {
  msg = msg.toUpperCase()
  var msgCifrada = ""
  for (var i = 0; i < msg.length; i++) {
    if (msg[i] != " ") {
      var cifraValues = cifraMap.get(msg[i])
      var random = parseInt(Math.random() * (cifraValues.length - 1))
      var letraCifrada = cifraValues[random]
      msgCifrada += letraCifrada
    } else {
      msgCifrada += " "
    }
  }
  return msgCifrada
}

function decifrar(msgCifrada) {
  msgCifrada = msgCifrada.toUpperCase()
  var msg = ""
  for (var i = 0; i < msgCifrada.length; i++) {
    if (msgCifrada[i] != " ") {
      var letraOriginal = getKeyByValue(msgCifrada[i])
      msg += letraOriginal
    } else {
      msg += " "
    }
  }
  return msg
}

var op;
do {
  op = prompt("---------------CIFRA HOMOFÔNICa-------------\n1 - Cifrar\n2 - Decifrar\n0 - Sair")
  switch (op) {
    case '1':
      var fraseOriginal = prompt("Insira a frase para cifrar")
      alert(cifrar(fraseOriginal))
      break
    case '2':
      var fraseCifrada = prompt("Insira a frase para decifrar")
      alert(decifrar(fraseCifrada))
      break
  }
} while (op != 0)