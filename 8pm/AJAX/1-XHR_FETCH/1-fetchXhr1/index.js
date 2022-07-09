

let container =document.querySelector('#container')
let buttona=document.querySelector('button')


function renderHtml(responce){
// console.log(responce)

    let html= `<dev> 
    <h1> firstN:${responce.first_name} </h1>
    <p>lastN:${responce.last_name} </p>
    <p>mail:${responce.mail}  </p>
    <h1>id:${responce.id} </h1>
    <img src="${responce.avatar}">
    
    </dev>`
    container.insertAdjacentHTML("beforeEnd",html)
}


// xhr
function getData(){
    fetch("https://reqres.in/api/users?page=2")
    .then(function(responce){
       return  responce.json()
    }).then(function(responce){
        // console.log(responce.data[0].avatar)
        responce.data.forEach(function(el){
            renderHtml(el)
        })

    })
}

// getData()

buttona.addEventListener("click",function(){
    getData()
})