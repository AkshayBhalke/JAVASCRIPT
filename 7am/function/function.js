//with parameter without return type
function add(){
    console.log(100+50)
}

add()

//with return type
//function declaration
function add1(x,y){
    return x+y
}
let q=add1(2,3)
console.log(q)

//function expression

let sub= function (a,b){
    return (a-b)
}
let y=sub(9,2)
console.log(y)

//arrow function
let add2=(a,b,c)=>{
    return(a+b+c)
}
let s=add2(20,15,12)
console.log(s)


let contry=12345
console.log(typeof contry)