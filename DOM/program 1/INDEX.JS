
//program 1


let flist=document.querySelectorAll('li')
let bttn=document.querySelector('button')

bttn.addEventListener('click', function(){
    for (let i=0;i<flist.length;i++){
      flist[i].textContent="sorry"
    }
})






