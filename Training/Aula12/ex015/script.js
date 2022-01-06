function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            switch(idade){
                case idade>= 0 && idade<10:
                    //criança
                    img.setAttribute('src', '')
                    break
                case idade < 21:
                    //Jovem
                    img.setAttribute('src', '')
                    break
                case idade < 50:
                    // Adulto
                    img.setAttribute('src', '')
                    break
                case idade >= 50:
                    //idoso
                    img.setAttribute('src', '')
                    break
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            switch(idade){
                case idade>= 0 && idade<10:
                    //criança
                    img.setAttribute('src', '')
                    break
                case idade < 21:
                    //Jovem
                    img.setAttribute('src', '')
                    break
                case idade < 50:
                    // Adulto
                    img.setAttribute('src', '')
                    break
                case idade >= 50:
                    //idoso
                    img.setAttribute('src', '')
                    break
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}