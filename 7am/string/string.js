//  String

let city="NANDED"
console.log(city[3]) 

//PROPERTY AND METHOD

let name="akshay"

console.log(name.length*2)


//string with loop

let mobile="vivo"

for(let i=0;i<mobile.length;i++)

console.log(i)



//method

//to capital letter

let laptop="dell"
let p=laptop.toUpperCase()
console.log(p)    // DELL

//to small letter

let country="INDIA"
let y=country.toLowerCase()
console.log(y)         //india

//include

let gender="male"
let t=gender.includes("e")
console.log(t)     // TRUE


//start with

let village="umarga"
let u=village.startsWith("um")
console.log(u)   // TRUE



//end with

let subject="science"
let f=subject.endsWith("ce")
console.log(f)   //TRUE

//PUSH   add string in last

let fruits=["apple","banana"]
let r=fruits.push('mango')
console.log(r)     //3
console.log(fruits)


//type of   (is it number or string)


let material=12345
console.log(typeof material)

let color="white"
let h=color.toUpperCase()
console.log(h)
console.log(typeof color)




let shoes="puma"
let g= shoes.toUpperCase().toLowerCase().length
console.log(g)     // 4





//trim()          remove first and last space 
let company=" microsoft "
let tt=company.trim()
console.log(tt)


//trimstart()      remove first space from the string

let processor=" intel"
let pp=processor.trimStart()
console.log(pp)



//trimend()      remove last space from string


let bin="blue "
let j=bin.trimEnd()
console.log(j)

//indexof      print possition no in string
let vegetable = "Tomato"
let hh = vegetable.indexOf('m')
console.log(hh)



//slice

             // 0  1  2  3  4  5
            //  A  K  S  H  A  Y
            // -6 -5 -4 -3 -2 -1


let xyz = "akshay"
let yh=xyz.slice(2)
console.log(yh)

let yh1=xyz.slice(2,4)
console.log(yh1)

let yh2=xyz.slice(-4)
console.log(yh2)

let yh3=xyz.slice(-4,-2)
console.log(yh3)

let yh4=xyz.slice(-1,-5)
console.log(yh4)        // IT WILL RETURN BULIAN VALUE (BLANK SPACE)


//split()
let fullName="akshay bhalke"
let gbh= fullName.split(" ")
console.log(gbh[1]+" welcome ")         //bhalke welcome

let gbh1= fullName.split("a")
console.log(gbh1)             // [ '', 'ksh', 'y bh', 'lke' ]

//replace()


let state= "i am from maharashtra"
let new1 = state.replace("maharashtra","india")
console.log(new1)                    // i am from india


//repeat()

let city1="mumbai ".repeat(3)
console.log(city1)                  //mumbai mumbai mumbai














