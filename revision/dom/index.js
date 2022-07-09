let ollist=document.querySelector('ol')
let btn=document.querySelector('button')
let inputbox=document.querySelector('input')
let allli=document.querySelectorAll('li')

for(let i=0; i<allli.length;i++){
    createbutton(allli[i])
}


btn.addEventListener("click",function(){

    let txt1=inputbox.value
    let newli=document.createElement('li')
    newli.textContent=txt1
    createbutton(newli)
    ollist.appendChild(newli)

})


function createbutton(li){
let re=document.createElement('button')
re.textContent="Remove"                   
re.className="remove"
li.appendChild(re)

let up1=document.createElement('button')
up1.textContent="Up"                   
up1.className="up"
li.appendChild(up1)

let dn=document.createElement('button')
dn.textContent="Down"                   
dn.className="down"
li.appendChild(dn)
    
}


