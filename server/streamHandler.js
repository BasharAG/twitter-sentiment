//Require Dependencies
var Twit = require('twit'),
    config = require('./config');

//Create Twitter Instance
var T = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });


var twitterStream = T.stream('statuses/filter', {language: 'en', track: 'nike'});
  

module.exports = twitterStream;

