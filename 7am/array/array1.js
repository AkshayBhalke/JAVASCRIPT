// program one

let ages= [21,22,45,12,14]
let birthyear =[]

for (let i=0; i<ages.length; i++){

//console.log(2022-ages[i])

let years=2022-ages[i]
birthyear.push(years)}
console.log(birthyear)                        // [2001,2000,1977,2010,2008]



let ages1= [21,22,23,24]
let byear=[]
for(let i=0; i<ages1.length; i++)
{
let year1= 2022-ages1[i]
byear.push(year1)
}
console.log(byear)                                 //// [2001,2000,1999,1998]






let age2=[25,40,32,12]
let DOY=[]
for(i=0; i<age2.length; i++){
let yr=2022-age2[i]
DOY.unshift(yr)
}
console.log(DOY)                                  // used unshift [2010,1990,1982,1997]










// program two




let id=[20,25,31,27,15]
let above20=[]
for(let i=0; i<id.length; i++){

if (id[i]>=20){
    above20.push(id[i])
}
}
console.log(above20)                            //[20,25,31,27] print greater then 20






let number1=[12,15,16,9,8,32]
let below10=[]
for(let i=0; i<number1.length; i++) {
if (number1[i] <10){
below10.push(number1[i])
}
}
console.log(below10)                             // [9,8]





// Program Three 


let num=[10,15,13]
let total=0

for (let i=0; i<num.length; i++ ){
total=(total+num[i])
}
console.log(total)                         // 38





let marks=[10,20,30]
sub =0
for(let i=0; i<marks.length; i++){

sub=sub+marks[i]
}
console.log(sub)                        // 60










// program Four

let fruit=["mango", "apple","banana","grapes"]

for(i=0;i<fruit.length;i++){
    console.log(`sweet ${fruit[i]}`)
    //or
    console.log("sweet"+fruit[i])      // both statement gives same output but we can enter easily space in two string by above code
}























