angular.module('bankerApp', ['xeditable'])
  .controller('TransactionListController', function($scope) {
    var transactionList = this;
    transactionList.transactions = [
      { text: 'Salary', amount: 1000, datetime: new Date() },
      { text: 'taxi', amount: 50, datetime: new Date() }
    ];

    transactionList.addTransaction = function() {
      transactionList.transactions.push({
        text: transactionList.transactionText,
        amount: transactionList.transactionAmount,
        datetime: transactionList.transactionDate
      });
      transactionList.transactionText = '';
      transactionList.transactionAmount = '';
      transactionList.transactionDate = new Date();
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

    //function isNumber(n) {
    //  return !isNaN(parseFloat(n)) && isFinite(n);
    //}

    $scope.Date = new Date();
  });
