var agora = new Date() //buscando "agora" do sistema (servidor)
var hora = agora.getHours() //extrai a hora do agora
var minuto = agora.getMinutes() // extrai o minuto do agora
console.log(`Agora sao exatamente ${hora} horas e ${minuto} minutos.`)
if (hora<12){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}