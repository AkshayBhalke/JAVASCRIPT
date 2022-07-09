let akshay = Object.create({})
console.log(akshay)     //{}



let person = {                                 //defined class
    year(){
        console.log(2022 -1989)
    },
    init(firstName , lastName , age ,roll){
        this.firstName = firstName ,
        this.lastName = lastName,
        this.age = age,
        this.roll = roll
    }

}
let akshay1 = Object.create(person)       
akshay1.init("akshay","bhalke",24,03)
console.log(akshay1)
akshay1.year()
