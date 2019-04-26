const assert = require('assert');

const { ORG_MOCK } = require('./mockData.js');
const { findMatches } = require('../utils/search.js');
const { organizationSchema } = require('../schema/organization.js');

describe('Search Organizations', () => {
	const testData = {
		_id: 122,
		created_at: '2016-01-02T06:07:59 -11:00',
		shared_tickets: true,
	};
	describe('Searching number field: zdsearch$ organizations _id 122', () => {
		it('Should return a single match for an id search', () => {
			assert.equal(findMatches(organizationSchema, ORG_MOCK, '_id', testData._id).length,1);
		});
	});
	describe('Searching dateTime as string: zdsearch$ organizations created_at "2016-01-02T06:07:59 -11:00"', () => {
		it('Should match wrapped dateTime string', () => {
			assert.equal(findMatches(organizationSchema, ORG_MOCK, 'created_at', testData.created_at).length,1);
		});
	});
	describe('Searching boolean, multi entity: zdsearch$ organizations shared_tickets true', () => {
		it('Should be able to return multiple matches', () => {
			assert.equal(findMatches(organizationSchema, ORG_MOCK, 'shared_tickets', testData.shared_tickets).length,2);
		});
	});
});
