

let vllist=document.querySelectorAll('li')
let ullist1=document.querySelector('ul')

ullist1.addEventListener('mouseover', function(){

    for(let i=0; i<vllist.length;i++){

        vllist[i].style.color="red"
    } 
} )

ullist1.addEventListener('mouseout', function(){

    for(let i=0; i<vllist.length;i++){

        vllist[i].style.color="black"
    } 
} )

