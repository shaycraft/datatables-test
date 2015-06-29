$(document).ready(function() {
	

	//$('#tblTest').DataTable(dtOptions);

	$('button').click(function() {
		alert('aaah!');
	});
});

var app = angular.module('dttest', []);

var dtdata = [
	['a','b','c'],
	['1','2','3']
	]

var dtOptions = {
		data : dtdata,
		columns: [
			{ title: 'var1' },
			{title: 'var2' },
			{title: 'var3' },
			{
				title: 'blah',
				defaultContent: '<button>click me</button>' 
			}
		]
	}

var MainCtrl = function($scope) {
	$scope.testvar = 'blah';

}

app.controller('MainCtrl', ['$scope', MainCtrl]);

app.directive('testtable', function() {
    
  return {
    restrict: "AE",    

    link: function(scope, elem, attrs) {

      $(elem).DataTable(dtOptions);
    }
  };
});