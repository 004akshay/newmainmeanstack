var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
// console.log(accounts.length);

// 2.print all accounts whose account type =savings ?

// accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))

// 3.print balanceof accno=1000
// let bal=accounts.find(data=>data.acno==1000).balance
// console.log(bal);

// 4.print all gpay trasnsaction details
//  accounts.map(data=>data.transactions).flat().filter(trans=>trans.method=="g-pay").forEach(t=>console.log(t))


// 5.credit transaction of 1002

// accounts.map(data=>data.transactions).flat().filter(trans=>trans.to=1002).forEach(trans=>console.log(trans))

// 6.highest balance account details

// var high=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0];
// console.log(high);

// 7.print transactions history of 1002


var debitTrans=accounts.find(data=>data.acno==1002).transactions

var creditTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to=1002)

var transHistory={"debitTransaction":debitTrans,"credittrans":creditTrans}
console.log(transHistory);


