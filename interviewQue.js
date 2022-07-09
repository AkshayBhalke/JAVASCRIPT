

// 1) return only number from array contains string

let a=["fou",3,4,5,]

let rr=a.filter(function(el){
    return Number(el)||el==0
})
console.log(rr)


// 2) return a wovels from a string


function countV(word){
    word = word.toLowerCase()
    let count = 0

    for(let i = 0 ; i < word.length ; i++){
        if(word[i] == "a" ||  word[i] == "e" ||  word[i] == "i" || word[i] == "o" || word[i] == "e"){
            count = count + 1
        }

    }

    return count 
}

let numbersov=countV("chinmay")

console.log(numbersov)

// 3) diffrenece between implicite and explicite in cypress?

// 4) why use promise ?

// 5) oops concept?
// 6) what is inheritance ?
//7) closer concept 
// 8) auth 1 ? auth 2 ? basic auth? 



// example-
let number1=[20,23,24]
let newnum=[]

let nn=number1.forEach(function(el){
    newnum.push(el+2)

})

console.log(newnum)