var mysql = require('mysql');

module.exports = function(id, sign, callback) {

	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'SaintJohn',
		password: '26892681147',
		database:'documentmaster'
	});

	connection.connect();	
	//查询
	var changeUserSign = 'UPDATE user SET sign = "'+sign+'" WHERE id = '+id;
	connection.query(changeUserSign, function(err) {
		connection.close;
		callback();
	});
}
