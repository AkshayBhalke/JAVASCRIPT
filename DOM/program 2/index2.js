
//program 2


let vil=document.querySelectorAll('li')
let b12=document.querySelector('button')

b12.addEventListener("click", function(){
    for(let i=0; i<vil.length; i++){
        vil[i].style.color="brown"
        vil[i].style.backgroundColor="yellow"
    }
})


