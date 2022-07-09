class mobile{
    constructor(name,color,price){

        this.mobileName=name
        this.mobileColor=color
        this.mobilePrice=price
     
    }

}

mobile.prototype.displayMobileData=function(){
    console.log(`hi mobile name is ${this.mobileName} and color is${this.mobileColor}`)
}

let vivo=new mobile("x70pro","blue",50000)

console.log(vivo)
vivo.displayMobileData()

console.log(vivo.__proto__== mobile.prototype)



















