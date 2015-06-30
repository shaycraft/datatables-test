$(document).ready(function() {
	

	//$('#tblTest').DataTable(dtOptions);

	$('button').click(function() {
		//alert('aaah!');
		var thisRow = $(this).parents('tr');
		console.log(angular.element(this).scope().dt.row(thisRow).data());
		console.log($(this).parents('tr'));
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



var MainCtrl = function($scope, $q) {
	$scope.testvar = 'blah';

	$scope.getData = function() {
		var deferred = $q.defer();

		deferred.resolve(dtOptions);

		return deferred.promise;
	}

}

app.controller('MainCtrl', ['$scope','$q', MainCtrl]);

app.directive('testtable', function() {
    
  return {
    restrict: "AE",    

    link: function(scope, elem, attrs) {
    	scope.getData().then(function(x) {
    		scope.dt = $(elem).DataTable(x);
    	});
      //$(elem).DataTable(dtOptions);
    }
  };
});