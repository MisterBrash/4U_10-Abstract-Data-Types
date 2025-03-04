# 2.3 - Abstract Data Types

###### ICS4U - Mr. Brash 🐿️

## Your Task:

In [the code file](script.js) you will find an example ADT that represents a person - someone with a bank account.

Create another ADT that represents a `bank_account`. The account will have the following _properties_:
- `account_number`, a numeric value representing the account at the bank (whatever number you want)
- `owner`, represents the owner of the account
- `type`, a string representing the type of account. This can be one of the following but you can default it to "Savings":
  - Savings
  - Checking
  - Corporate
  - Loan
  - RRSP
- `valid_account_types`, an array of the above types ["Savings", "Checking", etc...]
- `balance`, a numeric value that is the current balance in the account (start it at 100)
- `transactions`, an array of strings describing each transaction (newest at the end). For example, if a deposit of $4.25 is made, a new entry should be added to `transactions`: "Deposit 4.25 Balance 104.25".

Furthermore, the `bank_account` will have the following functions:
- `deposit(amount)` which will add the given `amount` to the `balance` in the account and return the new balance. A new `transaction` should be recorded (see below)
- `withdraw(amount)` which will _only_ subtract from the balance if the account has enough money. Return the new (or current) balance. A new `transaction` should be recorded (see below)
- `apply_interest()` which will apply 2.5% interest to the account (0.025). Return the new balance. A new `transaction` should be recorded (see below)
- `set_type(account_type)` which will attempt to change the `type` of the account - but *only* if the new given type is in the `valid_account_types`. Only record the transaction if successful (see below).
- `print_transactions(qty)` which prints the last `qty` transactions in the array (or less, if there are less).

<br>**Transaction records:** (savings account):
  ```JS
  bank_account.print_transactions(6);
  // Console output:
  Withdraw $100 Balance $4.25
  Withdraw $50 Insufficient Funds Balance $4.25
  Deposit $10 Balance $14.25
  Interest $0.36 Balance $14.61
  Account type changed to Corporate
  Deposit $40000 Balance $40014.25
  ```

Pay attention to the format of the transactions above.
**Test your own code!**

---

### Things to think about
(you don't have to answer them)

- What if that person wants more than one bank account?
  - Or what if two people share an account?
- What if we need more than one person?
- What if the different account types had different interest rates?
- What if we want the list of transactions and balance to get saved somewhere?


### Helpful Tips
- Money should always be two decimal places, but `5.30` might print as `5.3` and that's ok.
- Adding elements to an array is as easy as `.push()` ([click here to read](https://www.w3schools.com/jsref/jsref_push.asp))
- You don't need the money symbol unless you _really_ want to.
- Ask Mr. Brash for assistance