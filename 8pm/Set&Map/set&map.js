//set 

// //set does not stores the duplicate value 



let marks=new Set ([11,11,23,32,23])
console.log(marks)                     //Set(3) { 11, 23, 32 } IT REMOVES THE DUPLICATE VALUE.
console.log(marks[1])       // undefined         it doesnot store the value by index so we cant use like this



// set is an object so it has property and method like following 
// 1) size
let num=new Set ([34,44,54,44])
let count=num.size
console.log(count)             // 3            it gives no of element in set 



//2) add

let num1=new Set ([23,34,43,5])

num1.add(74)
console.log(num1)                 // Set(5) { 23, 34, 43, 5, 74 }              add the element 



//3) delete 

let num3=new Set([23,33,44,56])

num3.delete(33)
console.log(num3)                          //Set(3) { 23, 44, 56 }        delete the element 33 from set


//4) has

// it checks the given element exist in set or not and gives boolean value

let names=new Set(["akshay","vishal","rahul"])
let rf=names.has("akshay")
console.log(rf)                        //true   becuase akshay is exist in set


//5) clear 
// it clear the set and gives empty set


let names1=new Set(["akshay","vishal","rahul"])

names1.clear()
console.log(names1)                    //Set(0) {}   




// for loop to set

let num5=new Set([2,4,5,6])

for(let item of num5){                    

    console.log(item*2)
}                                       // it gives a elemnt *2 values  4,8,10,12

for(let ita of num5){                     // item is predefined keyword

    console.log(ita*2)
}                                       // it gives a elemnt *2 values  4,8,10,12


// // duplicate 


let numbers = [222,33,44,5,5566,77,77,88,]

let setC = new Set(numbers)           // pass numbers array to set by creating setc variable 
console.log(Array.from(setC))         // give an array by removing duplicate value


//if have to use set value as array and its method then-
 
 let numbers2=[23,45,34,22,5]
 let newset=new Set (numbers2)
 let array1=Array.from(newset)
 console.log(array1)                    //[ 23, 45, 34, 22, 5 ]   return the array 

 console.log(array1.length)         //   5           we are used array property also can be use any method of array




// // Map


//map ==> object property and method
let mapA = new Map()	

// mapA.set(key,value)
mapA.set([22,44,58,58],"marks")
console.log(mapA)                          //  Map(1) { [ 22, 44, 58, 58 ] => 'marks' }



//property

// 1) size


console.log(mapA.size )      // 1  because assign  value like ==> Map(1) { [ 22, 44, 58, 58 ] => 'marks' }


//method


//1) get 
mapA.set(true,"isadult")
console.log(mapA.get(true))       // isadult     because it gives the value by key




//2) has 
let abc=mapA.has (true)
console.log(abc)                  // true becuase it search key is include or not



   

//3)delete 
mapA.delete(true)              //deleted second element
console.log(mapA)                // Map(1) { [ 22, 44, 58, 58 ] => 'marks' } 




//4) clear

 mapA.clear()
 console.log(mapA)                      // Map(0) {}      clear all element 





 //  example ===>

let emp = new Map ([                     // we are created emp map with 4 element
    [01,"rollNo"],
    ["o+","bloodGrp"],
    ["java","lang"],
    [4,"exp"]

])

console.log(emp.size)                      // 4   

for (let h of emp.keys()){             // for loop on keys
    console.log(h)                 //01
                                  // o+
}                                 //java                  
                                 // 4

for (let f of emp.values()){            // for loop on values
    console.log(f)                 //rollNo
}                                  // bloodGrp
                                  // lang
                                  //exp


