//Promise chaining
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This had printed after 2 second")
        resolve(56)
    },2000)
})

p1.then((value)=>{
    console.log(value)
    return new Promise((resolve, reject)=>{
        resolve(53)
    })
}).then((value)=>{
    console.log(value);
    console.log("The value 53 is of second promise created using promise chaining")
})

//problem solving
function promise_fn(){
    /*There are few promise objects:
    Pending--undefined
    Fullfilled--a result value
    Rejected--an error object */

    function myDisplayer(some){
        document.getElementById("demo").innerHTML = some;
    }

    let myPromise = new Promise((myResolve, myReject) =>{
          let x = 0;
        
          if (x == 0) {
            myResolve("OK");
          } else {
            myReject("Error");
          }
        }
        );

    myPromise.then((value)=> {myDisplayer(value);},
            (error) => {myDisplayer(error); }
    );
}cd