function getData(data){ // function return promise object
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            
            if(typeof data === "string"){
                resolve(data)
            }
            else{
                reject("please type string value")
            }


        },5000)
    });
}

getData("hello").then(response=>{
    console.log(response)
}).catch(err=>{
    console.log(err)
})


// then catch structure learned If resolve value want to take wtih then. If we want to take reject value we can take with catch 