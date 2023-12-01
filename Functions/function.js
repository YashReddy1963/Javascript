console.log(document);
function function_constructor(){
    const myfunction = function(a,b){
        return(a + b);
    }
    document.getElementById("demo").innerHTML = myfunction(3,4);
}

function function_invoked(){
    //This is the self invoked function
    //function is self-invoked when it is followed by ()
    (function (){
        document.getElementById("demo").innerHTML = "Hello! this is self-invoked function";
    })();
}

function function_property(){
    function myfunction(a,b){
        //Method to the object
        return arguments.length;
    }
    document.getElementById("demo").innerHTML = myfunction(3,4);

}

//This is function_object
function function_object(){
    function myfunction(a,b){
        //Object constructor
        return a * b;
    }
    let text = myfunction.toString();
    document.getElementById("demo").innerHTML = text;
}

function function_reset(){
    function sum(...args)//here (...)==reset function and args==total arguments in array
    {
        let sum = 0;//here sum is a varibale
        for(let arg of args)//Here arg is one of the total arguments
            sum += arg;
        return sum;
    }

    //Here x is variable and sum is a function with numbers of arguments as an array
    let x = sum(45,3,456,7,89);

    document.getElementById("demo").innerHTML=x;
}

function argument_object(){
    /*
    When a function is called with too many arguments(more than declared),
    these arguments can be reached using the arguments object.
    */

    let x = findmax(45,3,456,7,89);
    function findmax(){
        let max = -Infinity;
        for(let i =0; i< arguments.length; i++){
            if(arguments[i] > max){
                max = arguments[i];
            }
            /* 
            The parameters, in a fucntion call, are the function's arguments
            In javascript arguments are passed by value: The funciton only get
            to know the values, not the arguments locations.
            Changes to the arguments are not visible(reflected) outside the funciton
            */
        }
        return max;
    }
    document.getElementById("demo").innerHTML = x;
}

function function_with_function_constructor(){
    //Funciton constructor:
    

    function myFunction(arg1, arg2) {
        this.firstName = arg1;
        this.lastName  = arg2;
      }
      
      const myObj = new myFunction("John","Doe")
      document.getElementById("demo").innerHTML = myObj.firstName; 
}

function global_object(){

    let x = myfunction();//x will be the window object

    function myfunction(){
        return this;
    }
    /*When a function is called without an owner object, the value of "this"
    becomes the global object.
    In a web browser the global object is the browser window.
    This example returns the window object as the value of this.
    Also using the window object as a variable can easily crash your program
    */
   document.getElementById("demo").innerHTML= x;
}

function call_method(){
    //With call() an object can use method belonging to another object
    const person = {
        //variable fullname is a global variable since it is not declared with keyword like(var, let or const)
        fullname: function(city, country) {
            return this.firstname + " " + this.lastname + ", " + city + ", " + country ;
        }
    }
    const person1 = {
        firstname: "Yash",
        lastname: "Reddy"
    }
    document.getElementById("demo").innerHTML = person.fullname.call(person1,"Maharashtra","India");
}

function apply_method(){
    //The difference between call() and apply() is call takes arguments separetly and apply takes arguments as an array
    const person = {
        fullname: function(city, country) {
            return this.firstname + " " + this.lastname + ", " + city + ", " + country ;
        }
    }
    const person1 = {
        firstname: "Yash",
        lastname: "Reddy"
    }
    document.getElementById("demo").innerHTML = person.fullname.apply(person1,["Maharashtra", "India"]);
}