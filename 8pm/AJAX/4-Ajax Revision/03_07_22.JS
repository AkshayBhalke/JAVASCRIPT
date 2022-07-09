function getUserInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get user id')
            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)

    }, 3000)
}


getUserInfo()     //we use call back hell


//promises 


let pro=new Promise (function(resolve,reject){
    let a=50
    let b=40


    if(a==b){
        resolve(" the value of a & b is same")

    }
    else{
        reject("value is diff")
    }
})

pro.then(function(outp){
    console.log(outp)

},function(outp){
    console.log(outp)
})

//output-  val is diff

// prog-2

let prom2 = new Promise(function(resolve,reject){
    let fullName = "Akshay"

    if(fullName.length > 10){
        resolve(['latur',"nanded"])
    }
    else {
        reject(['solapur#',"beed"])
    }

})

prom2.then(function(array){
    console.log(array[1])

})
.catch(function(array){
    console.log(array[0])
})
.finally(function(){
    console.log("run always with resolve as well as reject")
})

//output is solapur because its reject and we console the value in array by giving index num.


//prog-3


let pro3=new Promise(function(resolve,reject){
     setTimeout(function(){

        if("string"){
            resolve("user created")
        }
        else{
            reject("user not created")
        }

     },3000)

})


function getuserID(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if("string"){
                resolve("get userid")
            }
            else{
                reject("user id not found")
            }
        },2000)
    })
}

function getuserdata(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if("string"){
                resolve("get user info")
            }
            else{
                reject("user info not found")
            }
        },1000)
    })
}


//consuming promise of above prog.


pro3.then(function(str){
    console.log(str)
    return getuserID()
}).then(function(str){
    console.log(str)
    return getuserdata()
}).then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
})
.finally(function(){
   console.log("i will run all time at the end") 
})


//same can be use by calling async function like following

function createuser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if("string"){
                resolve("user created")
            }
            else{
                reject("user not created")
            }   
         },3000) 
    })
}
  

function getuserID1(){
   return new Promise(function(resolve,reject){
       setTimeout(function(){
           if("string"){
               resolve("get userid")
           }
           else{
               reject("user id not found")
           }
       },2000)
   })
}

function getuserdata1(){
   return new Promise(function(resolve,reject){
       setTimeout(function(){
           if("string"){
               resolve("get user info")
           }
           else{
               reject("user info not found")
           }
       },1000)
   })
}

async function info(){
   let a= await createuser()
    console.log(a)
    let b= await getuserID1()
    console.log(b)
    let c= await getuserdata1()
    console.log(c)
}
 info()

