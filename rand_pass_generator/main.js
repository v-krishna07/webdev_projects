function generatePassword(){
    lc='abcdefghijklmnopqrstuvwxyz';
    // lcm=[...lc];
    uc=lc.toUpperCase();
    // ucm=[...uc];
    n='1234567890'
    // num=[...n];
    s=`-=[]\;'./,!@#$%^&*()_+{}|:"<>?~`;
    // sym=[...s]
    mainstr=[...lc,...uc,...s,...n]
    //M-II ->make  single str then make list
}




const pass_len = 12;
const includeLowercase = true;
const includeUppercase= true
const includeNumber=true
const includeSymbols=true;

l = [pass_len,includeLowercase,includeNumber,includeSymbols,includeUppercase]

const pass = generatePassword();
