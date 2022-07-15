//overloading  ==> same method name, same class, bu diff signature

class calculation {

    multiply (a,b,c){
        if (a!= undefined && b!=undefined && c!=undefined){
            console.log(a*b*c)
        }
    
    else if(a!= undefined && b!= undefined ){
        console.log(a*b)
    }
    else{
        console.log("unable to multiply of single digit")
    }

    }
}

let aa=new calculation
aa.multiply(2,5)
aa.multiply(2)


// overriding

//same method, same signature, diff class name is overriding

class WorldBank {
    save(x){
        console.log(`saving interest  ${10*x}`)
    }

    loan(y){
        console.log(`loan interest  ${5*y}`)
    }

}

class SBI extends WorldBank {
    
    save(x){
        console.log(`saving interest  ${7*x}`)
      
    }
    loan(y){
        console.log(`loan interest  ${6*y}`)
   }

}

class PNB extends WorldBank {

}

let a = new WorldBank()
a.save(2)
a.loan(3)

let b = new SBI()
b.save(3)
b.loan(3)


let c = new PNB()
c.save(3)
c.loan(3)

