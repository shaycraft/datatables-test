$(document).ready(function() {
	var dtOptions = {
		data : null,
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

	$('#tblTest').DataTable(dtOptions);

	$('button').click(function() {
		alert('aaah!');
	});
});