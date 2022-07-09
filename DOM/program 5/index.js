let ullist=document.querySelector('ul')
let inptxt = document.querySelector('input')
let butn=document.querySelector('#one')
let lilist1= document.querySelectorAll('li')


for (let i=0; i<lilist1.length; i++)
createButton(lilist1[i])

butn.addEventListener("click",function(){
    let tx1= inptxt.value
    let newb=document.createElement('li')
    newb.textContent=tx1
    
    ullist.appendChild(newb)
    createButton(newb)
    inptxt.value=" "
})



function createButton(li){

    let re=document.createElement('button')
    re.textContent="Remove"
    re.classList="remove"
    li.appendChild(re)

    let u=document.createElement('button')
    u.textContent="Up"
    u.classList="up"
    li.appendChild(u)


    let dn=document.createElement('button')
    dn.textContent="Down"
    dn.classList="down"
    li.appendChild(dn)

}
