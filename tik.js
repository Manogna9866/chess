
//  var player1 = document.getElementById("x");
//  var player2 = document.getElementById("y");
//  var a=document.getElementById("fb")

// player1.onclick = function(){
//      x.innerHTML = ("x");
//  }

//  player2.onclick = function(){
//      y.innerHTML = ("y");

let arr = Array(9).fill(null)

function name() {
    document.getElementById("0").innerHTML = "o"
    document.getElementById("1").innerHTML = "o"
    document.getElementById("2").innerHTML = "x"
    document.getElementById("3").innerHTML = "o"
    document.getElementById("4").innerHTML = "o"
    document.getElementById("5").innerHTML = "o"
    document.getElementById("6").innerHTML = "x"
    document.getElementById("7").innerHTML = "x"
    document.getElementById("8").innerHTML = "o"
}

function fc() {
    if (document.getElementById("0").innerHTML == "o") {
        if (document.getElementById("2").innerHTML == "x") {
            document.getElementById("1").innerHTML = "x"
        }
    }

}



function sc() {
    if (document.getElementById("1").innerHTML == "o") {
        document.getElementById("2").innerHTML = "o"
    }
    else {
        document.getElementById("1").innerHTML = "x"

    }
   
}

function tc() {
    if (document.getElementById("2").innerHTML == "x") {
        document.getElementById("3").innerHTML = "x"
    }
    else {
        document.getElementById("4").innerHTML = "o"

    }
    click()
}

function sfc() {
    if (document.getElementById("3").innerHTML == "o") {
        document.getElementById("4").innerHTML = "x"
    }
    else {
        document.getElementById("5").innerHTML = "o"

    }
   
   click()
}

function ssc() {

    if (document.getElementById("4").innerHTML == "o") {
        document.getElementById("5").innerHTML = "x"
    }
    else {
        document.getElementById("6").innerHTML = "x"

    }
    click()
}

function stc() {

    if (document.getElementById("5").innerHTML == "x") {
        document.getElementById("6").innerHTML = "x"
    }
    else {
        document.getElementById("5").innerHTML = "o"

    }
   
}

function tfc() {
    if (document.getElementById("6").innerHTML == "o") {
        document.getElementById("7").innerHTML = "x"
    }
    else {
        document.getElementById("6").innerHTML = "o"

    }
    
    
}

function tsc() {
    if ((document.getElementById("7").innerHTML )!== "x") {
        document.getElementById("8").innerHTML = "o"
    }
    else {
        document.getElementById("7").innerHTML = "x"

    }
    click()
}

function ttc() {

    if (document.getElementById("8").innerHTML == "o") {
        document.getElementById("7").innerHTML = "x"
    }
    else {
        document.getElementById("8").innerHTML = "x"

    }
   
}
function click(){
    var a=document.getElementById("0").innerHTML
    var b=document.getElementById("1").innerHTML
var c=document.getElementById("2").innerHTML
var d=document.getElementById("3").innerHTML
var e=document.getElementById("4").innerHTML
var f=document.getElementById("5").innerHTML
var g=document.getElementById("6").innerHTML
var h=document.getElementById("7").innerHTML
var i=document.getElementById("8").innerHTML
if (c=="x"&& e=="x"&& g=="x"){
alert("win")
}
}


        
        

     