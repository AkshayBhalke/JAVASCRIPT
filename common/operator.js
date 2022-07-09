// comparision operator 
// <, >, <=, >=,!==,===,==,!=



console.log(3<2)   //false
console.log(3==3) // true becuase both are numarical value and also same.
console.log(3==`3`) // truw because due to two symbol it canot check strictly whether it is string or number so it is true 
console.log(3===3)  // true because due to 3 symbol it check strictly and due to both numarical value same it becomes true
console.log(3!==3)  // false becuase ! symbol is indicates "not" so 3 is equal to 3 but due to ! symbol it is false 
console.log(3!==`3`)    // true because it check strictly and this is not equal so ! symbol indicates number 3 "is not equal to" string `3`
console.log(4>2)  // true
console.log(2>=2)   // true



// * logical operators *

// !!AND &&
   
             // TRUE && TRUE = TRUE
             // TRUE && FALSE = FALSE
             // FALSE && TRUE = FALSE
             //FALSE && FALSE = FALSE

// !! OR ||
            // TRUE || TRUE = TRUE
            // TRUE || FALSE = TRUE
            // FALSE || TRUE = TRUE
            // FALSE || FALSE= FALSE

//NOT !
           // FALSE - TRUE
           // TRUE - FALSE


console.log(3<1 && 2>1)   // FALSE && TRUE = TRUE
console.log(3 !==`3` && true)   // TRUE && TRUE= TRUE
console.log(!true)    // NOT TRUE =FALSE
console.log(2 * 3 >= 6 || false)   //  TRUE ||  FALSE =  TRUE



