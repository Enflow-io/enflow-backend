var express = require('express');
var router = express.Router();
const {ContactForm} = require( './../models/index')

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

});
module.exports = router;
