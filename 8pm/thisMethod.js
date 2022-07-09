// // programm 1
let material={
    materailName:"abs",
    materialNo:123,
    materialGrade:'757f',
    materialDetails:function(){
        console.log(this.materailName+this.materialNo,this.materialGrade)
    }
}

material.materialDetails()
console.log(material.materialGrade)

let materialdata=material.materialDetails   // if we store the existing method in new variable then it store function expression
materialdata()
// problem is that we can only call that methiod on material object because this keyword is for only material    



//bind ()


// by using BIND() method we can assign this value of perticulr method 

// ex- 

let Laptop1={
    name:"dell",
    ram:"2gb",
}
let Laptop2={
    name:"hp",
    ram:"4gb",
}



let laptopDetails = function(){
    console.log(this.name+this.ram)
}


let kk=laptopDetails.bind(Laptop1)
kk()                              // output ==== > dell2gb
console.log(kk)                    //if we print kk then its output is function expression like [Function: bound laptopDetails]



//call()


//by using call() method we are assign the this value to perticular defined method

let bike1={
    model:"karizma",
    Bcompany:"hero"
}

let bike2={
    model:"shine",
    Bcompany:"honda"
}

let displayBikeDetails=function(){
    console.log(this.model+this.Bcompany)     //we assign this value as bike1 using call method  karizmahero
}



displayBikeDetails.call(bike1)                   // karizmahero 
displayBikeDetails.call(bike2)                    //shinehonda






//apply 



let mobile1={
    mCompany:"vivo",
    mPrice:50000
}

let mobile2={
    mCompany:"redmi",
    mPrice:20000
}

let mobileDetails=function(string){                       //defining functionn outside of both object but we can use this function like following
    console.log(`${string}${this.mCompany} ${this.mPrice}`)      
}



mobileDetails.apply(mobile1,["mobile is "])       //assign this value as mobile1 by using apply keyword          //vivo50000
