//synchronus

function sum() {
    console.log(9 + 9)
}

function sum1() {
    console.log(8 + 4)
}

// sum() //first  display output of this function
// sum1() //then  display output of this function

//Asynchronus


function first() {
    setTimeout(function () {
        console.log("first")
    }, 10)
}

function second() {
    console.log("second")
}

// first() //call here first but this will wait 2 sec till time second following function execute and disply the output
// second()


// asynnchronus example======>

function add() {
    setTimeout(function () {
        console.log("getting id")
        setTimeout(function () {
            console.log("getting userinfo")
            setTimeout(function () {
                console.log("getting mail")
            }, 2000)
        }, 300)
    }, 200)
}

// add()

// above structure called as call back hell

//for overcome this the solution is PROMISES

//promises have three state====>  pending,resolve,reject



let pro=new Promise(function(resolve,reject){
    let a=4-1
    let b=5-1

    if (a==b){
        resolve("both are equal")
    }
    else{
        reject("both are diffrent")
    }

})

///for consuming above promise

pro.then(function(sentence){
    console.log(sentence)
}, function(sentence){
    console.log(sentence)

})




let prom=new Promise (function(resolve,reject){

    let a=10
    let b=20

    if(a==b){
        resolve([1,3,5,8])
    }
    else{
        reject([55,858,6])
    }


})


prom.then(function(val){
    console.log(val[1])
})
.catch(function(val2){
    console.log(val2[0])
})



//--------------------------------------------------//
let promiseFlow = new Promise(function (resolve, reject) {            //created new promise
    let a = 10 
    let b = 10
    if (a == b) {
        resolve(1)
    }
    else {
        reject('attempt fail')
    }

})


function Getinfo(id) {                          // created function in which return again the new promise
    return new Promise(function (resolve, reject) {
        if (id == 1) {
            resolve('bhalkeakshay@gmail.com')
        }
        else {
            reject('unable to find info ')
        }

    })
}

promiseFlow.then(function (id) {                    // used promise  //stored id in 'id' 
    Getinfo(id)                                   // passing id value to getinfo function
    .then(function (email) {
        return email
    }).then(function (email) {
        console.log(email)
    })
}).catch(function(str){
    console.log(str)
})

