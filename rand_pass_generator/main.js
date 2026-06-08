function generatePassword(){
    lc='abcdefghijklmnopqrstuvwxyz';
    // lcm=[...lc];
    uc=lc.toUpperCase();
    // ucm=[...uc];
    n='1234567890'
    // num=[...n];
    s=`!@#$%&*+_-=<>?`;
    // sym=[...s]
    mainstr=[...lc,...uc,...s,...n]
    //M-II ->make  single str then make list
    let pass=[];
    for(let i=0;i<12;i++){
        pass.push(mainstr[Math.round(Math.random()*mainstr.length)])
    }
    document.getElementById("btn").onclick = ()=>document.getElementById("pass").innerHTML = (`<p id='output'>Your generated password is : "<label id="fo">${pass.join('')}</label>"</p>`)
}
generatePassword();