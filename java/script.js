


var input = document.getElementById("centered-card")
var btn = document.getElementById("Check")
var btn2 = document.getElementById("restart")
var num = document.getElementById("content")
var num2 = document.getElementById("Attempts")
var x = Math.floor(Math.random() * 100) + 1
// console.log(x)

let counter = 0

function Check() {
  var z = +(input.value)
  if (input.value == "") {
    num.innerText = "Please enter a number"
  }
  else if (isNaN(z)) {
    num.innerText = "not a number"
  }
  else {
    if (z > 100 || z < 1) {
      num.innerText = "Out of range"
    }
    else {
      if (z == x) {
        num.innerText = "Result \n correct"
      }
      else if (z < x) {
        num.innerText = "Result \n Too Low"
      }
      else if (z > x) {
        num.innerText = "Result \n Too High"
      }
    }
}

input.value = ""
}

btn.onclick = Check


function restart() {
  input.value = ""
  num.innerText = ""
  x = Math.floor(Math.random() * 100) + 1
  // console.log(x)
  counter++
  num2.innerText = "Attempts " + counter
}

btn2.onclick = restart