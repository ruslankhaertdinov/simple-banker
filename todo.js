angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  })
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
