//object literal

//we create the object directly using object literal

let abs={
    materialName:"abs",
    materialgrade:"757",
    materialPrice:"1600",
    materialData(){
        console.log(`${this.materialName}+ ${this.materialgrade}`)
    }
}


// abs.materialData()


//function constructor

function Material(mtname,mtgd,mtpr){
    this.materialName=mtname
    this.materialGrade=mtgd
    this.materialPrice=mtpr
    this.materialData1=function(){
        console.log(`${this.materialName}+ ${this.materialgrade}`)
    }
}

let abs1=new Material("abs","758",1500)
console.log(abs1)
abs1.materialData1()

//***************************** */


let employee = function(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}


let akshay = new employee("akshay","bhalke")

console.log(akshay)   // if we print this then the display method is print like anonymous to avoide this we add method outside the class like following



employee.prototype.displayName = function(){    //we added the method display name in class and comment upper mentioned method
    console.log(this.firstName + this.lastName)
}

// __proto__ property are same as ith parent prototype  here parent is employee



console.log(akshay._proto_ === employee.prototype)

employee.prototype.language = "Hindi"
akshay.displayName()

console.log(akshay)

console.log(akshay.language)




let number = [1,3,2,5,5]
console.log(names)

mumner.length
number.push(44)
console.log(number._proto_ === Array.prototype)