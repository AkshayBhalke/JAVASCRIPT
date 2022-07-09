

function Convertjson(url){
    return fetch (url).then(function(responce){
        return( responce.json())
    })
    
}

let getdata= async function(){
    let aa= await Convertjson("https://reqres.in/api/users?page=2")
    console.log(aa)
    let id=aa.data[2].id
    console.log(id)
    let singleUser=await Convertjson(`https://reqres.in/api/users/${id}`)
    console.log(singleUser)
}


getdata()

//prommise all 
//promise all gived all promises one time if any one promise are rejected then cant gives any promise

// example 1==>

let getdata1=async function(id1,id2,id3){
let bb=await Promise.all([
    Convertjson(`https://reqres.in/api/users/${id1}`),
    Convertjson(`https://reqres.in/api/users/${id2}`),
    Convertjson(`https://reqres.in/api/users/${id3}`)


])
return bb
}
let output=getdata1(1,2,3).then(function(output1){
    console.log(output1)
})

//example 2==>

//in this case second promise is rejected so it given error but if all get resolve then print all promises
//if any promise get reject then no any print 

let getdatab=async function(){
    let aa= await Promise.all([
        Promise.resolve("ok"),
        // Promise.reject("not ok"),
        Promise.resolve("ok")
    ])
    return aa
}

let cc=getdatab().then(function(outp){
    console.log(outp)
})

//promise any

// gives resolve promises and if any promise found rejected thennit terminate 
// in following example 2nd promise are rejected so it print only first resolve promise then it terminate 

let getdatac= async function(){
    let dd= await Promise.any([
        Promise.resolve("ok1"),
        Promise.reject("not ok"),
        Promise.resolve("ok2")
    ]) 
    return dd
}

let rr=getdatac().then(function(outp2){
    console.log(outp2)

})
