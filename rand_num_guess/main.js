document.getElementById("input").value='0';
var num = Math.round(Math.random()*100)
var tried=0;
console.log(num);
document.getElementById("submit").onclick = function(){
let inp = (document.getElementById("input").value == num)?(tried++&&(document.getElementById('verdict').textContent = ('You have solved this in',tried))&&(document.getElementById("submit").innerHTML='<div></div>')):(parseInt(document.getElementById("input").value,10) < num)?tried++&&(document.getElementById('verdict').textContent = ("Please enter a larger number"))&&(document.getElementById('verdict').textContent = ('You used ',tried)):(parseInt(document.getElementById("input").value,10) > num)?(tried++&&(document.getElementById('verdict').textContent = ("Please enter a smaller number"))):console.log("error");
}

