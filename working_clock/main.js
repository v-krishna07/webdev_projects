setInterval(()=>{
    const date = new Date();
    document.getElementById("main").innerHTML=`<p id="time">${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}</p>`
},1)
console.log("hello");