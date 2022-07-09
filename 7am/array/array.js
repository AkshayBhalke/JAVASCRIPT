//araay stores the value by index , retrive the value by index

let city=["pune","latur","nanded"]
console.log(city[0])   //pune
console.log(city[2])



//everything in js is an objest
//array is also object so it has property and methods

//length

let item=["raw","finish"]
let rr=item.length
console.log(rr)        //2
console.log(item[item.length-1])




//array has 23 methods



//push       add the element in the last      it return new length of array


    let country1=["india","japan"]
    let aaa=country1.push("USA")
    console.log(aaa)          // it return the total count after add (new length)
    console.log(country1)     // it return the all strings



    //unshift            add element in begaining     it return new lenth of array

    let bbb=country1.unshift("russia")
    console.log(bbb)         // it return total count after add
    console.log(country1)     // it return the all strings



    //shift         delete the first string         it return the new remaining string in array

    let ccc=country1.shift()
    console.log(ccc)
    console.log(country1)



   // pop           delete the last string         it return the new remaining string in array

let ddd=country1.pop()
console.log(ddd)
console.log(country1)



// includes()     it search the input value in index     it return the value tru or false

let color1=["red","green","yellow"]

let oo=color1.includes("green")

console.log(oo)

// MAP()

let ages3=[21,25,23,26]                // in this example we are using map instead of using push method
birthyr=[]
let g=ages3.map(function(el,index,arr){
   return 2022-el
})
console.log(g)                 // [ 2010, 1999, 1957, 2001, 2011 ]


//filter ()               // filter out the element and return array

let mmm=[10,15,8,7,5]
let above10=[]
let nn=mmm.filter(function(el,index,arr){
    return el<10
})
console.log(nn)

let ab1=[40,46,39,51,53]
let abov40=[]
let rrr=ab1.filter(function(el,index,array){
return el>40
})
console.log (rrr)

//REDUCE()

let op=[12,11,10]
let np=op.reduce(function(acc,el,index,arr)
{
    return acc+el
},5)                            //acc=5 (like this we can assign acc value)
console.log(np)



let y=[10,20,30]
let rm=y.reduce(function(acc,el,index,array){
return acc+el
})
console.log(rm)                           //60


let h=[10,20]
let j=h.reduce(function(acc,el,index,array){
return acc+el
}, 2)
console.log(j)                            //32


//forEach()    

let uu=["ram","sham"]                 //previous example with for loop  
for (let i=0; i<uu.length; i++){

console.log("welcome"+uu[i])
}



let kl=["ram","sham"]                        //same with forEach method 
kl.forEach(function(el,index,array){
console.log("welcome"+ el) 
})

//every()      // check all element meet the condition and gives bullean value
let pr=[23,21,25]
let okk=pr.every(function(el,index,arr){
return el>30
})
console.log(okk)                     //false


//some()                          "check all element with condition and if any one element meet the condition then return true 
                                  //and if no any element meet condition then gives false"



let rg=[12,4,6]
let rb=rg.some(function(el,index,arr){
return el>11
})
console.log(rb)                             //true

// find()                          // return elemnt which is meet the condition first

let jn=[50,49,53]
let vv=jn.find(function(el,index,arr){
    return el>40
})
console.log(vv)                           // 50


//findindex()
                                             // return index of elemnt which is meet the condition first 

//          0  1  2  3
   let lo=[21,26,28,29]
   let bv=lo.findIndex(function(el,index,arr){
    return el>25
})
console.log(bv)         // 1    


// slice()

        //  0        1        2         3
let city2=["latur","nanded","mumbai","nashik"]
        //   -4       -3     -2         -1
let r=city2.slice(1,2)
console.log(r)       // nanded
let r2=city2.slice(3)
console.log(r2)         // nashik




// reverse

let oi=[12,16,19,10]
let kj=oi.reverse()
console.log(kj)

let city3=["latur","nanded","mumbai","nashik"]
let r1=city3.reverse(1,2)
console.log(r1)



let num2=[33,44,58,65]
let hhg=num2.reverse()
console.log (hhg)             // [65,58,44,33]




// sort()                   sort by alphabeticaly or numeric    

let rh=["blue","yellow","green"]
let nu=rh.sort()
console.log(nu)

//sort method problem
let num=[10,20,30,45,1,2]
let ya=num.sort()
console.log(ya)               //output = //[ 1, 10, 2, 20, 30, 45 ] because it sort by first digit with all number 

//solutiuon for sort on number array

let yb=num.sort(function(a, b){     //predefined structure for number sort use 
    return a-b
})
console.log(yb)                      //[ 1, 2, 10, 20, 30, 45 ]      it gives proper output



            



// concat     (merge two array elemtnt in one)


let mk=["akshay","anand","ritesh"]
let rg1=["nayan","mukesh","sagar"]
let yy=mk.concat(rg1)
console.log(yy)                       // [ 'akshay', 'anand', 'ritesh', 'nayan', 'mukesh', 'sagar' ]


let ppp=delete("akshay")
console.log(mk)


//flat              flat method do single array of multiple set of element



let ol=[["akash","punam","prakash"],["raju","vivek","manali"]]

let gb=ol.flat()

console.log(gb)                    //   [ 'akash', 'punam', 'prakash', 'raju', 'vivek', 'manali' ]


let yh=[[11,10,44],[54,58,66]]
let rf=yh.flat()
console.log(rf)                                               //[ 11, 10, 44, 54, 58, 66 ]







// splice 

// //splice(startingIndex,numberofEleToBeDeleted,rep1,rep1)


//            0        1        2          
let fruita=["banana","apple","mango"]

let fg1=fruita.splice(1)            // delete element from index 1    
console.log(fg1)                    // [ 'apple', 'mango' ]    deleted element

console.log(fruita)           // remaining or modified array  


let fruit4=["banana","apple","mango"]

let rf1=fruit4.splice(0,1);               // remove element from 0 to 1 element but not consider given last index number 
                                        //// remove from banana to 1 element but it not consider last element means only banana


console.log(rf1)                  //retrive removed element      //      [ 'banana' ] 
console.log(fruit4)                  // new remaining array       [ 'apple', 'mango' ]



let fruit=["apple","mango", "banana","orange"]    
let pl=fruit.splice(0,2,"papaya","strawberry")              //remove from 0 to next 2 element and added two new element
console.log(pl)                                 // removed element [ 'apple', 'mango' ]
console.log(fruit  )                      // after adding [ 'papaya', 'strawberry', 'banana', 'orange' ]                  


 
let fruit2=["apple","mango", "banana","orange"]    
let obf=fruit2.splice(1,3)             // remove element from index 1 to next 3 (splice consider the last given range of index also)      

console.log(obf)                     // it return the deleted element      

 console.log(fruit2)            // it returns the new array

        //   0       1         2       3
let fruitn=["apple","mango", "banana","orange"]
let mj=fruit.splice(2,1,"adf")
console.log(mj)                    //[ 'banana' ]
console.log(fruitn )            // [ 'apple', 'mango', 'banana', 'orange' ]





//FILL              fill method fill the given value on given index possition



let opq=[12,15,,55,86,99,85,36,85]
let ro=opq.fill(23,1,5)    // input value , range from - to (not consider last index range)
console.log(ro)  //    [12, 23, 23, 23, 23, 99, 85, 36, 85]



let opk=[12,15,25,55,86,99,85,36,85]
let fg=opk.fill(25,1)    // input 25 , range from 1 possition to not given so it fill till end
console.log(fg)        //    [12, 25, 25, 25, 25, 25, 25, 25, 25]


// Join ()                // join all element in array with given value in join 

let emp= ["akshay","bhalke","b possitive"]
let details=emp.join(" ")            // join with space
console.log(details)               // akshay bhalke b possitive








