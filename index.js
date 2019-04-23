const vorpal = require('vorpal')();
const _ = require('lodash');
const { usersSchema, ticketsSchema, organizationsSchema } = require('./schema/schema.js');
const users = require('./data/users.json');
const tickets = require('./data/tickets.json');
const organizations = require('./data/organizations.json');

// Query for organisation
vorpal
	.command('organizations [field] [value]', 'Searches for a value of a field in Organizations')
	.action(function(args, callback){
		let searchField = args.field;
		let searchValue = args.value;

		if(searchField in organizationsSchema){
			this.log('Oooh, I found something! Here are your results: ');
			let searchResults = _.filter(organizations,[searchField,searchValue]);
			this.log(searchResults);
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

		if(searchField in usersSchema){
			this.log('Oooh, I found something! Here are your results: ');
			let searchResults = _.filter(users,[searchField,searchValue]);
			this.log(searchResults);
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

		if(searchField in ticketsSchema){
			this.log('Oooh, I found something! Here are your results: ');
			let searchResults = _.filter(tickets,[searchField,searchValue]);
			this.log(searchResults);
		} else {
			this.log('No tickets like that I\'m afraid');
		}
		callback();
	});

// Initial display: show this when app is started
const welcomeText = `
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    ZDSEARCH                    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Welcome to ZDSEARCH!
You can search any fields within organizations, tickets or users.

Usage:
- zdsearch$ <user, organization, ticket>
You can press tab to autocomplete the command

enter 'help' at any time to see commands that can be used!
`;

console.log(welcomeText);

// start the app
vorpal
	.delimiter('zdsearch$')
	.show();