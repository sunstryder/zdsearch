const Joi = require('@hapi/joi');

const joiUserSchema = Joi.object().keys({
	_id: Joi.number(),
	url: Joi.string(),
	external_id: Joi.string(),
	name: Joi.string(),
	alias: Joi.string(),
	created_at: Joi.string(),
	active: Joi.boolean(),
	verified: Joi.boolean(),
	shared: Joi.boolean(),
	locale: Joi.string(),
	timezone: Joi.string(),
	last_login_at: Joi.string(),
	email: Joi.string(),
	phone: Joi.string(),
	signature: Joi.string(),
	organization_id: Joi.number(),
	tags: Joi.array(),
	suspended: Joi.boolean(),
	role: Joi.string()
});

exports.userSchema = Joi.describe(joiUserSchema).children;