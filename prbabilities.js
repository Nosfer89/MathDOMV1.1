var omegainput = document.getElementById("omegainput")
var ainput = document.getElementById('ainput')
var btn = document.getElementById("btn")
var txt = document.getElementById('txt')
var a
var omega
var checked
var p
var pf = 0
btn.onclick = function(){
    pf = 0
    p = 0
    a = ainput.value
    omega = omegainput.value
    a = a.split(' ')
    omega = omega.split(' ')
    for (let index = 0; index < a.length; index++) {
        checked = omega.includes(a[index])
        if(checked==true){
            p = a[index].length/omega.length
        }
        if(checked==false){
            p = 0
        }
        pf+=p
    }
    txt.innerHTML = "P ≈ "+ Math.round(pf*1000)/10 +"%"
}