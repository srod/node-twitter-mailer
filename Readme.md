
# Node-twitter-mailer
      
  A simple module to receive tweets by email.

  You can watch hastag / people / keywords.

  See server.js in examples/

## Installation

    npm install node-twitter-mailer

## Quick Start

	var twitterMailer = require('node-twitter-mailer').TweetMailer;

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

## Warning

	Be careful when watching popular hashtag, you will be spammed !

	Also check you spam folder.