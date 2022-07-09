


// rest

ex-1

function add(...val3){

    let bbb=val3.reduce(function(acc,el,index,arr){                 
           
        return acc+el
    },0)
    return bbb
    }
    let sum=add(12,15,36)
    
    console.log(sum)                 // 63
    
    
ex-2

    
    function add(...value) {	
        let abc=value.reduce(function(acc,el,index,arr){
        return acc+el
        })
        return abc
        }
    let total=add(25,12,14,52,55)	
    console.log(total)	             //158
    
    
    
    
    
ex-3
    
    function op(...num){
    let rfg=num.reduce(function(acc,el){
        return acc+el
    },0)
    return rfg
    }
    let bhg=op(12,65,95,12,57,58)
    console.log(bhg)                   //299
    

ex-4
    
    function guru(...val1){
        let thf=val1.reduce(function(acc,el){
            return acc+el
        },0)
       return thf
    }
    let no=guru(23,25)
    console.log(no)               //48
    

    // spread


let mark=[12,15,68,99,30,39]


    function additionfive(a,b,c,d,e){
        console.log(a+b+c+d+e)
    }

    additionfive(...mark)            //224    (addition of five element in mark array because run as like mentioned in function)
