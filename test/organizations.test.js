const assert = require('assert');

const { ORG_MOCK } = require('./mocks.js');
const { findMatches } = require('../utils/search.js');
const { organizationSchema } = require('../schema/organization.js');

describe("Search organizations", () => {
    describe('organizations _id 122', () => {
        it('Should return a single match for an id search', () => {
            assert.equal(findMatches(organizationSchema, ORG_MOCK, '_id', '122').length,1);
        });
    });
    describe('organizations created_at "2016-01-02T06:07:59 -11:00"', () => {
        it('Should match wrapped dateTime string', () => {
            assert.equal(findMatches(organizationSchema, ORG_MOCK, 'tags', '2016-01-02T06:07:59 -11:00').length,1);
        });
    });
});
