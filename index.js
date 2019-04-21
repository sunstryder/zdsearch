const vorpal = require('vorpal')();
const _ = require('lodash');
const { usersSchema, ticketsSchema, organizationsSchema } = require('./schema/schema.js');

// Query for organisation
vorpal
	.command('organizations', 'Lists searchable fields in "organization".')
	.action(function(args, callback){
		this.log('\nYou can search these fields in "Organizations"\n\n', _.keys(organizationsSchema));
		callback();
	});

// Query for users
vorpal
	.command('users', 'Lists searchable fields in "user".')
	.action(function(args,callback){
		this.log('\nYou can search these fields in "Users"\n\n', _.keys(usersSchema));
		callback();
	});

// Query for tickets
vorpal
	.command('tickets', 'Lists searchable fields in "tickets".')
	.action(function(args,callback){
		this.log('\nYou can search these fields in "Tickets"\n\n', _.keys(ticketsSchema));
		callback();
	});


// Initial display: show this when app is started
const displayText = `
  
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

console.log(displayText);

// start the app
vorpal
	.delimiter('zdsearch$')
	.show();