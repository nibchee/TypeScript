class Customer1 {
    

    //use constructor keyword
    constructor(private _firstName:string,private _lastName:string){
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

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);