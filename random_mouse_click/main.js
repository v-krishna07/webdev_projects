const box = document.getElementById("btn");
let touches=0;
let tries=0;
document.getElementById("tc").textContent=0
function main(){

function createRandomBox(){
    
    let l='abcdef012345';
    lt=[...l];
    x=[]
    for(let i=0;i<6;i++){
        x.push(lt[Math.round(Math.random()*(lt.length-1))]);

    }
    box.style.backgroundColor = '#'+ x.join("");
    box.style.boxShadow = `0 0 1px 3px ${'#'+ x.join("")} `; 
}

function randLoc(){
    const rx = Number(Math.round(Math.random()*(window.innerWidth-100)));
    const ry = Number(Math.round(Math.random()*(window.innerHeight-100))+50);
    box.style.left = rx+'px';
    box.style.top = ry+'px';
    // console.log(rx,ry);
}
function modify(){
createRandomBox()
randLoc()}

function onclik(){
    box.addEventListener('click', () => {
        tries++;
    touches++;
    modify(); 
// console.log(touches);
document.getElementById("tc").textContent=`${touches}`;
document.getElementById("tr").textContent=`${tries}`;
});



setInterval(() => {
    tries++
    modify();
    document.getElementById("tr").textContent=`${tries}`;
}, 3000);

// document.getElementById("ext").onclick=
    
}

onclik();

}

// setInterval(()=>{main()},3000)
main()