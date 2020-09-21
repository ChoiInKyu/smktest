var mysql = require('mysql');
var db_info = {
	host : 'localhost',
	user : 'root',
	password : 'kmb0427',
	database : 'lexus_db',
	multipleStatements : true
}


module.exports = {
	init: function () {
		return mysql.createConnection(db_info);
	},
	connect: function(conn) {
		conn.connect(function(err) {
			if(err)
				console.error('mysql connection error : ' + err);
			else console.log('mysql is connected successfully!!');
		});
	}
}