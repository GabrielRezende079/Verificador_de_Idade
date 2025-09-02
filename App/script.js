function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''

        //craiando o elemento imagem
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 2) {
                //bebe
                img.setAttribute('src', 'Fotos/Homen Bebe.png')
            } else if (idade < 18) {
                //criança
                img.setAttribute('src', 'Fotos/Homen Crianca.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Fotos/Homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'Fotos/Homen idoso.png')
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                //bebe
                img.setAttribute('src', 'Fotos/Mulher bebe.png')
            } else if (idade < 18) {
                //criança
                img.setAttribute('src', 'Fotos/Mulher Crianca.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Fotos/Mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'Fotos/Mulher idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adiciona o elemento imagem dentro da div res
    }

}