let ulel=document.querySelector('ol')
let inputText=document.querySelector('input')
let addbutton=document.querySelector('button')
let lilist1=document.querySelectorAll('li')


for (let i=0; i<lilist1.length; i++){

createButton(lilist1[i])

}

addbutton.addEventListener('click', function(){
    let text=inputText.value.toUpperCase()

    let newel=document.createElement('li')
    newel.textContent=text
  
    createButton(newel)
    ulel.appendChild(newel)

})
// addbutton.addEventListener('click', function(){
//     let text2=inputText.value
//     let uu=text2.toUpperCase()



// })



// function upper(){
//    return toUpperCase()

// }

function createButton(li){

    let re=document.createElement('button')
    re.textContent="Remove"
    re.className="remove"
    li.appendChild(re)

    let u=document.createElement('button')
        u.textContent="Up"
        u.className="up"
        li.appendChild(u)

    let dwn=document.createElement('button')
        dwn.textContent="Down"
        dwn.className="down"
        li.appendChild(dwn)   
}



ulel.addEventListener("click",function(e){

    if (e.target.tagname="BUTTON"){
        if(e.target.className=="remove"){
            let li=e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }

        if (e.target.className=="down"){
            let li=e.target.parentElement
            let ul=li.parentElement
            let nextli=li.nextElementSibling
            ul.insertBefore(nextli,li)
        }

        if (e.target.className=="up"){
            let li=e.target.parentElement
            let ul=li.parentElement
            let prevli=li.previousElementSibling
            ul.insertBefore(li,prevli)


        }
    }
}
)