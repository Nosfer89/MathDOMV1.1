/* Board : */
var board = document.getElementById('board')
board.width = 2000
board.height = board.width
var ctx = board.getContext('2d') 

/* var */
var angle  = document.getElementById('angle')
var drawbtn =  document.getElementById('drawbtn')
var clearbtn = document.getElementById("clearbtn")
var pibtn = document.getElementById('PIbtn')

var a
var rad = document.getElementById('RAD')
var deg = document.getElementById('Deg')
var angleType = "Deg"

var color = document.getElementById('color')
var red = document.getElementById("red")
var green = document.getElementById("green")
var blue = document.getElementById("blue")
var r
var g 
var b 
var c

/* circle :*/
ctx.translate(board.width/2,board.height/2)
function drawArea(){
    ctx.beginPath()
    ctx.lineWidth = 20
    ctx.arc(0,0,1000,0,Math.PI*2,true)
    ctx.moveTo(0,1000)
    ctx.lineTo(0,-1000)
    ctx.moveTo(-1000,0)
    ctx.lineTo(1000,0)

    ctx.moveTo(1000*((Math.sqrt(3))/2),-500)
    ctx.lineTo(-1000*((Math.sqrt(3))/2),500)
    ctx.moveTo(1000*((Math.sqrt(2))/2),-1000*((Math.sqrt(2))/2))
    ctx.lineTo(-1000*((Math.sqrt(2))/2),1000*((Math.sqrt(2))/2))
    ctx.moveTo(-500,1000*((Math.sqrt(3))/2))
    ctx.lineTo(500,-1000*((Math.sqrt(3))/2))

    ctx.moveTo(-500,-1000*((Math.sqrt(3))/2))
    ctx.lineTo(500,1000*((Math.sqrt(3))/2))
    ctx.moveTo(-1000*((Math.sqrt(2))/2),-1000*((Math.sqrt(2))/2))
    ctx.lineTo(1000*((Math.sqrt(2))/2),1000*((Math.sqrt(2))/2))
    ctx.moveTo(-1000*((Math.sqrt(3))/2),-500)
    ctx.lineTo(1000*((Math.sqrt(3))/2),500)

    ctx.strokeStyle ="black"
    ctx.stroke()
    ctx.closePath()
}
drawArea()

/* Algorithme */


drawbtn.onclick = function draw(){
    
    a = angle.value
    a = a.replaceAll("π",Math.PI)
    a = a.replaceAll('^',"**")
    ctx.beginPath()
    ctx.strokeStyle = c
    if(angleType =="Deg"){
        if(eval(a)>0){
            ctx.arc(0,0,1000,0,-(eval(a)*Math.PI)/180,true)
        }
        if(eval(a)<0){
            ctx.arc(0,0,1000,0,-(eval(a)*Math.PI)/180,false)
        }
    }
    if(angleType =="RAD"){
        if(eval(a)>0){
            ctx.arc(0,0,1000,0,-eval(a),true)
        }
        if(eval(a)<0){
            ctx.arc(0,0,1000,0,-eval(a),false)
        }
    }
    ctx.stroke()
    ctx.closePath()
}

function coloring(){
    r = red.value
    g = green.value 
    b = blue.value
    c = 'rgb('+r+','+g+','+b+')'
    color.style.background = c
}

clearbtn.onclick = function(){
    ctx.clearRect(-board.width/2,-board.height/2,
    board.width,board.height)
    drawArea()
}


rad.onclick =  function(){
    angleType='RAD'
}
deg.onclick = function(){
    angleType = 'Deg'
}
pibtn.onclick = function(){
    angle.value += "π"
}

setInterval(()=>{
    if(angleType=="Deg"){
        deg.style.background = 'rgb(76, 231, 71)'
        deg.style.border = '4px green solid'
        rad.style.background = 'rgb(231,76, 71)'
        rad.style.border = '4px red solid'
    }
    if(angleType =="RAD"){
        rad.style.background = 'rgb(76, 231, 71)'
        rad.style.border = '4px green solid'
        deg.style.background = 'rgb(231,76, 71)'
        deg.style.border = '4px red solid' 
    }
    coloring()
},10)
