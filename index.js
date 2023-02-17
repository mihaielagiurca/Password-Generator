const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let inputPassword1 = document.getElementById("input1");
let inputPassword2 = document.getElementById("input2");
let passwordLength = 15;

function randomCharacter(){
    let indexRandom = Math.floor(Math.random()*characters.length);
    for( let i=0; i< characters.length; i++){
        return characters[indexRandom];
    }  
}   


function myRandomPassword(){
    randomPassword = "";
    for (let i=0; i<=passwordLength; i++){
        randomPassword+=randomCharacter();
        
    }
    return randomPassword;
}

function clickMe(){
    const randomPassword1 = myRandomPassword();
    const randomPassword2 = myRandomPassword();
    inputPassword1.textContent = randomPassword1;
    inputPassword2.textContent = randomPassword2;
}









    


