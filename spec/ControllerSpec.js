describe('TransactionListController', function() {
  beforeEach(angular.mock.module('bankerApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.currentDate', function() {
    it('returns current date', function() {
      var $scope = {};
      var controller = $controller('TransactionListController', { $scope: $scope });
      expect($scope.currentDate()).toEqual(new Date());
    });
  });
});