function ação(){
let inicio = window.document.getElementById('inicio')
let fim = window.document.getElementById('fim')
let pula = window.document.getElementById('pula')
let res = window.document.querySelector('div#res')

if(inicio.value.length ==0 || fim.value.length == 0 || pula.value.length == 0){
    window.alert('[ERRO] Faltam parâmetros')
} else {
    res.innerHTML = 'Contando: <br> '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(pula.value)
if (p<=0){
    window.alert('Passo inválido!!! Considerando PASSO 1')
    p=1
}
if (i<f){
    for (c = i; c<=f; c+= p) {
        res.innerHTML += `${c} \u{1f449} `
        
    }
    

} else{
    for(c = i; c>=f; c-=p){
        res.innerHTML += `${c} \u{1f449} `
    }
   
}
res.innerHTML += `\u{1f3c1}`
}
}
