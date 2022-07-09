// Structure & deStructure

// to array   & object 


//// example-1

let num=[12,16,17,18,62]

console.log(num[0])       //12
console.log(num[3])            //18


let a=num[0]
let b=num[1]
let c=num[2]
let d=num[3]
let f=num[4]

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(f)

//// example 2

let digit=[12,58,68,96]

let[a1,b2,c3,d4]=digit


console.log(a1)
console.log(b2)
console.log(c3)
console.log(d4)



// //example3

let obj={
    fname: "akshay",
    lname: "bhalke",
    num: 8888318895
}


let {fname:f1,lname:l1,num:n1}=obj              // stores the element in f1, l1 , n1

console.log(f1)                    // akshay

console.log(l1)                  // bhalke
console.log(n1)                   // 8888318895


////example 4

let info ={
    firstname:"advik",
    lastname:"biradar",
    skills:["python","java"]

}

let {firstname:j1,lastname:j2,skills:[s1,s2]}=info       //stores array value in s1,s2

console.log(j2)          // biradar
console.log(s2)          // java

//example 5

let toy=[["ladybug","butterfly"],["loto","viola"]]

let [[j11,k11],[l11,m11]]=toy                           

console.log(l11)              // loto
console.log(j11)              // ladybug


////example 6


let bio={
    emp1:{
        fname1:"rohit",
        lname1:"more",
        empcode: 1
    },
    emp2:{
        fname1:"akash",
        lname1:"bhosale",
        empcode: 2
    }
}
let {emp1:{fname1:aaa,lname1:bbb,empcode:ccc},emp2:{fname1:ddd,lname1:eee,empcode:fff}}=bio   //stored object in a,b,c,d,e,f


console.log(b)               // more
console.log(f)                  // 2

////example 6



let car=[{
    type:"marc",
    color:"red",
    company:"benz"
},
{
    type:"swift",
    color:"white",
    company:"maruti"
}
]

let [{type:a11,color:a12,company:a13},{type:a21,color:a22,company:a23}]=car //array of car stores in variable[{a11,a12,a13},{a21,a22,a23}]



console.log(a12)                 // red
console.log(a22)               // white

































