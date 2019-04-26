const Joi = require('@hapi/joi');
const _ = require('lodash');

const joiOrganizationSchema = Joi.object().keys({
	_id: Joi.number(),
	url: Joi.string(),
	external_id: Joi.string(),
	name: Joi.string(),
	domain_names: Joi.array(),
	created_at: Joi.string(),
	details: Joi.string(),
	shared_tickets: Joi.boolean(),
	tags: Joi.array(),
});

const organizationSchema = Joi.describe(joiOrganizationSchema).children;
const organizationFields = _.keys(organizationSchema);

module.exports = {
	organizationFields,
	organizationSchema
};