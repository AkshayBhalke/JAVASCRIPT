//object does not save vale by index 
   // example of object-     

let studinfo={
    firstname: "Akshay",
     lastname: "bhalke",
   mobno:8888318895}

console.log(studinfo)
 
//retrive value 

let studinfo1={
    firstname: "Akshay",
   lastname: "bhalke",
   mobno:8888318895
   }
   console.log(studinfo1.mobno)      //8888318895   -- // retriving value by dot notation
  console.log(studinfo1['lastname'])  ////bhalke   -- // retriving value by bracket notation
          
            
//update value

let record={
   firstname:"Advik",
   lastname:"biradar",
   age:10
}
record.firstname="adi"             // updated firstname by dot notation
console.log(record)               // { firstname: 'adi', lastname: 'biradar', age: 10 }  

record['lastname']="bhalke"       //updated lastname by bracket notation
console.log(record)               //{ firstname: 'adi', lastname: 'bhalke', age: 10 }

//add value


let emp={
   name:"rahul",
   lastname:"gade",
   mobno:123456
}

emp.empcode=4578              // add empcode by dot notation
console.log(emp)           // { name: 'rahul', lastname: 'gade', mobno: 123456, empcode: 4578 }
emp['village']="latur"         // add village by bracket notation
console.log(emp)               //{ name: 'rahul', lastname: 'gade', mobno: 123456, empcode: 4578 ,village: 'latur'}

//delete value 

let laptop={
   company:"dell",
   ram:"2 gb",
   processesor:"intel",
   memory:"500 gb"    
}
console.log(laptop)                 //   //{ company: 'dell', ram: '2 gb', processesor: 'intel', memory: '500 gb' }

delete laptop.processesor         // delete processesor by dot notation
console.log(laptop)          //   { company: 'dell', ram: '2 gb', memory: '500 gb' }


delete laptop['memory']        // delete memory by bracket notation 
console.log(laptop)            // { company: 'dell', ram: '2 gb' }










            
            
