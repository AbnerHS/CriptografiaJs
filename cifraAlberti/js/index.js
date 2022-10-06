var discoFixo = 'ABCDEFGILMNOPQRSTVXZ1234'

function girarDiscoMovel(discoAtual, chave, posFinal) {
  var discoFinal = ""
  var posChave = discoAtual.indexOf(chave)
  //Girar para frente
  if (posFinal > posChave) {
    var index = discoAtual.length - (posFinal - posChave);
    for (var i = index; i < discoAtual.length; i++) {
      discoFinal += discoAtual[i]
    }
    for (var i = 0; i < index; i++) {
      discoFinal += discoAtual[i]
    }
  }
  //Girar para trás
  else {
    var index = posChave - posFinal
    for (var i = index; i < discoAtual.length; i++) {
      discoFinal += discoAtual[i]
    }
    for (var i = 0; i < index; i++) {
      discoFinal += discoAtual[i]
    }
  }
  return discoFinal
}

function formatarFrase(frase) {
  return frase.toLowerCase().replaceAll(" ", "").normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function cifrarMetodo1(msg, chave) {
  var discoMovel = 'gklnprtvz&xysomqihfdbace'
  var msgCifrada = ""
  for (var i = 0; i < msg.length; i++) {
    if (msg[i] == msg[i].toUpperCase()) {
      msgCifrada += msg[i]
      var posChave = discoMovel.indexOf(chave)
      var posLetra = discoFixo.indexOf(msg[i])
      if (posChave != posLetra) {
        discoMovel = girarDiscoMovel(discoMovel, chave, posLetra)
      }
    } else {
      var posLetraDiscoMovel = discoFixo.toLowerCase().indexOf(msg[i])
      if (posLetraDiscoMovel != -1)
        msgCifrada += discoMovel[posLetraDiscoMovel]
    }
  }
  return msgCifrada
}

function decifrarMetodo1(msgCifrada, chave) {
  var discoMovel = 'gklnprtvz&xysomqihfdbace'
  var msgOriginal = ""
  for (var i = 0; i < msgCifrada.length; i++) {
    if (msgCifrada[i] == msgCifrada[i].toUpperCase()) {
      var posChave = discoMovel.indexOf(chave)
      var posLetra = discoFixo.indexOf(msgCifrada[i])
      if (posChave != posLetra) {
        discoMovel = girarDiscoMovel(discoMovel, chave, posLetra)
      }
    } else {
      var posLetraDiscoFixo = discoMovel.indexOf(msgCifrada[i])
      msgOriginal += discoFixo[posLetraDiscoFixo]
    }
  }
  return msgOriginal
}

function isNumber(char) {
  return !Object.is(Number(char), NaN)
}

function cifrarMetodo2(msg, chave) {
  var discoMovel = 'gklnprtvz&xysomqihfdbace'
  var msgCifrada = msg[0]
  var posChave = discoMovel.indexOf(chave)
  var posLetra = discoFixo.indexOf(msg[0])
  if (posChave != posLetra) {
    discoMovel = girarDiscoMovel(discoMovel, chave, posLetra)
  }
  for (var i = 1; i < msg.length; i++) {
    if (isNumber(msg[i])) {
      msgCifrada += msg[i]
      var posNum = discoFixo.indexOf(msg[i])
      var novaChave = discoMovel[posNum]
      discoMovel = girarDiscoMovel(discoMovel, novaChave, posLetra)
    } else {
      var posLetraDiscoMovel = discoFixo.toLowerCase().indexOf(msg[i])
      if (posLetraDiscoMovel != -1)
        msgCifrada += discoMovel[posLetraDiscoMovel]
    }
  }
  return msgCifrada
}

function decifrarMetodo2(msgCifrada, chave) {
  var discoMovel = 'gklnprtvz&xysomqihfdbace'
  var msgOriginal = ""
  var posChave = discoMovel.indexOf(chave)
  var posLetra = discoFixo.indexOf(msgCifrada[0])
  if (posChave != posLetra) {
    discoMovel = girarDiscoMovel(discoMovel, chave, posLetra)
  }
  for (var i = 1; i < msgCifrada.length; i++) {
    if (isNumber(msgCifrada[i])) {
      var posNum = discoFixo.indexOf(msgCifrada[i])
      var novaChave = discoMovel[posNum]
      discoMovel = girarDiscoMovel(discoMovel, novaChave, posLetra)
    } else {
      var posLetraDiscoFixo = discoMovel.indexOf(msgCifrada[i])
      if (posLetraDiscoFixo != -1)
        msgOriginal += discoFixo[posLetraDiscoFixo]
    }
  }
  return msgOriginal
}

var op, metodo;
do {
  op = prompt("---------------CIFRA DE ALBERTI-------------\n1 - Cifrar\n2 - Decifrar\n0 - Sair")
  switch (op) {
    case '1':
      var metodo = prompt("1 - Primeiro Método\n2 - Segundo Método\n3 - Terceiro Método")
      var fraseOriginal = prompt("Insira a frase para cifrar")
      var fraseNormalizada = formatarFrase(fraseOriginal)
      switch (metodo) {
        case '1':
          var fraseCifrar = prompt("Insira as letras maiúsculas na frase", fraseNormalizada)
          var chave = prompt("Digite a chave do disco móvel")
          alert(cifrarMetodo1(fraseCifrar, chave.toLowerCase()))
          break
        case '2':
          var fraseCifrar = prompt("Insira a letra maiúscula inicial e os números na frase", fraseNormalizada)
          var chave = prompt("Digite a chave do disco móvel")
          alert(cifrarMetodo2(fraseCifrar, chave.toLowerCase()))
          break
      }
      break
    case '2':
      var metodo = prompt("1 - Primeiro Método\n2 - Segundo Método\n3 - Terceiro Método")
      var fraseCifrada = prompt("Insira a frase para decifrar")
      switch (metodo) {
        case '1':
          var chave = prompt("Digite a chave do disco móvel")
          alert(decifrarMetodo1(fraseCifrada, chave.toLowerCase()))
          break
        case '2':
          var chave = prompt("Digite a chave do disco móvel")
          alert(decifrarMetodo2(fraseCifrada, chave.toLowerCase()))
          break
      }
      break
  }
} while (op != 0)