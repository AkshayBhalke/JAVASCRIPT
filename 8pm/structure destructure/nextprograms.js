let names=["akshay","pratiksha","advik"]
let [aa, ,cc]=names

console.log(names)
console.log(cc)


let mobile=[["vivo","oppo"],"samsung","redmi"]
let [[v,o],s,r]=mobile
console.log(v)


// reverse value using temprary variable
let a=10
let b=15

temp=a
a=b
console.log(a)


//swapping the value 

let x=2;
let y=4;

[x,y]=[y,x]

console.log(x)


//object destructor

let laptop={
    company:"dell",
    ram:"6 gb"
}

let {company:cm,ram:rm}=laptop


console.log(cm)





let employee=[
{
    firstname:"akshay",
    lastname:"bhalke"
},
{
    firstname:"advik",
    lastname:"biradar"

}
]

let [{firstname:fn1,lastname:ln1},{firstname:fn2,lastname:ln2}]=employee


console.log(fn1)


//with multi object with array

let markset={
    marks1:[20,25],
    marks2:[26,66]
}

let {marks1:[m1,m2],marks2:[m3,m4]}=markset

console.log(m4)