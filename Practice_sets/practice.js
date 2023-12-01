
let runAgain = true;
const canDrive = (age)=>{
    return age>= 18?true:false;
}


while(runAgain){
let age = prompt("Enter your age");
age = Number.parseInt(age);

if(canDrive(age)){
    alert("Yes you can");
}
else{
    alert("No you cannot");
    console.error('Not a valid age');
    break;
}

runAgain = confirm("do you want to play again");
}