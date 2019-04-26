const Joi = require('@hapi/joi');
const _ = require('lodash');

const joiTicketSchema = Joi.object().keys({
	id: Joi.number(),
	url: Joi.string(),
	external_id: Joi.string(),
	created_at: Joi.string(),
	type: Joi.string(),
	subject: Joi.string(),
	description: Joi.string(),
	priority: Joi.string(),   
	status: Joi.string(),
	submitter_id: Joi.number(),
	assignee_id: Joi.number(),
	organization_id: Joi.number(),
	tags: Joi.array(),
	has_incidents: Joi.boolean(),
	due_at: Joi.string(),
	via: Joi.string()
});

const ticketSchema = Joi.describe(joiTicketSchema).children;
const ticketFields = _.keys(ticketSchema);

module.exports = {
	ticketFields,
	ticketSchema
};