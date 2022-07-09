//FOR LOOP

// ex-1

for(let i = 0 ; i < 5 ; i++) console.log("i")



//ex-2

for(let i = 0 ; i < 4 ; i++){   
    console.log("hello") 
}


// FOR loop can write as follow

let marks1=[20,12,25,35,10]
let i=0
for(; i<marks1.length;i=i+1)
{
    console.log(marks1[i])
    
}


//BREAK KYWORD USING FOR LOOP


for(let i = 0 ; i < 10 ; i++){  
    console.log(i)  
    if(i == 4){
        break
    }
  
}



//WJILE LOOP

//ex-1


let j = 0 
while( j <= 5){
    console.log(j) // 0 ,1,2,3,4,5
    j++ // 1----- 6
}

//ex-2
let k=0
while (k<=3){
    console.log(k)
    k++
}


// diffrenence between for and while loop



// for loop use when we havr to run the block finite time or spacific time
// while loop use for run the code till condition not meet.
// example below for diffrenece between for and while loop

// programm 1 (with if else only)
// let random = Math.floor(Math.random()*6)+1        //1 2 3 4 5 6
// console.log(random)
//  let userinput=prompt("guess the number")
 
//  if(random==userinput){
//      console.log("your input is correct")
//  }
//  else{
//      console.log("your guess is wrong")
//  }


// FOR LOOP (finte time)
// let random2=Math.floor(Math.random()*6)+1
// console.log(random2)
// for(let i=0;i<3;i++){
//     let userinput1=prompt("guess the number")

//     if (random2==userinput1){
//         console.log("your guess correct")
//         break
//     }
//     else{
//         console.log('your guess is incorrect')
//     }
// }



// while loop(infinite time till condition match )


// let random3=Math.floor(Math.random()*6)+1

// let userinput2=prompt("guess the number")

// while(random3!=userinput2){
//     userinput2=prompt("guess the number")
//     if(random3==userinput2){
//     console.log('correct guess')
//     break
// }
// else{
//     console.log("ur guess wrong")
// }

// }