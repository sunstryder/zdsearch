const { assert } = require('chai');

const { findMatches } = require('../utils/search.js');
const { USER_MOCK } = require('./mockData.js');
const { userSchema } = require('../schema/user.js');

describe('Search input situations: ', () => {
	const sampleUser = {
		'_id': 67,
		'url': 'http://initech.zendesk.com/api/v2/users/67.json',
		'external_id': '01dd136a-bf3b-4340-94ee-8ecbea6fd65f',
		'name': 'Benjamin Stephenson',
		'alias': 'Miss Louisa',
		'created_at': '2016-04-20T12:26:44 -10:00',
		'active': true,
		'verified': true,
		'shared': false,
		'locale': 'zh-CN',
		'timezone': 'Oman',
		'last_login_at': '2016-04-06T12:17:21 -10:00',
		'email': 'louisastephenson@flotonic.com',
		'phone': '9914-712-033',
		'signature': 'Don\'t Worry Be Happy!',
		'organization_id': 122,
		'tags': [
			'Fairhaven',
			'Kraemer',
			'Mayfair',
			'Saranap'
		],
		'suspended': true,
		'role': 'agent'
	};

	describe('Searching case matching string', () => {
		it('Should return exact matches', () => {
			const matches = findMatches(userSchema, USER_MOCK, 'timezone', 'Oman');
			const firstMatch = matches[0];
			assert.equal(firstMatch.timezone,sampleUser.timezone);
		});
	});
	describe('Searching case insensitive string', () => {
		it('Should return case insensitive matches.', () => {
			const matches = findMatches(userSchema, USER_MOCK, 'alias', 'miss louisa');
			const firstMatch = matches[0];
			assert.equal(firstMatch.alias, sampleUser.alias);
		});
	});
	describe('Searching multi-word field', () => {
		it('Should match space separated strings', () => {
			const matches = findMatches(userSchema, USER_MOCK, 'signature', `Don't Worry Be Happy!`);
			const firstMatch = matches[0];
			assert.equal(firstMatch.signature, sampleUser.signature);
		});
	});
	describe('Searching boolean', () => {
		it('Should match boolean values', () => {
			const matches = findMatches(userSchema, USER_MOCK, 'active', true);
			const firstMatch = matches[0];
			assert.equal(firstMatch.active, sampleUser.active);
		});
	});
	describe('Searching number', () => {
		it('Should match number values', () => {
			const matches = findMatches(userSchema, USER_MOCK, '_id', 67);
			const firstMatch = matches[0];
			assert.equal(firstMatch._id, sampleUser._id);
		});
	});
	describe('Searching case matching array field', () => {
		it('Should return an exact match', () => {
			const matches = findMatches(userSchema, USER_MOCK, 'tags', 'Mayfair');
			const firstMatch = matches[0];
			assert.deepEqual(firstMatch.tags, sampleUser.tags);
		});
	});
	describe('Searching case insensitive array field', () => {
		it('Should return case insensitive match', () => {
			const matches = findMatches(userSchema, USER_MOCK, 'tags', 'kraemEr');
			const firstMatch = matches[0];
			assert.deepEqual(firstMatch.tags, sampleUser.tags);
		});
	});
});