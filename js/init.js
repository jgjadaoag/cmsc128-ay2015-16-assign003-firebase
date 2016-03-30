'use strict';
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

let app = angular.module("recipeDesu", ["firebase"]);

app.controller("recipeController", ["$scope", "$firebaseArray", ($scope, $firebaseArray) => {
	let ref = new Firebase("https://flickering-fire-7415.firebaseio.com/"); 

	$scope.recipes = $firebaseArray(ref);

	$scope.addRecipe = () => {
		$scope.recipes.$add({
			name: $scope.recipeName,
			classification: $scope.recipeClassification,
			text: $scope.recipeText
		});
	};
}]);
