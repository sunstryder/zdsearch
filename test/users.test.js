const assert = require('assert');

const { USER_MOCK } = require('./mockData.js');
const { findMatches } = require('../utils/search.js');
const { userSchema } = require('../schema/user.js');

describe('Search Users', () => {
	const testData = {
		email: 'louisastephenson@flotonic.com',
        email_empty: undefined,
        tags: 'glenVille',
	};
    
	describe('Searching for an email string: zdsearch$ users email louisastephenson@flotonic.com', () => {
		it('Should match an email string', () => {
			assert.equal(findMatches(userSchema, USER_MOCK, 'email', testData.email).length, 1);
		});
    });
    describe('Searching for a tag with unexpected search case: zdsearch$ users tags glenVille', () => {
		it('Should return an entity if one tag matches', () => {
			assert.equal(findMatches(userSchema, USER_MOCK, 'tags', testData.tags).length, 1);
		});
	});
	describe('Searching with an empty argument on a field: zdsearch$ users email ""', () => {
		it('Should return entities with empty search value', () => {
			assert.equal(findMatches(userSchema, USER_MOCK, 'email', testData.email_empty).length, 1);
		});
	});
});