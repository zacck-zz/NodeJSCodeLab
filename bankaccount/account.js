var account =  {
  userName: null,
  balance: 3,
  lastTrans: null
};


//withdraw
function withdraw(account, amount) {
  if(account.balance >= amount) {
    account.balance  = account.balance - amount;
    account.lastTrans =  {
      type: 'withdraw',
      amount: amount
    };
    console.log('Withdrawal of', amount, 'Successful');
  } else {
    console.log('Balance of', account.balance, 'Cannot withdraw ', amount);
  }
};

//deposit
function deposit(account, amount) {
  if(amount > 1) {
    account.balance = account.balance + amount;
    account.lastTrans =  {
      type: 'deposit',
      amount: amount
    };
    console.log('deposit of', amount, 'done');
  } else {
    console.log('deposit of', amount , 'not possible');
  }
};

//getBalance
function getBalance(account) {
  console.log('current balance is', account.balance);
};

deposit(account, 80);
getBalance(account);

withdraw(account, 90);
getBalance(account);

withdraw(account, 10);
getBalance(account);
