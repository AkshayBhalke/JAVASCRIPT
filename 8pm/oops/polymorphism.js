// overloading



// following example  is not work in java script because by this way it takes last written method


class Calculator { //created class 

    add(a, b) { // method add created
        console.log(a + b) // passing 2 signature
    }
    add(a, b, c) {
        console.log(a + b + c) // passing 3 signature
    }
    add(a, b, c, d) {
        console.log(a + b + c + d)
    }
}

let sum = new Calculator()

sum.add(1, 2, 3) // Nan   because when we call the function then it consider letest or recent method for same mathod same class and different signiture
sum.add(2, 3) // Nan
sum.add(1, 23, 4, 5) //33     



//solution for above progeram is ==>  


class Operation {
    total(j, k, l, m) {
        if (j !== undefined && k !== undefined && l !== undefined && m !== undefined) {
            console.log(j + k + l + m)
        } else if (j !== undefined && k !== undefined && l !== undefined) {
            console.log(j + k + l)
        } else if (j !== undefined && k !== undefined) {
            console.log(j + k)

        }
    }
}
let a = new Operation
a.total(4, 5) // 9
a.total(45, 4) //49


//********************************************************************************************** */


// overriding


// overriding ==> different class , same method , same signature


class WorldBankA {

    depoist(greet) {
        console.log(' welcome to ' + greet)
    }

}

class SBIB extends WorldBankA {

    depoist(greet) {
        console.log(' welcome to ' + greet + "SBI")
    }


}

let vb = new SBIB()

vb.depoist('worldBank ny') //welcome to worldBank nySBI
//same method avilable in parent class but it override and run only its own recent