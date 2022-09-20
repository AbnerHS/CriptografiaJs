function cifrar(fraseOriginal, linhas) {
    var fraseCifrada = ""
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var fraseOriginalSemEspacos = fraseOriginal.replaceAll(" ", "")
    for (var j = 0; j < linhas; j++) {
        for (var i = 0; i < fraseOriginalSemEspacos.length; i++) {
            if (i % linhas == 0) {
                char = fraseOriginalSemEspacos[i + j]
                if (char != undefined)
                    fraseCifrada += char
                else
                    fraseCifrada += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
            }
        }
    }
    return fraseCifrada
}

function decifrar(fraseCifrada, linhas) {
    var fraseOriginal = ""
    var fraseCifradaSemEspacos = fraseCifrada.replaceAll(" ", "")
    var colunas = Math.ceil(fraseCifradaSemEspacos.length / linhas)
    for (var i = 0; i < colunas; i++) {
        for (var j = 0; j < linhas; j++) {
            char = fraseCifradaSemEspacos[i + j * colunas]
            if (char != undefined)
                fraseOriginal += char
        }
    }
    return fraseOriginal
}

var op;
do {
    op = prompt("---------------MENU-------------\n1 - Cifrar\n2 - Decifrar\n0 - Sair")
    switch (op) {
        case '1':
            var fraseOriginal = prompt("Insira a frase para cifrar")
            var linhas = prompt("Insira a quantidade de linhas da matriz")
            alert(cifrar(fraseOriginal, linhas))
            break
        case '2':
            var fraseCifrada = prompt("Insira a frase para decifrar")
            var linhas = prompt("Insira a quantidade de linhas da matriz")
            alert(decifrar(fraseCifrada, linhas))
            break
    }
} while (op != 0)