//2016-02-03
//This code has written by Shogo Tanaka in 1ft-seabass(http://www.1ft-seabass.jp)
//http://www.1ft-seabass.jp/memo/2015/07/01/ifttt-maker-channel-heroku-nodejs/
//Heroku button has added by Tatsuro Ueda in http://weed.nagoya

var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
var forecast = require("weather-yahoo-jp").forecast;

var IFTTT_EVENT_NAME = "sent_message";  // イベント名
var IFTTT_SECURITY_KEY = "xxxxxxxxxxxxxxxxxxxxxx";  // IFTTTのセキュリティキー
 
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.get('/', function(request, response) {
    response.send('Hello IFTTT Maker!!!');
});
 
// POSTリクエストを受け取ったら、IFTTTへ送信する
app.post('/', function(req, res){
    res.set('Content-Type', 'application/json');
    res.send("{'request':'OK'}");
    console.log('---------- [input]');
    console.log(req.body);

    forecast
      .get(req.body.location)
      .then(function(forecast){
        console.log(forecast);
        var _request = require('request');
     
        var options = {
            uri: 'https://maker.ifttt.com/trigger/' + IFTTT_EVENT_NAME + '/with/key/' + IFTTT_SECURITY_KEY,
            form: {
                value1:req.body.location,
                value2:forecast.today.text,
                value3:req.body.message + ' - Tenkeet'
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
      })
      .catch(function(err){
        console.error(err.stack || err);
      })
    });
});
 
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});