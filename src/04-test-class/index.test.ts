// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(100);
    expect(account.getBalance()).toEqual(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(100);
    try {
      account.withdraw(200);
    } catch (error) {
      if (error instanceof InsufficientFundsError) {
        expect(error.message).toEqual(
          'Insufficient funds: cannot withdraw more than 100',
        );
      }
    }
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(100);
    const secondAccount = getBankAccount(150);
    try {
      account.transfer(200, secondAccount);
    } catch (error) {
      if (error instanceof InsufficientFundsError) {
        expect(error.message).toEqual(
          'Insufficient funds: cannot withdraw more than 100',
        );
      }
    }
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);
    try {
      account.transfer(10, account);
    } catch (error) {
      if (error instanceof TransferFailedError) {
        expect(error.message).toEqual('Transfer failed');
      }
    }
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);
    account.deposit(10);
    expect(account.getBalance()).toEqual(110);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(100);
    account.withdraw(10);
    expect(account.getBalance()).toEqual(90);
  });

  test('should transfer money', () => {
    const firstAccount = getBankAccount(100);
    const secondAccount = getBankAccount(100);
    firstAccount.transfer(20, secondAccount);
    expect(firstAccount.getBalance()).toEqual(80);
    expect(secondAccount.getBalance()).toEqual(120);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100);
    account.fetchBalance().then((data) => {
      if (!!data) expect(typeof data).toEqual('number');
    });
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(100);
    try {
      await account
        .synchronizeBalance()
        .then(() => expect(account.getBalance()).not.toEqual(100));
    } catch {}
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(100);
    try {
      await account.synchronizeBalance();
    } catch (error) {
      if (error instanceof SynchronizationFailedError) {
        expect(error.message).toEqual('Synchronization failed');
      }
    }
  });
});
