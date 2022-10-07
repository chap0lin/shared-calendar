var showBuilder = false
document.getElementById("builder-collapsible").addEventListener("click", () => {
  showBuilder = !showBuilder
  if(showBuilder){
    document.querySelector(".builder-container").style.display = "flex"
  }else{
    document.querySelector(".builder-container").style.display = "none"
  }
})

const checks = document.querySelectorAll("input[type=checkbox]")

function getFormattedOutput(){
  var data = {}
  checks.forEach((check, i) => {
    if(check.checked){
      Object.assign(data, JSON.parse(`{"${i}": true}`))
    }
  })
  console.log(data)
  document.querySelector(".builder-output").innerText = JSON.stringify(data)
}

var mouseDown = false;
document.body.onmousedown = function(){
  mouseDown= true;
}
document.body.onmouseup = function(){
  mouseDown=false;
}


checks.forEach(check => {
  check.addEventListener("mouseover", () => {
    if(!mouseDown) return;

    check.checked  = 1 - check.checked 
    
  })
  check.addEventListener("change", () => {
    
  })
})

document.getElementById("calctotal").addEventListener("click", () => {
  const checked = document.querySelectorAll("input:checked")
  getFormattedOutput()
  document.getElementById("total").innerText = `${checked.length * 0.5} horas`
})