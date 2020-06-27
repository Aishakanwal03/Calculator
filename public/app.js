var input = document.getElementById("input")
var output = document.getElementById("output")


function value(num){
if (num === "AC"){
    input.innerHTML = ""
    output.innerHTML = 0
}else if (num === "=") {
    output.innerHTML = eval(input.innerHTML)
}else if (num === "C") {
   var array = input.innerHTML.split("")
   array.pop()
   input.innerHTML = array.join("")

   output.innerHTML = eval(input.innerHTML)
   if (eval(output.innerHTML) === undefined) {
    output.innerHTML = "0"
   }

  
   
}else {
    input.innerHTML += num
}
}