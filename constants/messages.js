const prettyjson = require('prettyjson');
const _ = require('lodash');

//schemas
const { userSchema } = require('../schema/user.js');
const { ticketSchema } = require('../schema/ticket.js');
const { organizationSchema } = require('../schema/organization.js');

// //data
// const users = require('./data/users.json');
// const tickets = require('./data/tickets.json');
// const organizations = require('./data/organizations.json');

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