function cifrar(fraseOriginal, chave) {
    var fraseCifrada = ""
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var fraseOriginalSemEspacos = fraseOriginal.replaceAll(" ", "")
    var colunas = chave.length
    var linhas = Math.ceil(fraseOriginalSemEspacos.length / colunas)
    var chaveOrdenada = chave.split("").sort()
    chaveOrdenada.forEach(chaveChar => {
        i = chave.indexOf(chaveChar)
        for (var j = 0; j < linhas; j++) {
            var char = fraseOriginalSemEspacos[i + j * colunas]
            if (char != undefined)
                fraseCifrada += char
            else
                fraseCifrada += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
        }
    })
    return fraseCifrada
}

function decifrar(fraseCifrada, chave) {
    var fraseOriginal = ""
    var fraseCifradaSemEspacos = fraseCifrada.replaceAll(" ", "")
    var colunas = chave.length
    var linhas = Math.ceil(fraseCifradaSemEspacos.length / colunas)
    var chaveArray = chave.split("")
    var chaveOrdenada = chave.split("").sort()
    for (var i = 0; i < linhas; i++) {
        chaveArray.forEach(chaveChar => {
            j = chaveOrdenada.indexOf(chaveChar)
            char = fraseCifradaSemEspacos[i + j * linhas]
            if (char != undefined)
                fraseOriginal += char
        })
    }
    return fraseOriginal
}

var op;
do {
    op = prompt("---------------MENU-------------\n1 - Cifrar\n2 - Decifrar\n0 - Sair")
    switch (op) {
        case '1':
            var fraseOriginal = prompt("Insira a frase para cifrar")
            var chave = prompt("Insira a chave")
            alert(cifrar(fraseOriginal.toUpperCase(), chave.toUpperCase()))
            break
        case '2':
            var fraseCifrada = prompt("Insira a frase para decifrar")
            var chave = prompt("Insira a chave")
            alert(decifrar(fraseCifrada.toUpperCase(), chave.toUpperCase()))
            break
    }
} while (op != 0)