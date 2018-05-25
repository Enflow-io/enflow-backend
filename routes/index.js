var express = require('express');
var router = express.Router();
const {ContactForm} = require( './../models/index')
const nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/contacts', (req, res)=>{
  console.log(req.body)

	let {email, name, lastName, message} = req.body;
	ContactForm.create({
			email,
            name,
        lastName, message
		})
		.then(item => res.status(201).send(item))
		.catch(error => res.status(400).send(error));


	nodemailer.createTestAccount((err, account) => {
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: 'smtp.yandex.ru',
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: 'konstantin@enflow.io', // generated ethereal user
				pass: 'qwerty1313' // generated ethereal password
			}
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: '"Enflow New Request! 👻" <hi@enflow.io>', // sender address
			to: 'konstantin@enflow.io, olga@enflow.io', // list of receivers
			subject: 'A new request from site ✔', // Subject line
			html: `Request info: <br />
<b>Email:</b> ${email}<br />
<b>Name:</b> ${name} ${lastName}<br />
<b>Message:</b> ${message}<br />
` // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

			// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
			// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	});

});
module.exports = router;
