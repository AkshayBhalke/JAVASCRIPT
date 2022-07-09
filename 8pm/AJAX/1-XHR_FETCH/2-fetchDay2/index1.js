
// document.querySelector("body")
// function renderHtml(data){
//     let html= `
//     <div>
//         <p>${data.id}</p>
//         <p>${data.first_name}</p>
//         <p>${data.last_name}</p>
//         <p>${data.email}</p>
//         <img src="${data.avatar}" />
    
    
//     </div>`
//     document.querySelector("body").insertAdjacentHTML("beforeEnd",html)

// }





// function getuser(page){
//     fetch(`https://reqres.in/api/users?page=${page}`)
//     .then(function(responce){
//         return responce.json()
//     }).then(function(obj){
//         return(obj.data[1].id)
//     }).then(function(id){
//         return fetch(`https://reqres.in/api/users/${id}`)
//     }).then(function(responce){
//         return responce.json()
//     }).then(function(object){
//          renderHtml(object.data)
//     })

// }



// getuser(1)
// getuser(2)






