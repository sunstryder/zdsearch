const vorpal = require('vorpal')();
const _ = require('lodash');
const prettyjson = require('prettyjson');

//utils
const { arrayToLowerCase } = require('./utils/helpers.js');

//schemas
const { userSchema } = require('./schema/user.js');
const { ticketSchema } = require('./schema/ticket.js');
const { organizationSchema } = require('./schema/organization.js');

//data
const users = require('./data/users.json');
const tickets = require('./data/tickets.json');
const organizations = require('./data/organizations.json');

// Query for organisation
vorpal
	.command('organizations [field] [value]', 'Searches for a value of a field in Organizations')
	.action(function(args, callback){
		let searchField = String(args.field).toLowerCase();
		let searchValue = String(args.value).toLowerCase();

		if(searchField in organizationSchema){
			let searchResults;
			this.log(`Searching in "${searchField}"... `);
			if (searchField === 'tags' || searchField === 'domain_names'){
				searchResults = _.filter(organizations, function(obj){
					return _.includes(arrayToLowerCase(obj[searchField]),searchValue);
				});
			} else {
				searchResults = _.filter(organizations,[searchField,searchValue]);
			}

			if(searchResults.length !== 0){
				this.log('Results found: ');
				this.log(prettyjson.render(searchResults));
			} else {
				this.log(`No users found with field "${searchField}" of value "${searchValue}"`);
			}
		} else {
			this.log(`No field "${searchField}" found.`);
		}
		callback();
	});

// Query for users
vorpal
	.command('users [field] [value]', 'searches for a value of a field in "user".')
	.action(function(args,callback){ // Do the search within here.
		let searchField = args.field;
		let searchValue = args.value;
		// This part is repeated across all the datasets, split it out.
		if(searchField in userSchema){
			this.log(`Searching in "${searchField}"... `);
			let searchResults = _.filter(users,function(obj){
				// allows for case insensitive searching
				return String(obj[searchField]).toLowerCase() === String(searchValue).toLowerCase();
			}); 
			if(searchResults.length !== 0){
				this.log('Results found: ');
				this.log(prettyjson.render(searchResults));
			} else {
				this.log(`No users found with field "${searchField}" of value "${searchValue}"`);
			}
		} else {
			this.log(`No field "${searchField}" found. type 'users -help' to get a list of fields you can search.`);
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