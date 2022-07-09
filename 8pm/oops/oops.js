// DIFFRENET WAY TO CREATE FUNCTION

//  1)   object leteral

//it is the refular way of function writen
// ex-  

// let material={
//     materialName: "abs",
//     materialNo: 12,
//     materialPrice: 25
// }

// console.log(material)             //{ materialName: 'abs', materialNo: 12, materialPrice: 25 }

// //for retrive
// console.log(material.materialName)    // abs
// //for update
// material.materialNo=26
// console.log(material.materialNo)   // 26
// //for adding new element
// material.grade="757f"
// console.log(material)           // added material grade in material object  

// //delete element
// delete(material.materialNo)         //// removed materialno
// console.log(material)            


// let akki={
//     firstName:"akshay",
//     lastName: "bhalke",
//     age: 20,
//     birthyr:function(){
//         console.log(2022-this.age)
    
//     }

// }

// console.log(akki)
// akki.birthyr()


//2) FUNCTION CONSTRUCTOR

// here we difened a template of object by fuinction

let Employee= function(eName,eNo,eCity,eSkills){                    
    this.employeeName=eName
    this.employeeNo=eNo
    this.employeeCity=eCity
    this.eSkill=eSkills
    this.noOfSkill=function(){
        console.log(this.eSkill.length)
    }
}

let advik=new Employee("advik",10,"Latur",["java","python"])         //created object with help of templete

let pratiksha=new Employee ("pratiksha",20,'pune',["html","python"])

console.log(advik)                            // print object but in no of skiils given  // noOfSkill: [Function (anonymous)]

advik.noOfSkill()          // if we print like this then this will give  // 2 




console.log(advik instanceof Employee)       //true

//if we create object with using a template then 
// while print the object we get noOfSkill: [Function (anonymous)] every time with every created object
 // so we have solution of inheritence
// ex-


 let Emp2 = function(eName,eNo,eCity,eSkills){
                         
    this.employeeName1=eName
    this.employeeNo1=eNo
    this.employeeCity1=eCity
    this.eSkill1=eSkills
  
    }
    Emp2.prototype.noOfSkill1=function(){                //declare outside the function block write Emp2.prototype removed this
        console.log(this.eSkill1.length)
 }
  
 let rahul=new Emp2("rahul",122,"pune",["html","oracle"])
 console.log(rahul)
 rahul.noOfSkill1()
 console.log(rahul.__proto__==Emp2.prototype)

console.log(rahul.hasOwnProperty('eSkill1'))   // true becasue eskill1 is property of rahul becasue rahul is an object and property mention in template
console.log(Emp2.hasOwnProperty('noOfSkill1'))    //false 
console.log(typeof(Emp2))     // function
console.log(typeof(rahul))   // object 

/*______________________________________________________________________________________________________________*/
console.log("---------------------------------------------")
 

// 3 way of creation a class

//1) created class using constructor

class Laptop{
    constructor(col,price,ram){
        this.color=col
        this.price=price
        this.ram=ram
    }   1
    displayMamory(){                           // <==========
        console.log(this.ram)
    }
}
let dell=new Laptop ("black",20000,"4 gb")
console.log(dell)                              // Laptop { color: 'black', price: 20000, ram: '4 gb' }
dell.displayMamory()                         // 4 gb

// 2) setting the value outside the class

class Plastic{
    name=undefined
    grade=undefined
    price=undefined
}

let abs=new Plastic()
console.log(abs)             //here print object with undefined values like==> Plastic { name: undefined, grade: undefined, price: undefined }

//for adding values
abs.name="abs"
abs.grade="757f"
abs.price=2000

console.log(abs)       // Plastic { name: 'abs', grade: '757f', price: 2000 }

// 3)  using set method

class Person{
    setName(nm){
        this.Name=nm
    }
    setAge(ag){
        this.Age=ag
    }
}

let sushil=new Person()            //created object using person class
sushil.setName("sushil")                 //assign value to object 
sushil.setAge(20)

console.log(sushil)              // Person { Name: 'sushil', Age: 20 }
 

// Es6 

// Encapsulation 

// Inheritance 

// Polymorphism 
// Abstraction // Interface -- typescript





console.log("******************************************************")


class Bank{

    constructor(accName,accNo,city,bal){
        this.accName=accName
        this.accNo=accNo
        this.city=city
        this.bal=bal
        this.transaction=[]
    }
    deposite(amount){
        this.bal=this.bal+amount
        this.transaction.push(amount)
        return this.bal
    }
    withdrawl(amount){
        if(this.bal>amount){
        this.bal=this.bal-amount
        this.transaction.push(-amount)
        return this.bal
        
    }
    else{
        console.log(`your balamce is ${this.bal}`)
    }
    }
    lastFiveTransaction(){
        console.log(this.transaction.slice(-5))
    }
}

let Akshay=new Bank("akshay bhalke",123,"latur",50000)

Akshay.withdrawl(4100)
Akshay.deposite(20000)
Akshay.deposite(10500)
Akshay.withdrawl(7000)
Akshay.withdrawl(4100)
Akshay.deposite(20000)

console.log(Akshay)                    //bank{ accName:'akshay bhalke',accNo: 123,city:'latur',bal:50000,transaction:[]}

 Akshay.lastFiveTransaction()            //[ 20000, 10500, -7000, -4100, 20000 ]

 console.log(Akshay)                       //bank{ accName:'akshay bhalke',accNo: 123,city:'latur',bal:85300,transaction:[-4100,20000,10500,-7000,-4100,20000]}

/*______________________________________________________________________________________________________________*/

//**********         inheritance         ***********************///

//program 1 )


class Grandfather {                                   // here  created a class
    constructor(fn,ln){
    this.firstName=fn
    this.lastName=ln
    }
    display(){
        console.log(this.firstName+" "+ this.lastName)
    }
}

class Father extends Grandfather{                  // here  extend the class from Grandfather(parent class)
                                     // means all the propertys automaticaly inherit from parent class ie= firstname,lastname
    root(){
        console.log('sample')
    }
}


let shivkumar =new Father("shiv","bhalke")          // here created object using child class but two property have to give
                                                   // bcz of inherit from parent class
console.log(shivkumar)                            //Father { firstName: 'shiv', lastName: 'bhalke' }
shivkumar.display()                             // we can call method that are defined in parent class also
shivkumar.root()                                  // sample
 

let kishan = new Grandfather("kishan","bhalke")         //created object using parent class  
console.log(kishan)                             // Grandfather { firstName: 'kishan', lastName: 'bhalke' }
kishan.display()                              // kishan bhalke     it will run 
// kishan.root()                       // this will not run because parent class cant inherit method or prop. from child class




