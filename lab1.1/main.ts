class Account {

    constructor( public Acc_no: number, public Balance: number){}

    debitAmount(){
        
    }
    creditAmount(){

    }
    getBalance() {

    }
}

interface IAccount{
    Date_of_opening:Date;

    addCustomer();
    removeCustomer();
}

class Saving_Account extends Account implements IAccount {
    constructor(Acc_no, Balance, public  Min_Balance:number ,public  Date_of_opening:Date){
        super(Acc_no, Balance);
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}

class Current_Account extends Account implements IAccount{
    constructor(Acc_no, Balance, public Interest_rate:number, public Date_of_opening: Date){
        super(Acc_no, Balance);
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
    
}