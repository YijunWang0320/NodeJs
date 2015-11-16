var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'XXXX@gmail.com',
			pass: 'xxxx'
		}
	});

	var mailOption = {
		from: 'WebSite <WebSite@noreply.com>',
		to: 'xxxx',
		subject: 'You have a new mail.',
		text: 'You got a mail from Name: ' + req.body.name + ', Email: ' + req.body.email + ',  Message: ' + req.body.message,
		html: '<p>You got a mail from</p><ul><li> Name: ' + req.body.name + '</li><li> Email: ' + req.body.email + '</li><li>  Message: ' + req.body.message + '</li></ul>'
	}

	transporter.sendMail(mailOption, function(error, info) {
		if (error) {
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message sent' + info.response);
			res.redirect('/');
		}
	});

});

module.exports = router;