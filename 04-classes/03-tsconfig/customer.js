"use strict";
class Customer1 {
    //use constructor keyword
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
//lets create an insatnce
let myCustomer1 = new Customer1("Nirbhay", "Bansal");
//myCustomer.firstName="Nirbhay";
//myCustomer.lastName="Bansal";
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
