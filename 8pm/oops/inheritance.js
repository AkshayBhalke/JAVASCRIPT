//  **inheritance**
// Inheritance means accessing the property of parent class in child class
// there are three type of inheritance 
// 1) Single level inheritance
// 2) Multi level inheritance
// 3) multiple Inheritance




//1) Single level inheritance
// it means only one child extend and inherit the property of parent class
// in following example one parent class and one extended child class
//  parent class- Grandfather,  Child Extended class- Father



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





// 2)Multiilevel Inheritance
// an inheritance in which a child class inherits the properties from another child class, which is alredy inherited from another parent class 
// means one extended class can have one parent class and that parent class has one parent class and so on…

// in following example sample is parent class then newSample extend from sample then extrea sample extend from newSample


// program 1

class Sample{                              // created class
    constructor(mName,mNo){
        this.MaterialName=mName
        this.MaterialNo=mNo
    }
    displaysa(){
        console.log(this.MaterialName)
    }
}

class Newsample extends Sample{                //created class with refer to sample class that is parent class
    constructor(mName,mNo,Mprc){             // in constructor we have to define the property which are in parent class and then its own new 
        super(mName,mNo)                       // using super keyword pass the propertys value to parent class
        this.MaterialPrice=Mprc              // new property which mention with this keyword
    }
    displayMprc(){                           // define a method
        console.log(this.MaterialPrice)
    }
}

class Extrasample extends Newsample{            // created class using Newsample class reference
    constructor(mName,mNo,Mprc,mclr){
        super(mName,mNo,Mprc,mclr)
        this.MaterialColor=mclr

    }
    displayclr(){
        console.log(this.MaterialColor)
    }
}

let abs=new Extrasample("abs","20",20000,"red")         //created object using child class but have to pass all value from which class extended
console.log(abs)                     
abs.displayMprc()                                 // can call function which are of parent class as well parents parent class






console.log("**************************************************")

// program 2



let  WorldBank =  class {
    constructor(accName,accNumber,city){
        this.accName = accName
        this.accNumber = accNumber
        this.city = city
    }
    depoist(){
        console.log(' depoist world bank')
    }
    withdrawl(){
        console.log('withdrawl world bank')
    }
}
class SBI extends WorldBank{
    constructor(accName,accNumber,city,IFSC){
        super(accName,accNumber,city)
        this.IFSC = IFSC
    }
    depoist(){
        console.log(' depoist SBI')
        super.depoist()
    }
    withdrawl(){
        console.log('withdrawl SBI')
        super.depoist()
    }
}
class PNB extends WorldBank{
    constructor(accName,accNumber,city,IFSC){
        super(accName,accNumber,city)
        this.IFSC = IFSC
    }
    depoist(){
        console.log(' depoist PNB')
        super.depoist()
    }
    withdrawl(){
        console.log('withdrawl PNB')
        super.depoist()
    }
}

let mahal = new SBI("chinmay",123,"Nagpur",0001)
let mahalpnb = new PNB("sarika",123,"Pune",9000)

console.log(mahal)
console.log(mahalpnb)


mahal.depoist()
mahalpnb.depoist()

mahal.withdrawl()
mahalpnb.withdrawl()


console.log(mahal.IFSC)
console.log(mahal.accName)
console.log(mahal.accNumber)

console.log(mahalpnb.IFSC)
console.log(mahalpnb.accName)
console.log(mahalpnb.accNumber)



console.log("***********************************************************")


//or one parent class have more then one child class like in example 3
// programm 3

let Plant= class {                             // created plant class
    constructor(pNmae,Pno){
        this.PlantName=pNmae
        this.PlantNo=Pno
    }
    PlantCode(){
        console.log(`this is dplant code ${this.PlantNo}`)
    }
}

class DP5 extends Plant{               // created new class from plant class
    constructor(pNmae,Pno,loc){      // parameter in constructor key word starting two are of parent class and then child class
    super(pNmae,Pno)                   // pass through super keyword to parent class
    this.location=loc
    }
    Location(){
        console.log(`this is location of dp5 ${this.location}`)
    }
}

class Dp6 extends Plant{                   //created new class from plant class
    constructor(pNmae,Pno,city){
        super(pNmae,Pno)
        this.city=city
        super.PlantCode()                    // this method inherit from parent class plant
    }
    City(){
        console.log(`this is city ${this.city}`)
        
    }
    
}

let dpb=new DP5("dp5","dreamplast5","baramati")
let dpc=new Dp6("dp06","dreamplast7","Chakan")

console.log(dpb)                //DP5 { PlantName: 'dp5', PlantNo: 'dreamplast5', location: 'baramati' }
console.log(dpc)                //  Dp6 { PlantName: 'dp6', PlantNo: 'dreamplast7', city: 'Chakan' }

dpb.Location()                  // cllling method   // this is location of dp5 baramati
dpc.City()                    // cllling method  //this is city Chakan
dpc.PlantCode()                    // this method from parent class  //this is dplant code dreamplast7


console.log(dpb.PlantName)        // this method from plant class    //dp5

