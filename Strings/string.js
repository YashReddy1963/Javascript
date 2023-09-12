//To retive the string 
function Stringretrive(){
    document.getElementById("stringmethod").innerHTML = "This String is <br> Apple, Banana, Kiwi";
}

let text = "Apple, Banana, Kiwi";

//Slice() is used the cut the string in two parts
function StringSlice(){
    //syntax = variable.slice(start, end);
    let part = text.slice(7,13);
    document.getElementById("stringmethod").innerHTML ="After String slice method: <br> " + part;
}

/*substring() is similar to slice().
The difference is that start and end values 
less than 0 are treated as 0 in substring().
*/
function StringSubstring(){
    let part = text.substring(7,13);
    document.getElementById("stringmethod").innerHTML ="After String substring method: <br> " + part;
}

/*The replace() method replaces a specified 
value with another value in a string:
*/
//replace(source,destination)
function StringReplace(){
    let part = text.replace("Banana","Mango");
    document.getElementById("stringmethod").innerHTML = "After replacing the string banana: <br> " + part;
}