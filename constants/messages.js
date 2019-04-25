const prettyjson = require('prettyjson');
const _ = require('lodash');

//schemas
const { userSchema } = require('../schema/user.js');
const { ticketSchema } = require('../schema/ticket.js');
const { organizationSchema } = require('../schema/organization.js');

exports.welcomeText = `
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    ZDSEARCH                    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Welcome to ZDSEARCH!
- You can search any fields within users, organizations or tickets:

    zdsearch$ <dataset {users, tickets, organizations} > <field> <value>

- tab to autocomplete is available for commands and fields.
- enter 'help' at any time to see commands that can be used.
- enter 'fields' to list all searchable fields.
- type 'quit' or 'exit' to exit the application.

examples:

> users _id 23
> organizations details megacorp
> tickets priority high

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

exports.userFields = `
~~~~~~~~~~~ User Fields ~~~~~~~~~~~~~

${prettyjson.render(_.keys(userSchema))}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

exports.ticketFields = `
~~~~~~~~~~~ Ticket Fields ~~~~~~~~~~~~~

${prettyjson.render(_.keys(ticketSchema))}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;

exports.organizationFields = `
~~~~~~~~~~~ Organization Fields ~~~~~~~~~~~~~

${prettyjson.render(_.keys(organizationSchema))}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;