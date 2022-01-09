var users = {
    1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone" ,transactions:{
        crTrans:{},dbTrans:{}
    }},
    1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",transactions:{
        crTrans:{},dbTrans:{}
    } },
    1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree",transactions:{
        crTrans:{},dbTrans:{}
    } },
    1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour",transactions:{
        crTrans:{},dbTrans:{}
    } },
}

// console.log("1003" in users);
// console.log(users[1003].personName);

// function authenticate(ac_num, password) {
//     if (ac_num in users) {
//         let pwd = users[ac_num].password
//         if (pwd == password) {
//             return 1

//         }
//         else {
//             return -1
//         }

//     }
//     else {
//         return 0;
//     }
// console.log(authenticate(1007, "userone"));


function balanceEnquiry(acno) {

}

function authenticate(ac_num, password) {
    // chk acno exist
    if (validateAccountNumber(ac_num)) {
        let pwd = users[ac_num].password
        if (pwd == password) {
            return 1
        }
        else {
            return -1
        }
    }
    else {
        // console.log("invalid account number"); 0
        return 0;
    }

}

function validateAccountNumber(acno) {
    return acno in users ? true : false
}
function fundTransfer(from_acno, to_acno, amount) {
    if (validateAccountNumber(from_acno) && validateAccountNumber(to_acno)){
            let curBal=users[from_acno].balance
            if(amount>curBal){
                console.log("insufficient balance");
            }
            else{
                users[from_acno].balance-=amount
                let frm_acno_balance=balanceEnquiry(from_acno)
                console.log(`you acno ${from_acno} account has been debited with ${amount} avl bal ${frm_acno_balance} `);
                users[to_acno].balance+=amount
                let to_acno_balance=balanceEnquiry(to_acno)
                console.log(`you acno ${to_acno} account has been credited with ${amount} avl bal ${to_acno_balance} `);
                let crTrans={from:from_acno,amount:amount}
                let dbTrans={to:to_acno,amount:amount}
                users[from_acno].transactions.debitTransacions.push(dbTrans)
                users[to_acno].transactions.creditTransacions.push(crTrans)

            }
    }
    else{
        console.log("invalid account number");
    }
}



function balanceEnquiry(acno){
    if(validateAccountNumber(acno)){
        return users[acno].balance
    }
    else{
        console.log("invalid account number");
    }

}

fundTransfer(1000,1002,4000);