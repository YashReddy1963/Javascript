//Operation on Array
var fruit=["orange","apple","grapes","strawberry","mango"];
function function1(){
    //declaring an array
    document.getElementById("demo").innerHTML =
    "Length of the array: " +fruit.length + "<br>" +
    //toString() is method to print all the elements
    "Printing all elements of Array: " + fruit.toString() + " <br> " +
    //join() is method used to septrate elements manually, also we can seprate it by adding specific sign like(*)
    "Seprating the elements by join() method: " + fruit.join(" * ");
}

//poping last element in array
function function2(){
fruit.pop();
document.getElementById("demo").innerHTML = fruit.toString();
}
//pushing last element in array
function function3(){
    fruit.push("mango");
    document.getElementById("demo").innerHTML = fruit.toString();
}
//shift first element in array
function function4(){
    fruit.shift();
    document.getElementById("demo").innerHTML = fruit.toString();
}
//unshift first element in array
function function5(){
    fruit.unshift("orange");
    document.getElementById("demo").innerHTML = fruit.toString();
}

//printing array using loop
function function6(){
    let flen = fruit.length;
    let text = "<ul>";
    for(let i = 0;i<flen;i++){
        text = text + "<li>"+ fruit[i] + "</li>";
    }
    text = text + "</ul>";
    document.getElementById("demo").innerHTML = text;
}