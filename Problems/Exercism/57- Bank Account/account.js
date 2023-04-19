



/**
  #Instructions
  Simulate a bank account supporting opening/closing, withdrawals, and deposits of money. Watch out for concurrent transactions!

  A bank account can be accessed in multiple ways. Clients can make deposits and withdrawals using the internet, mobile phones, etc. 
  Shops can charge against the account.

  Create an account that can be accessed from multiple threads/processes (terminology depends on your programming language).

  It should be possible to close an account; operations against a closed account must fail.

  #Instructions
  Run the test file, and fix each of the errors in turn. When you get the first test to pass, go to the first pending or skipped test, and make that pass as well. 
  When all of the tests are passing, feel free to submit.

  Remember that passing code is just the first step. The goal is to work towards a solution that is as readable and expressive as you can make it.
  
  19-April-2023
*/


export class BankAccount {
  constructor() {
    this._balance = null;
  }
  open() {
    if (this._balance !== null) { throw new ValueError; }
    this._balance = 0;
  }
  close() {
    if (this._balance === null) { throw new ValueError; }
    this._balance = null;
  }
  deposit(amount) {
    if (this._balance === null || amount < 0) { throw new ValueError; }
    this._balance += amount;
  }
  withdraw(amount) {
    if (this._balance === null || amount < 0 || this._balance < amount) { throw new ValueError; }
    this._balance -= amount;
  }
  get balance() {
    return this._balance ?? (() => { throw new ValueError; })();
  }
}
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
