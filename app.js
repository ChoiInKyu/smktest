var express = require('express');
var app = express();
var db_config = require(__dirname + '/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.use(express.static('public'));			//퍼블릭 폴더에 있는 경로
app.use('/views', express.static(__dirname + "/views"));  //폴더를 지정하는 절대경로

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('ItisMain <br> <a href="list"> 이곳을 눌러 이동</a> ');

    console.log(__dirname);
  
});

//데이터 받을 페이지
app.get('/list', function(req, res) {

    let sql1 = `select * from lvalue;`;
    let sql2 = `select * from lcontent;`;

    
    conn.query(sql1, function(err, rows) {

        if (err)
            console.log('query not excuted' + err);

         res.render('list', { list:rows });
    });

     conn.query(sql2, function(err, rows2) {

        if (err)
            console.log('query not excuted' + err);
        
         res.render('list', { king:rows2 });
    });


    


});



app.listen(7777, () => {
    console.log(7777 + "port opened!!");
});