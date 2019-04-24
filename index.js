const vorpal = require('vorpal')();
const _ = require('lodash');
const prettyjson = require('prettyjson');
const { userSchema } = require('./schema/user.js');
const { ticketSchema } = require('./schema/ticket.js');
const { organizationSchema } = require('./schema/organization.js');
const users = require('./data/users.json');
const tickets = require('./data/tickets.json');
const organizations = require('./data/organizations.json');

// Query for organisation
vorpal
	.command('organizations [field] [value]', 'Searches for a value of a field in Organizations')
	.action(function(args, callback){
		let searchField = args.field;
		let searchValue = args.value;

		if(searchField in organizationSchema){
			this.log('Oooh, I found something! Here are your results: ');
			let searchResults = _.filter(organizations,[searchField,searchValue]);
			this.log(prettyjson.render(searchResults));
		} else {
			this.log('No organizations like that I\'m afraid');
		}
		callback();
	});

// Query for users
vorpal
	.command('users [field] [value]', 'searches for a value of a field in "user".')
	.action(function(args,callback){ // Do the search within here.
		let searchField = args.field;
		let searchValue = args.value;

		if(searchField in userSchema){
			this.log('Oooh, I found something! Here are your results: ');
			let searchResults = _.filter(users,[searchField,searchValue]);
			this.log(prettyjson.render(searchResults));
		} else {
			this.log('No users like that I\'m afraid');
		}
		callback();
	});

// Query for tickets
vorpal
	.command('tickets [field] [value]', 'searches for a value of a field in "tickets".')
	.action(function(args,callback){
		let searchField = args.field;
		let searchValue = args.value;

		if(searchField in ticketSchema){
			this.log('Oooh, I found something! Here are your results: ');
			let searchResults = _.filter(tickets,[searchField,searchValue]);
			this.log(prettyjson.render(searchResults));
		} else {
			this.log('No tickets like that I\'m afraid');
		}
		callback();
	});

// Catch non commands inputs.
// vorpal
// 	.catch('[words...]', 'Catches incorrect commands')
// 	.action(function (args, callback) {
// 		this.log(args.words.join(' ') + ' is not a valid command.');
// 		callback();	
// 	});


// Initial display: show this when app is started
const welcomeText = `
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    ZDSEARCH                    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Welcome to ZDSEARCH!
- You can search any fields within organizations, tickets or users.
- enter 'help' at any time to see commands that can be used!
- type 'quit' to exit the application

Usage:
- zdsearch$ <dataset {users, tickets, organizations} > [field] [value]

examples:

users _id 23
organizations details MegaCorp
tickets priority high

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

console.log(welcomeText);

// start the app
vorpal
	.delimiter('zdsearch$')
	.show();