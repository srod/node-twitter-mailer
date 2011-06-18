var twitter = require("twitter-node").TwitterNode,
	mailer = require('node-mailer');

function TweetMailer(config){
	this.config = config;
	this.twitter = new twitter(config.twitter);
	this.bindListen();
}

TweetMailer.prototype.bindListen = function(){
	var self = this;

	this.twitter.addListener('error', function(error){
		console.log(error.message);
	}).addListener('tweet', function(tweet){
		self.processTweet(tweet);
	}).stream();
};

TweetMailer.prototype.processTweet = function(tweet){
	var self = this;

	return new mailer.Mail({
		from: self.config.email.from,
		to: self.config.email.to,
		subject: self.config.email.subject,
		body: '@' + tweet.user.screen_name + ' : ' + tweet.text,
		callback: function(err, data){
			if(err){
				console.log(err);
			}
		}
	});
};

exports.TweetMailer = TweetMailer;