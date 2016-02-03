var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
 
var IFTTT_EVENT_NAME = "MyEvent001";  // イベント名
var IFTTT_SECURITY_KEY = "                 ";  // さきほどのIFTTTのセキュリティキー
 
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.get('/', function(request, response) {
    response.send('Hello IFTTT Maker!!!');
});
 
// IFTTTへ送信
app.get('/output', function(request, response) {
    response.send('output');
 
    var _request = require('request');
 
    var options = {
        uri: 'http://maker.ifttt.com/trigger/' + IFTTT_EVENT_NAME + '/with/key/' + IFTTT_SECURITY_KEY,
        form: {
            value1:1,
            value2:2,
            value3:3
        },
        json: true
    };
 
    console.log('---------- [output]');
    console.log(options);
 
    _request.post(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            console.log(body);
        } else {
            console.log('error: '+ response.statusCode);
        }
    });
});
 
// Do Noteボタンで受け取る
app.post('/input', function(req, res){
    res.set('Content-Type', 'application/json');
    res.send("{'request':'OK'}");
    console.log('---------- [input]');
    console.log(req.body);
});
 
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});