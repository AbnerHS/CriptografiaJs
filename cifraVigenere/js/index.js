function cifrar(msg, chave) {
    msg = msg.toUpperCase()
    chave = chave.toUpperCase()
    var j = 0
    var msgCifrada = ""
    for (var i = 0; i < msg.length; i++) {
        var charCode = msg.charCodeAt(i)
        var chaveCode = chave.charCodeAt(j) - 65
        if (charCode != 32)
            if (charCode + chaveCode <= 90)
                msgCifrada += String.fromCharCode(charCode + chaveCode)
            else
                msgCifrada += String.fromCharCode(charCode + chaveCode - 26)
        else
            msgCifrada += String.fromCharCode(charCode)
        j++
        if (j == chave.length)
            j = 0
    }
    return msgCifrada
}

function decifrar(msgCifrada, chave) {
    msgCifrada = msgCifrada.toUpperCase()
    chave = chave.toUpperCase()
    var j = 0
    var msg = ""
    for (var i = 0; i < msgCifrada.length; i++) {
        var charCode = msgCifrada.charCodeAt(i)
        var chaveCode = chave.charCodeAt(j) - 65
        if (charCode != 32)
            if (charCode - chaveCode >= 65)
                msg += String.fromCharCode(charCode - chaveCode)
            else
                msg += String.fromCharCode(charCode - (chaveCode - 26))
        else
            msg += String.fromCharCode(charCode)
        j++
        if (j == chave.length)
            j = 0
    }
    return msg
}

var op;
do {
    op = prompt("---------------CIFRA DE VIGENÈRE-------------\n1 - Cifrar\n2 - Decifrar\n0 - Sair")
    switch (op) {
        case '1':
            var fraseOriginal = prompt("Insira a frase para cifrar")
            var chave = prompt("Insira a chave")
            if (chave.length < 8 || chave.length > 15)
                alert("A chave deve conter no mínimo 8 e no máximo 15 letras!")
            else
                alert(cifrar(fraseOriginal, chave))
            break
        case '2':
            var fraseCifrada = prompt("Insira a frase para decifrar")
            var chave = prompt("Insira a chave")
            if (chave.length < 8 || chave.length > 15)
                alert("A chave deve conter no mínimo 8 e no máximo 15 letras!")
            else
                alert(decifrar(fraseCifrada, chave))
            break
    }
} while (op != 0)