function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'pictures/menino.jpg')
                img.style.width = '30%'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'pictures/rapaz.jpg')
                img.style.width = '45%'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'pictures/homem.jpg')
                img.style.width = '45%'
                img.style.borderRadius = '50%'
            }
            else {
                // Idoso
                img.setAttribute('src', 'pictures/senhor.jpg')
                img.style.width = '45%'
                img.style.borderRadius = '50%'
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança 
                img.setAttribute('src', 'pictures/menina.jpg')
                img.style.width = '30%'
                img.style.borderRadius = '50%'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'pictures/moça.jpg')
                img.style.width = '30%'
                img.style.borderRadius = '50%'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'pictures/mulher.jpg')
                img.style.width = '45%'
                img.style.borderRadius = '50%'
            }
            else {
                // Idoso
                img.setAttribute('src', 'pictures/senhora.jpg')
                img.style.width = '30%'
                img.style.borderRadius = '50%'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um <strong>${gênero}</strong> com exatamente <strong>${idade} anos</strong> de idade.`
        res.appendChild(img)
    }
}