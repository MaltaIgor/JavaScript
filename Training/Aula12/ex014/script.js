function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora>=0 && hora <12){
        //BOM DIA!!
        msg.innerHTML += '<P>Bom dia!!</P>'
        img.src = 'manha.png'
        document.body.style.background = '#ffeaa8'
    } else if (hora>=12 && hora<18){
        //BOA TARDE!
        msg.innerHTML += '<P>Boa tarde!!</P>'
        img.src = 'tarde.png'
        document.body.style.background = '#e4730b'
    } else {
        //BOA NOITE!
        msg.innerHTML += '<P>Boa noite!!</P>'
        img.src = 'noite.png'
        document.body.style.background = '#14161a'
    }

}