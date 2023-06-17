var Customer = /** @class */ (function () {
    //use constructor keyword
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//lets create an insatnce
var myCustomer = new Customer("Nirbhay", "Bansal");
//myCustomer.firstName="Nirbhay";
//myCustomer.lastName="Bansal";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
