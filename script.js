var box = document.getElementById('box');
var table = document.getElementById('table');

function check() {
	if (box.checked==true) {
		col('-1');
	} else {
		col('-2');
	}
}

function col(text) {
	table.rows[0].columns[0].innerHTML = text;
	table.rows[1].columns[0].innerHTML = text;
}