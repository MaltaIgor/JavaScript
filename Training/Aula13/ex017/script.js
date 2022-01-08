function tabuada(){
let n = Number.parseInt(window.document.getElementById('numero').value)
let tab = window.document.querySelector('select#seltab')

if(n.value.length==0){
    window.alert('Digite um dumero!!!')
} else {
    tab.innerHTML = ""
for(c=1;c<=10;c++){
    let item = document.createElement('option')
    item.text = `${n} + ${c} = ${n*c}` 
    item.value = `tab${c}`
    tab.appendChild(item)
}
}
}