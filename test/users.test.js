const assert = require('assert');

const { USER_MOCK } = require('./mocks.js');
const { findMatches } = require('../utils/search.js');
const { userSchema } = require('../schema/user.js');

describe('Search Users', () => {
    describe('users email louisastephenson@flotonic.com', () => {
        it('Should match an email string', () => {
            assert.equal(findMatches(userSchema, USER_MOCK, 'email', 'louisastephenson@flotonic.com').length,1);
        });
    });
    describe('users email ""', () => {
        it('Should return entities with empty search value', () => {
            assert.equal(findMatches(userSchema, USER_MOCK, 'email', '""').length,1);
        });
    });
    describe('users active true', () => {
        it('Should return match boolean entities', () => {
            assert.equal(findMatches(userSchema, USER_MOCK, 'active', 'true').length,2);
        });
    });
});