function AddTwo(number){ // function return promise object
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            
            if(typeof number === "number"){
                resolve(number)
            }
            else{
                reject("please type number value")
            }


        },5000)
    });
}

AddTwo(5).then(response=>{
    console.log(response);
    return response +2;   // If we use return we can catch with then function
}).then(response2=>{
    console.log(response2)
}).catch(err=>{
    console.log(err)
})
// only we can use once catch but we can use a lot then
