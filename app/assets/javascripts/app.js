angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, Modal) {
  // No need for testing data anymore
  $scope.tasks = [];

  // Create and load the Modal
  Modal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push(task);
    $scope.taskModal.hide();
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  }
});

