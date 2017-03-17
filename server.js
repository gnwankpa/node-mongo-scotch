'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // req.body
const cors = require('cors'); // 8080
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');


const mongodbUri ='mongodb://gpackets:123kid@ds131900.mlab.com:31900/node-mongo';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); //true
app.use(express.static(__dirname + '/'));


app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));


const hostname = 'localhost';
const port = 3001;


const server = app.listen(port, hostname, () => {
	mongoose.connect(mongooseUri, dbOptions, (err) => {
		if (err) {
			console.log(err);
			}
			console.log('server is running at http://${hostname}:${port}');

	});
});