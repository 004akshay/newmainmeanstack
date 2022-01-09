class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }

        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },

    }






    session = {}
    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false
    }
    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.accounts[acno].password
            if (password == pwd)
                console.log("accsss granted");
            this.session["user"] = acno

        }
        else {
            console.log("invalid account number");
        }

    }
    getBalance(acno) {
        return this.accounts[acno].balance

    }
    balanceEnquiry() {
        if ("user" in this.session) {
            let logedUser = this.session["user"]
            console.log(this.getBalance);
        }
        else {
            console.log("invalid session");
        }
    }
    LogginRequied(){
        return "user" in this.session?true:false
    }
    loggedUser(){
        if(this.LogginRequied){
            return this.session["user"]

        }

    }
    fundTransfer(to_acno, amount) {
        if ("user " in this.session) {
            if (this.validateAccountNumber(to_acno)) {
                let loggedUser = this.session["user"]
                if (this.validateAccountNumber(to_acno)) {
                    let curBalance = this.getBalance(loggedUser)
                    if (amount > curBalance) {
                        console.log("insufficient balance");
                    }
                    else {
                        console.log("transaction completed");

                    }

                }

            
            else {
                console.log("invalid account number");
            }
        }    
           
        else {
                console.log("invalid to account number,doesnot exist");
            }

        }
        else {
            console.log("invalid session u must login");
        }
    }
     getDebitTransaction(){
         let user=this.loggedUser()
         this.accounts[user].transactions.debitTransactions.forEach(t=>console.log(t))

     }

     getCreditTransactio(){
        let user=this.loggedUser()
        this.accounts[user].transactions.creditTransactions.forEach(t=>console.log(t))

     }
     getDebitTransaction(){
         let 

     }
         

     }



var bank = new Bank()
bank.authenticate(1000,"userone")

bank.balanceEnquiry()
bank.fundTransfer(1002,10000)




