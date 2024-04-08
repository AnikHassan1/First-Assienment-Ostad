class BankAccount {

  constructor(accountNumber, ownerName, balance) {
 
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    console.log("Initial Account Information :");
    console.log(" Account Number :" +' '+accountNumber);
    console.log(" Owner Name :"+' '+ownerName);
    console.log(" Account Balance :"+' $'+balance);
    console.log(' ');
  }
  deposit(amout) {
    let sum=this.balance + amout;
    console.log("Deposit And Withdraw :");
    console.log(" Deposited "+' $'+amout+" Into Account "+''+this.accountNumber);
    this.balance=sum;
  };
  
  withdraw(amout) {
    if ((this.balance == 0 ||  this.balance < amout )) {
      console.log("Insufficient funds");
    } else {
        let sub=this.balance - amout;
        console.log(" withdraw "+' $'+amout+" Into Account "+''+this.accountNumber);
    console.log(' ');

        this.balance=sub;
    }
   
  }
  getBalance(){
    return this.balance;
  }
  displayAccountInfo(){
    console.log("Update Account Information :")
    console.log(" Account Number : "+this.accountNumber);
    console.log(" Owner Name : "+this.ownerName);
    console.log(" Balance :  "+"$"+this.balance);
  }
}
const BanksAccount = new BankAccount(1001, "anik", 1000);
BanksAccount.deposit(200);
BanksAccount.withdraw(100);
// console.log(BanksAccount.getBalance());
BanksAccount.displayAccountInfo();
