//Below property can be used to determint the size of browser window
function function1(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    document.getElementById("demo").innerHTML = "width = " + w + "<br>height = " + h;
}

//window.location object can be written without the window prefix
function function2(){
    let u = window.location.href;
    let host = location.hostname;
    let path = location.pathname;
    let prot = location.protocol;

    document.getElementById("demo").innerHTML = "URL = "+ u +"<br>Hostname = "+host+"<br>Pathname = "+path+"<br>Protocol = "+prot;
}

//Popup Boxes
function function3(){
    //alert box
    alert("I am the alert box!");
}
function function4(){
    //confirm box
    let txt;
    //if user click ok,the box will return true orelse false
    if(confirm("Press a button")){
        txt = "You pressed ok";
    }else{
        txt="You pressed cancel";
    }
    document.getElementById("demo").innerHTML=txt;
}
function function5(){
    //prompt box
    let txt;
    //if press ok, the returns an input value orelse it returns null
    let person = prompt("Enter your name");
    if(person == null || person == ""){
        txt = "You not entered the name";
    }else{
        txt="Input value is = " + person;
    }
    document.getElementById("demo").innerHTML=txt;
}

//Timing Events
function function6(){
    //setTimeout() function
    alert("This function is executed after 3 seconds");
}