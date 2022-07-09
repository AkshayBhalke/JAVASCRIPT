

let ordlist=document.querySelector('ol')
let enput=document.querySelector('input')
let bton=document.querySelector('button')

bton.addEventListener("click",function(){
    if(enput.value===""){
        console.log("enter the string")
    }else{

    
    
    let data=enput.value
    let newli=document.createElement('li')
    newli.textContent=data
    ordlist.appendChild(newli)
    enput.value= " "
    }
})






