function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora>=0 && hora <12){
        //BOM DIA!!
        msg.innerHTML += '<P><strong>Bom dia!!!</strong></P>'
        img.src = 'manha.png'
        document.body.style.background = '#ffeaa8'
    } else if (hora>=12 && hora<18){
        //BOA TARDE!
        msg.innerHTML += '<P><strong>Boa tarde!!!</strong></P>'
        img.src = 'tarde.png'
        document.body.style.background = '#e4730b'
    } else {
        //BOA NOITE!
        msg.innerHTML += '<P><strong>Boa noite!!!</strong></P>'
        img.src = 'noite.png'
        document.body.style.background = '#14161a'
    }

}