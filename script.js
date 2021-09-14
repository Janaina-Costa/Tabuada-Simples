function tabuada(){
    let numero = document.getElementById('txtn')
    let selTab = document.getElementById('seltab')

    if(numero.value.length == 0){
        alert('Favor digitar um número')
    }else{
        selTab.innerHTML = ''
        var n = Number(numero.value)
        var cont = 1
        
        while(cont<=10){
        let item = document.createElement('option')
        item.text = `${n} x ${cont} = ${n * cont}`
        selTab.appendChild(item)
        cont++
        
    } 
    }
    
    
}