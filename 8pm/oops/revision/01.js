// oops

// object literal

let amol = {
    firstName: "amol",
    lastName: "rao",
    age: 12,
    rollNo: 23,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
amol.display()

let chinmay = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 23,
    rollNo: 34,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
chinmay.display()


// function constructor

// program 2
// let Person = function(firstName,lastName,age,roll){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age 
//     this.roll = roll
//     this.display = function(){
//         console.log(thid.firstName + this.lastName)
//     }
// }

// let amol2  = new Person("amol3","rao3",23,34)
// let chinmay2 = new Person("chinmay3","deshpande",23,55)

// console.log(amol2)
// console.log(chinmay2)

let Person = function (firstName, lastName, age, roll) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.roll = roll
}

let amol2 = new Person("amol3", "rao3", 23, 34)
let chinmay2 = new Person("chinmay3", "deshpande", 23, 55)

Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}

amol2.display()
chinmay2.display()
console.log(amol2)
console.log(chinmay2)

//inheritance 

// object ._proto_ == parent.protype
console.log(Person.prototype === amol2._proto_)


// Es6

class Student {

    constructor(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.roll = rollNo
    }

    display() {
        console.log(this.firstName + this.lastName)
    }

    setLang(lng) {
        this.language = lng
    }

    getLang() {
        console.log(this.language)
    }


}

let amol4 = new Student("amol", "rao", 23, 44)
amol4.display()
amol4.setLang('hindi')
amol4.getLang()
console.log(amol4)

// Object.create

let proto = {

    init(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.roll = rollNo
    },

    display() {
        console.log(this.firstName + this.lastName)
    }

}

// ._proto_
let amol5 = Object.create(proto)
console.log(amol5)
amol5.init("amol1","rao",2,3)
amol5.display()


// Inheritance 

class Stud {

    constructor(firstName,lastName,address){
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class Teacher extends Stud{

    constructor(firstName,lastName,address,salary){
        super(firstName,lastName,address)
        this.salary = salary
    }

    totalSalary(){
        console.log(this.salary)
    }

}

class Professor extends Teacher {
    constructor(firstName,lastName,address,salary,spec){
        super(firstName,lastName,address,salary)
        this.spec = spec
    }

    specA(){
        console.log(this.spec)
    }

}

let aa = new Professor('ch','de','pune',1000,12) 

console.log(aa.spec)
console.log(aa.firstName)
console.log(aa.lastName)
console.log(aa.salary)
console.log(aa.address)


aa.displayName()
aa.specA()
aa.totalSalary()

// Polymorphism

// same method name , different sign , same class - overloadong 
// same signature , diffent class , same name - overriding

//overloading

class Cal {
    static addition(a,b,c){
        if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if(a != undefined && b != undefined){
            console.log(a+b)
        }
        else {
            console.log('incorrect input')
        }
    }
}
Cal.addition(12,34,55)
Cal.addition(23,45)
Cal.addition(2)

//*************************************************************** */
//overriding


class WorldB {

    save(){
        console.log('world bank save method 6%')
    }

    loan(){
        console.log('world bank loan method 7%')
    }

}

class SBI extends WorldB {

    save(){
        console.log('SBI bank save method 5%')
        super.save()
    }

    loan(){
        console.log('SBI bank loan method 8%')
        super.loan()
    }


}

class PNB extends WorldB{

  

}

let pnb = new PNB()
pnb.loan()
pnb.save()

let sbi = new  SBI()
sbi.loan()
sbi.save()


//*********************************************************** */


// Encapsulation 


function Count(){
    let count = 0
    
    return function(){
        count = count + 1
        console.log(count)
    }
}

let a = Count()
a()
a()
a()

class Stud2 {

    constructor(firstName,lastName){
        this._firstName = firstName
        this._lastName = lastName
    }

    getFirstName(){
        console.log(this._firstName)
    }
    getLastName(){
        console.log(this._lastName)
    }

}
let s = new Stud2("chinmay","deshpande")

//-------------------------------


// let Employee = function(fn,ln,salary){

//         this.salary = salary
//         this.firstName = fn
//         this.ln = ln
//         this.bonus = 500
//         this.updateSalary = function(){
//             console.log(this.salary + this.bonus)
//         }
//         this.getTotalSalary= function(){
//             this.updateSalary()
//         }


// }
// let c  = new Employee('c','d',1200) 
// // c.bonus = 10000                                // in this bonus value can be change so for this following solution
// // c.updatetotalSalary = function(){
// //     console.log(this.salary + this.bonus + this.bonus)
// // }
// c.getTotalSalary()



let Employee = function(fn,ln,salary){

    this.salary = salary
    this.firstName = fn
    this.ln = ln
    let bonus = 500                                //if we define bonus as let key word then it is only use in scope
    let updateSalary = function(){                  // same for this function
        console.log(this.salary + bonus)
    }
    this.getTotalSalary= function(){
        updateSalary()
    }


}
let c  = new Employee('c','d',1200) 
c.getTotalSalary()
// console.log(c.bonus)          // unudefined error occure due to scope of bonus
// c.updatetotalSalary()        //// unudefined error occure due to scope of function