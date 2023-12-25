//Events
function upperCase(){
    const y = document.getElementById("fname1");
    y.value = y.value.toUpperCase();

    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function mOver(obj){
    obj.style.background = "Yellow"
}

function mOut(obj){
    obj.style.background = "Red";
}

