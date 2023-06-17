class Customer{
    firstName:string;
    lastName:string;

    //use constructor keyword
    constructor(theFirst:string,theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}

//lets create an insatnce
let myCustomer=new Customer("Nirbhay","Bansal");

//myCustomer.firstName="Nirbhay";
//myCustomer.lastName="Bansal";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);