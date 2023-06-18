class Customer1 {
    private _firstName:string;
    private _lastName:string;


    //use constructor keyword
    constructor(theFirst:string,theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;
    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName=value;
    }

    public get lastName():string{
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName=value;
    }
}

//lets create an insatnce
let myCustomer1=new Customer1("Nirbhay","Bansal");

//myCustomer.firstName="Nirbhay";
//myCustomer.lastName="Bansal";

console.log(myCustomer1.firstName)
;
console.log(myCustomer1.lastName);