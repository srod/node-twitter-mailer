var twitterMailer = require('../lib/node-twitter-mailer/node-twitter-mailer').TweetMailer;

var config = {
	twitter: {
		user: "username_twitter",
		password: "password_twitter",
		action: "filter",
		track: ['#nodejs']
	},
	email: {
		subject: 'Twitter #nodejs',
		from: 'no-reply@twitter.com',
		to: 'email@gmail.com'
	}
};

new twitterMailer(config);