angular.module('bankerApp', [])
  .controller('TransactionListController', function() {
    var transactionList = this;
    transactionList.transactions = [
      { text: 'Salary', amount: 1000, checked: false },
      { text: 'taxi', amount: 50, checked: false }
    ];

    transactionList.addTransaction = function() {
      transactionList.transactions.push({
        text: transactionList.transactionText,
        amount: transactionList.transactionAmount
      });
      transactionList.transactionText = '';
      transactionList.transactionAmount = '';
      document.getElementById('transaction_text').focus();
    };

    transactionList.archive = function() {
      var oldTransactions = transactionList.transactions;
      transactionList.transactions = [];
      angular.forEach(oldTransactions, function(transaction) {
        if (!transaction.checked) transactionList.transactions.push(transaction);
      });
    };

    transactionList.balance = function() {
      var sum = 0;
      angular.forEach(transactionList.transactions, function(transaction) {
        sum += parseFloat(transaction.amount);
      });
      return sum;
    };

  });
