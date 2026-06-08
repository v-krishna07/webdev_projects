document.getElementById("input").value='0';
var num = Math.round(Math.random()*100)
var tried=0;
console.log(num);
document.getElementById("submit").onclick = function(){
let inp = (document.getElementById("input").value == num)?(tried++&&(document.getElementById("final").innerHTML=`<p id='tries'>You have solved this in ${tried} tries</p>`)):(parseInt(document.getElementById("input").value,10) < num)?tried++&&(document.getElementById("verdict").textContent="PLease type are larger number")&&alert("Please enter a larger number"):(parseInt(document.getElementById("input").value,10) > num)?(tried++&&(document.getElementById("verdict").textContent="Please enter a smaller number")&&alert("Please enter a smaller number")):console.log("error");
}

