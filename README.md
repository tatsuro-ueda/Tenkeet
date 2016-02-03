# ifttt-maker-channel

## 2016-02-03

This code has written by Shogo Tanaka in [1ft-seabass](http://www.1ft-seabass.jp)

You can read his article in below page:

http://www.1ft-seabass.jp/memo/2015/07/01/ifttt-maker-channel-heroku-nodejs/

Heroku button has added by Tatsuro Ueda in http://weed.nagoya

## Node.js on Heroku

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:weed/ifttt-maker-channel-p160203.git # or clone your own fork
$ cd ifttt-maker-channel-p160203
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)