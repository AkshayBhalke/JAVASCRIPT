

class mobile {                     //created object mobile  
    color= undefined  
    price=undefined
    weight= undefined
}

let vivo= new mobile()

vivo.color="blue"        //assign value outside the class
vivo.price=50000
vivo.weight= "147 gm"
console.log(vivo)



// constructor are used to set the property value at the time of object creation

class bike{
    constructor (cl,avg,spd){
    this.color=cl
    this.average=avg 
    this.speed=spd
}
}

let hero = new bike ("red",50,120) 
console.log(hero)
 
 let honda=new bike ("red", "",70)
 console.log(honda)



// by using set method create the class



class laptop {
    setRam(rm){
        this.ram=rm
    }
    setmemory(mem){
        this.memory_capacity=mem
    }
    setcolor(col){
        this.colorOfLaptop=col
    }
}


let dell=new laptop()

dell.setRam("4gb")
dell.setmemory("5 gb")
dell.setcolor("red")
console.log(dell)












