class person{
    constructor(firstname,lastname,city,marks){
        this.firstname=firstname
        this.lastname=lastname
        this.city=city
        this.marks=marks
    }
    calpercentage(){
        return(this.marks.reduce(function(acc,el){
            return acc+el
        },0)/500)*100
    }
    static greeting(){

    }

}

let marks=[[100,100,100,100,90],[70,70,70,70,70],[11,12,15,16],[16,17,18,18,50],[52,62,12,15,55]]
let student=[]
for (let i=0;i<5;i++){
    let obj=new person(`akshay-${i+1}`,`bhalke-${i+1}`,`latur-${i+1}`,marks[i])
    student.push(obj)
}

console.log(student)

let percentArray=[]
for(let i=0;i<student.length;i++){
    percentArray.push(student[i].calpercentage())
}

console.log(percentArray)

console.log(percentArray.reduce(function(acc,el){
    return acc+el

},0)/student.length)


// print name of every student 

student.forEach(function(el){
    console.log(el.firstname)
})

// lastName of every student 

student.forEach(function(el){
    console.log(el.lastname)

})


//percentage of every student


student.forEach(function(el){
    console.log(el.firstname+" "+el.calpercentage())

})
 
 ///highest marks

 console.log(percentArray)

 let h=percentArray
 let min=h[0]
 let max=h[0]

 for (let i=0;i<h.length;i++){
     if(h[i]<min){
         min=h[i]

       }
       else if (h[i]>max){
           max=h[i]
       }
 }

 console.log(min)
console.log(max)


let minperstudname=student.find(function(el){
    return el.calpercentage()==min

}).firstname
console.log(minperstudname)

let maxperstudname=student.find(function(el){
    return el.calpercentage()==max

}).firstname
console.log(maxperstudname)


// add lang =hindi in evety student

student.forEach(function(el){
    el.lang="hindi"

})

console.log(student)