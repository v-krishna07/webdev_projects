let ndate = new Date()
let timer;
function renew(){
ndate.setHours('00');
ndate.setMinutes('00');
ndate.setSeconds('00');
}

function recurse(){
    renew();
    a = ['Start','Stop'];
    // if(document.getElementById('st').textContent=='Start'){
    // document.getElementById('st').onclick = ()=>{
    //     document.getElementById('st').textContent=a[1];
    //     [a[0],a[1]]=[a[1],a[0]];
    //     // start();
    //     if(a[0]=='Stop'){
    // timer = setInterval(()=>{ndate.setSeconds(ndate.getSeconds() + 1);},1000,);
    //     }
    //     else{stop(timer)}
    // }}
    // else{
    //     document.getElementById('st').textContent=a[0];
    //     [a[0],a[1]]=[a[1],a[0]];
    // }
    document.getElementById('st').onclick = ()=>{

    btn = document.getElementById('st');
    if(btn.textContent=='Start'){
        btn.textContent=a[1];
        timer = setInterval(()=>{ndate.setSeconds(ndate.getSeconds() + 1);}, 1000);
    }
    else{
        btn.textContent=a[0];
        stop(timer);
    }
    }
}

function reset(){
    dispdate();
    document.getElementById('clr').onclick = ()=>{
        stop(timer);
        renew();
        document.getElementById('st').textContent='Start';
        // recurse();
    }
    recurse();
}

function dispdate(){
    setInterval(() => {
        
    document.getElementById('time').innerHTML=`<p id='dtm'><label class='date'>${String(ndate.getHours()).padStart(2,'0')}</label>:<label class='date'>${String(ndate.getMinutes()).padStart(2,'0')}</label>:<label class='date'>${String(ndate.getSeconds()).padStart(2,'0')}</label></p>`;
    
    }, 1000);
}





function start(timer){
    timer;
}
function stop(timer){
    clearInterval(timer);
}

reset();