

//For printing the page
function function1(){
    window.print();
}

//For retriving the paragraph
function function2(){
    document.getElementById("demo").innerHTML="This is the paragraph";
}


//Addition of two variables
var x;
x = 5;
var y;
y = 6;
var z = x + y;
let nameString = function5("yash");
function function3(){
    document.getElementById("demo").innerHTML= "The value of z is: " + z + " The String is: " + nameString;
}

//For joining two strings
function function4(){
    document.getElementById("demo").innerHTML="Jhon" + " " + "Doe";
}

//Funciton parameter passing 
function function5(name1){
    let name2 = name1 + " reddy";
    return name2;
}

//Creating an object and storing values in it
const person = {
    firstname : "Yash",
    lastname : "Reddy",
    id : 5566,
    //This is a function belongs to object
    fullname : function(){
       return this.firstname.toUpperCase() + " " + this.lastname;
       //Here, the "this" keyword contains the value of "myobject" object
       //Invoking a funciton as an object method, causes the value of "this" to be the object itself
    }
};
function function6(){
    document.getElementById("demo").innerHTML="Firstname: " + person.firstname + "; Lastname length: " + person.lastname.length;
}

//Printing all the elements of an object
function object_print(){
    let text = "";
    for(let i in person){
        text+= person[i] + "<br>";
    }
    document.getElementById("demo").innerHTML=text;
    document.getElementById("demo").innerHTML = person.fullname();
}

function function13(){
    const currnentdate = new Date();
    document.getElementById("demo").innerHTML = currnentdate;
}

function switch_case(){
    let text1;
    switch(new Date().getDate()){
        case 0:
            text1 = "yash"
            break;
        case 9:
            text1 = "reddy"
            break;
        case 10:
            text1 = "Wednesday 10 may"
            break;
        default:
            text1 = "rocks"
            break;
    }
    document.getElementById("demo").innerHTML = text1;
}

function for_loop(){
    let text1 = ""
    for(let i =0;i<5;i++){
        text1 += "This is the value of i: " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text1;
}

function error_detect(){
    try{
         let arr =[1,2];
         document.getElementById("demo").innerHTML = arr[2];

    }
    catch(err){
        document.getElementById("demo").innerHTML = err.message;
    }
}
