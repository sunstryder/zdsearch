const { assert } = require('chai');

const { TICKET_MOCK } = require('./mockData.js');
const { findMatches } = require('../utils/search.js');
const { ticketSchema } = require('../schema/ticket.js');

describe('Search Tickets', () => {
	const testData = {
		type: 'problem',
		tags_multi: 'nEw YoRk',
		description: 'Velit Lorem laboris',
	};
	describe('Searching for multiple entities with the same value: zdsearch$ tickets type problem', () => {
		it('Should return multiple entities that share the field value', () => {
			const matches = findMatches(ticketSchema, TICKET_MOCK, 'type', testData.type);
			assert.equal(matches.length, 2);
		});
	});
	describe('Searching on a multi-world array field: zdsearch$ tickets tags "nEw YoRk"', () => {
		it('Should match multi-word values regardless of letter case', () => {
			const matches = findMatches(ticketSchema, TICKET_MOCK, 'tags', testData.tags_multi);
			assert.equal(matches.length, 1);
		});
	});
	describe('Searching for a multi word string: zdsearch$ tickets description "Velit Lorem laboris"', () => {
		it('Should not partially match strings', () => {
			const matches = findMatches(ticketSchema, TICKET_MOCK, 'tags', testData.description);
			assert.equal(matches.length, 0);
		});
	});
});
