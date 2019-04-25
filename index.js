const vorpal = require('vorpal')();
const prettyjson = require('prettyjson');

//utils
const { findMatches } = require('./utils/search.js');
//messages
const { allFields, welcomeText } = require('./constants/messages.js');
//schemas
const { userSchema, userFields } = require('./schema/user.js');
const { ticketSchema, ticketFields } = require('./schema/ticket.js');
const { organizationSchema, organizationFields } = require('./schema/organization.js');

//data
const users = require('./data/users.json');
const tickets = require('./data/tickets.json');
const organizations = require('./data/organizations.json');

// command for searching organizations
vorpal
	.command('organizations <field> [value]', 'Searches for a value of a field in Organizations')
	.autocomplete(organizationFields)
	.action(function(args, callback){
		let searchField = args.field;
		let searchValue = args.value;
		if(searchField in organizationSchema){
			let searchResults = findMatches(organizationSchema, organizations, searchField, searchValue);
			this.log(`Searching in "${searchField}"... `);
			if(searchResults.length !== 0){
				this.log('Results found: ');
				this.log(prettyjson.render(searchResults));
			} else {
				this.log(`No organizations found with field "${searchField}" of value "${searchValue}"`);
			}
		} else {
			this.log(`No field "${searchField}" found.`);
		}
		callback();
	});

// Command for searching users
vorpal
	.command('users <field> [value]', 'searches for a value of a field in "user".')
	.autocomplete(userFields)
	.action(function(args,callback){ 
		let searchField = args.field;
		let searchValue = args.value;
		if(searchField in userSchema){
			this.log(`Searching in "${searchField}"... `);
			let searchResults = findMatches(userSchema, users, searchField, searchValue);
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

// Command for searching tickets
vorpal
	.command('tickets <field> [value]', 'searches for a value of a field in "tickets".')
	.autocomplete(ticketFields)
	.action(function(args,callback){
		let searchField = args.field;
		let searchValue = args.value;
		if(searchField in ticketSchema){
			this.log(`Searching in "${searchField}"... `);
			let searchResults = findMatches(ticketSchema, tickets, searchField, searchValue);
			if(searchResults.length !== 0){
				this.log('Results found: ');
				this.log(prettyjson.render(searchResults));
			} else {
				this.log(`No tickets found with field "${searchField}" of value "${searchValue}"`);
			}
		} else {
			this.log(`No field "${searchField}" found.`);
		}
		callback();
	});

vorpal
	.command('fields', 'shows all searchable fields.')
	.action(function(args, callback){
		this.log(allFields);
		callback();
	});

console.log(welcomeText);

// start the app
vorpal
	.delimiter('zdsearch$')
	.show();