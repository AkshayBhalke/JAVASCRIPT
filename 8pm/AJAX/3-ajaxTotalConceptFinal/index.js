// what is asyn  sync




// program
//output is like order of calling the function

// function add (){
//     console.log('one')
// }

// function add2 (){
//     console.log('two')
// }

// add2()
// add()

//to overcome the sync async prob used call back function like following


// function add3(){
//     setTimeout(function(){
//         console.log("first")
//         setTimeout(function(){
//             console.log("second")
//             setTimeout(function(){
//                 console.log("third")
//             },1000)
//         },2000)
//     },3000)

// }

// add3()    //first second third


//call back hell with API example


let ui= document.querySelector('#container')

function renderHtml(userdetails){
    let html=`<div>

    <p>${userdetails.first_name}</p>
    <p>${userdetails.last_name}</p>
    <p>${userdetails.email}</p>
    <p>${userdetails.id}</p>
    <img src = "${userdetails.avatar}"/>
    
    </div>`

    ui.insertAdjacentHTML('beforeend',html)


}

function getUser(page){
    let request=new XMLHttpRequest()
    request.open("GET",`https://reqres.in/api/users?page=${page}`)
    request.send()
    request.addEventListener("load",function(){
        // console.log(this.responseText)
        let allusers=JSON.parse(this.responseText)
        id=(allusers.data[1].id)

        let request=new XMLHttpRequest()
        request.open('GET',`https://reqres.in/api/users/${id}`)
        request.send()
        request.addEventListener('load',function(){
          let singleuser=JSON.parse(this.responseText)
          let gg=singleuser.data
            renderHtml(gg)
        })

    })
}
getUser(1)




//due to dificulty in code writing use promise concept

//simplem programm for promise

// let exm = new Promise(function(resolve,reject){
//     let a=10
//     let b=10

//     if(a==b){
//         resolve("this is equal")
//     }
//     else{
//         reject("this is not equal")
//     }

// })

// exm.then(function(aaa){
//     console.log(aaa)
// })
// .catch(function(aaa){
//     console.log(aaa)    

// })
// .finally(function(){                   //this is optional we can use for every promise it will print 
//     console.log("this is result")
 
// })
 

// API programm for promise


// function userpage(page){
//    return fetch(`https://reqres.in/api/users?page=${page}`)
// }

// function oneuser(id){
//     return fetch(`https://reqres.in/api/users/${id}`)
// }

// userpage(1).then(function(output3){
//     return output3.json()
// }).then(function(output4){
//     id=output4.data[1].id
//    return  oneuser(id)    
// }).then(function(output5){
//    return output5.json()
// }).then(function(response1){
//     renderHtml(response1.data)

// })


// userpage(2)
//async await funtion

//this function create for converting output into json means readable format
// function convertjson(url){
//     return fetch(url).then(function(responce){
//         return responce.json()
//     })
// }


// let getuserinfo= async function(pageno){
//     let obj=await convertjson(`https://reqres.in/api/users?page=${pageno}`)
//     let id=obj.data[0].id
//     let obj2= await convertjson(`https://reqres.in/api/users/${id}`)
//     let userdata=obj2.data
//     renderHtml(userdata)

// }

// getuserinfo(1)




//method of promises

// all()

// let getuserall= async function(){

//     let data= await Promise.all([
//         convertjson(`https://reqres.in/api/users/1`),
//         convertjson(`https://reqres.in/api/users/4`),
//         convertjson(`https://reqres.in/api/users/7`)
    
//     ])
//     return data

// }

// getuserall().then(function(output6){
   
//     renderHtml(output6[0].data)
//     renderHtml(output6[1].data)
//     renderHtml(output6[2].data)

// })


//simple program for promise all
// promise all method return all promises if all are resolve else if first get reject then it terminate the flow

// let getall= async function(){


// let aa= Promise.all([
//     Promise.resolve("first"),
//     Promise.reject("second"),
//     Promise.resolve("third")


// ])
// console.log(aa)
// }

// getall()            //calling function

// primise.race()
// it return which block first run either resolve or reject


// let getuserrace= async function(){
//     let d1=Promise.race([
//         Promise.reject("rejected"),
//         Promise.resolve("ok")
//     ])
//     console.log(d1)
// }

// getuserrace()            // calling function

//promise.getAllSettle()

// it return thst promise all , even if promise get rejected then also execute all promises 


// let getUsersAllSettle = async function () {
//     let data = await Promise.allSettled([
//         Promise.reject('Hello') ,
//         Promise.resolve('hello') ,
//         Promise.resolve('Bye')
//     ])
//     console.log(data)
// }
// getUsersAllSettle()    // calling function

// promise.Any()
// it return which promise get resolve first 


let getUsersAny = async function () {
    let data = await Promise.any([
        Promise.reject('Bye1') ,
        Promise.resolve('hello1'),
        Promise.reject('bye2') ,
        // Promise.resolve('hello2')
    ])
    console.log(data)
}
getUsersAny()           //function calling