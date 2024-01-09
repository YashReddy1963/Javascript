
//geoLocation function
function function1(){
    let x = document.getElementById("demo");
    try{
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }catch{
        x.innerHTML = err;
    }
    function showPosition(position){
        x.innerHTML = "Latitude = "+ position.coords.latitude + "<br>Longitude = "+position.coords.longitude;
    }

    function showError(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation";
                    break;
            case error.POSITION_UNAVAILABLE:    
                    x.innerHTML = "Location information is unavailable";
                    break;
            case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out";
                    break;
            case error.UNKNOWN_ERROR:   
                    x.innerHTML = "An unknown error occured";
                    break;
        }
    }
}

//Fetch api
function function2(){
    let p = fetch('https://goweather.herokuapp.com/weather/India')
    p.then((response)=>{//here the 'then' method is used to handle the response, converting it to JSON using the json()
        return response.json()
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
}

//Fetch api GET request
function function3(){
    //Here the fetch function is used to make a get request, and we hangle the response by checking if it's okay using the response.ok property.
    //If the response is okay then we converti it to JSON and process the user data
    fetch('https://goweather.herokuapp.com/weather/America').then((response)=>{
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then((response)=>{
        console.log('User Date:', response)
    })
    .catch(error => {
        console.error('Error: ', error)
    })
}