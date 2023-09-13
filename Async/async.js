function callback(){

    function myDisplayer(something){
        document.getElementById("demo").innerHTML = something;
    }

    function myCalculator(num1, num2, myCallBack){
        let sum = num1 + num2;
        myCallBack(sum);
    }

    myCalculator(5, 5, myDisplayer);
    /*Here, the myDisplayer is a called a callback function.
    It is passes to myCalculator() as an argument.
    When we pass a funciton as a callback function there 
    we don't use parenthesis-() 
    Mostly the callback functions are used with asynchronous functions.*/
}

function time(){//Asynchronous function
    /*Here are two funcions that are running concurrently,
    the one is setInterval and another is myFunciton.
    The myFunction is callback function and it is sended to setInterval 
    as an argument.
    With the help of asynchronous function programs can start long-running task,
    and continue running other tasks in paralell */
    setInterval(myFunction, 1000);
    
    function myFunction(){
        let d = new Date();

        document.getElementById("demo").innerHTML = 
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds(); 
    }
}

function promise_fn(){
    /*There are few promise objects:
    Pending--undefined
    Fullfilled--a result value
    Rejected--an error object */

    function myDisplayer(some){
        document.getElementById("demo").innerHTML = some;
    }

    let myPromise = new Promise(
        function(myResolve, myReject) {
          let x = 0;
        
          if (x == 0) {
            myResolve("OK");
          } else {
            myReject("Error");
          }
        }
        );

    myPromise.then(
        function(value)
        {myDisplayer(value);},
        function(error)
        {myDisplayer(error); }
    );
}

function async_await(){
    //Keyword "async" before a funciton makes the function return a promise
    async function myDisplay(){
        let myPromise = new Promise(function(resolve, reject){
            resolve("Heyo Yash is here!");
        });
        //Await keyword can only be used inside an async function
        //The await keyword makes the funciton pasue the execution and wait for a resolved promise before it continues
        document.getElementById("demo").innerHTML = await myPromise;
    }
    myDisplay();
}