var board = document.getElementById("board")
board.width = 800
board.height = 800
var ctx =  board.getContext('2d')

/*Drawing the area*/
ctx.translate(board.width/2, board.height/2)
function drawArea(){
    ctx.beginPath()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 4
    ctx.moveTo(-board.width/2,0)
    ctx.lineTo(board.width/2,0)
    ctx.moveTo(0,-board.height/2)
    ctx.lineTo(0,board.height/2)
    ctx.stroke()
    ctx.closePath()
    for (let index = -board.width/2; index <= board.width/2; 
    index+=20) {
        ctx.beginPath()
        ctx.lineWidth=2
        ctx.strokeStyle = 'black'
        ctx.moveTo(index,10)
        ctx.lineTo(index,-10)
        ctx.moveTo(-10,index)
        ctx.lineTo(10,index)
        ctx.stroke()
        ctx.closePath()
        /*part2*/
        ctx.beginPath()
        ctx.lineWidth=1
        ctx.strokeStyle = 'gray'
        ctx.moveTo(index,board.width/2)
        ctx.lineTo(index,-board.width/2)
        ctx.moveTo(-board.height/2,index)
        ctx.lineTo(board.height/2,index)
        ctx.stroke()
        ctx.closePath()

    }
}
drawArea()

/* items */
var equation = document.getElementById('equation')
var drawbtn = document.getElementById('drawbtn')
var clearbtn = document.getElementById("clearbtn")
var derivbtn = document.getElementById("derivbtn")
var eq
var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')
var r
var b
var g
var c
var color = document.getElementById('color')
/* variables */
var x = -board.width/2
var x1
var y
var y1
var fx
var fx1
var d = 0.000001
var dx
var dx1
var dfx
var dfx1

/* Algorithmes */

function coloring(){
    r = red.value
    g = green.value
    b = blue.value
    c = 'rgb('+r+','+g+','+b+')'
    color.style.background = c
}
setInterval(()=>{
    coloring()
},10)

drawbtn.onclick = function draw(){
    eq = equation.value
    if(x<board.width/2){
        x1 = x+1
        fx = eq.replace("x",'*'+x/20)
        fx = fx.replace("^","**")
        y = -eval(fx)*20
        fx1 = eq.replace("x",'*'+x1/20)
        fx1 = fx1.replace("^","**")
        y1 = -eval(fx1)*20
        ctx.strokeStyle ='blue'
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.moveTo(x,y)
        ctx.lineTo(x1,y1)
        ctx.strokeStyle = c
        ctx.stroke()
        ctx.closePath()
        x++
        requestAnimationFrame(draw)
    }
}

equation.onchange = function(){
    x = -board.width/2
}

clearbtn.onclick= function(){
    ctx.clearRect(-board.width/2,-board.height/2,
    board.width,board.height)
    drawArea()
}

derivbtn.onclick = function deriv(){
    eq =  equation.value
    if(x<board.width/2){
        x1 = x+1
        dx = x+d
        dx1 = x1+d
        fx = eq.replace("x",'*'+x/20)
        dfx = eq.replace("x",'*'+dx/20)
        fx = fx.replace("^","**")
        dfx = dfx.replace("^","**")
        y = -((eval(dfx)-eval(fx))/(dx-x))*20*20
        fx1 = eq.replace("x",'*'+x/20)
        dfx1 = eq.replace("x",'*'+dx/20)
        fx1 = fx.replace("^","**")
        dfx1 = dfx.replace("^","**")
        y1 = -((eval(dfx1)-eval(fx1))/(dx1-x1))*20*20

        ctx.strokeStyle ='blue'
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.moveTo(x,y)
        ctx.lineTo(x1,y1)
        ctx.strokeStyle = c
        ctx.stroke()
        ctx.closePath()
        x++
        requestAnimationFrame(deriv)
    }
}
/*Math variables*/

var cos = Math.cos
var sin = Math.sin
var tan = Math.tan
var atan = Math.atan
var acos = Math.acos
var acos = Math.asin
var abs = Math.abs
var e =  Math.E
var log = Math.log
var random =Math.random
