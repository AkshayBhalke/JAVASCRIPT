
//number + string = string
//string + number = string
//string +string = string
//number + number =  number

//example- 
 
 let a=12
 let b=15
 let c= "akki"

 console.log(a+b+c)   // 27akki
 console.log(a+c)   // 12akki
 console.log(c+b+a)  // akki1512
 console.log(a+c+b)  // 12akki15
 

 let firstname="akshay"
 let lastname="bhalke"

 console.log(firstname+" " + lastname)   //for space we have to add here "_'in between two string




console.log("my first name is"+" "+firstname+"& my last name is"+" "+lastname)  // following are the easy way to write

console.log(`my first name is ${firstname} and my last name is ${lastname}`)    // easy way to write 





//reverse the string

let kkk="guru"
let jh=""
for(let i=0; i<kkk.length; i++){
    jh=kkk[i]+jh
}
console.log(jh)