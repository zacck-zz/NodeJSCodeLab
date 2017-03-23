/*Account vars
  userName: null,
  balance: 3,
  lastTrans: null
*/

//a set of accounts
var currentAccounts = [];

//add a func to create accounts
function createAccount(username, balance) {
  //use the data to make an account
  var account = {
    userName: username,
    balance
  }
  //lets push the account into the sets of accounts
  currentAccounts.push(account);
  return account;
}

//function to get user account
function getAccount(username) {
  var UserAccount = undefined;
  //find matching account
  //replace forEach with for
  for(var i = 0; i < currentAccounts.length; i++) {
    if(currentAccounts[i].userName === username) {
      UserAccount = currentAccounts[i];
    }
  };

  return UserAccount;
}

//withdraw
function withdraw(account, amount) {
  if(account.balance >= amount) {
    account.balance  -= amount;
    account.lastTrans =  {
      type: 'withdraw',
      amount: amount
    };
    console.log('Withdrawal of', amount, 'from', account.userName, 'Successful');
  } else {
    console.log('Balance of', account.balance, 'from', account.userName, 'Cannot withdraw ', amount);
  }
};

//deposit
function deposit(account, amount) {
  //use type to only accept number
  if(amount > 1 && typeof(amount) === 'number') {
    account.balance += amount;
    account.lastTrans =  {
      type: 'deposit',
      amount: amount
    };
    console.log('deposit of', amount, 'to', account.userName, 'done');
  } else {
    console.log('deposit of', amount , 'from', account.userName, 'not possible must be a positive number');
  }
};

//getBalance
function getBalance(account) {
  console.log('current balance is', account.balance);
};

//createBalanceGetter


createAccount('zacck', 200);
var zAcc = getAccount('zacck');
deposit(zAcc, '67');
getBalance(zAcc);
withdraw(zAcc, 90);
getBalance(zAcc);

createAccount('Minion', 30);
var mAcc = getAccount('Minion');
withdraw(mAcc, 10);
getBalance(mAcc);
console.log('****** STAGE 3 ******');
