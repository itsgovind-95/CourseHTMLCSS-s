const bankAccount = {
    accountNumber : 1234567890,
    name : "Bal Govind",
    accountType : "Saving",
    balance : 100000,
    transations : " No transations ",

    deposit : function(amount) {
        if(amount >=0){
            this.balance += amount;
            this.transations = `Deposited ${amount} `;
            console.log(`Deposited in your account Rupees : ${amount}`)
        } else {
            console.log("Invalid amount");
        }
    },

    withdraw : function(amount) {
        if(amount >=0 && amount <= this.balance){
            this.balance -= amount;
            this.transations = `Withdrawl ${amount} `
            console.log(`Withdrawl from your account Rupees : ${amount}`);
        } else {
            console.log("Invalid amount");
        }
    },

    display : function() {
        console.log(`Account Number : ${this.accountNumber}
                    name : ${this.name}
                    Account Type : ${this.accountType}
                    Balance : ${this.balance}
                    Transations : ${this.transations}`
        );
                    
    }
};

bankAccount.display();
bankAccount.withdraw(20000);
bankAccount.display();

// `Account Number : ${this.accountNumber}`
//                     `name : ${this.name}`
//                     `Account Type : ${this.accountType}`
//                     `Balance : ${this.balance}`
//                     `Last Transations : ${this.lastTransations}`



