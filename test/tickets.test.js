const assert = require('assert');

const { TICKET_MOCK } = require('./mocks.js');
const { findMatches } = require('../utils/search.js');
const { ticketSchema } = require('../schema/ticket.js');

describe("Search tickets", () => {
    describe('tickets tags Minnesota', () => {
        it('Should return multiple entities that share the tag value', () => {
            assert.equal(findMatches(ticketSchema, TICKET_MOCK, 'tags', 'Minnesota').length,2);
        });
    });
    describe('tickets tags "new york"', () => {
        it('Should match multi-word values regardless of letter case', () => {
            assert.equal(findMatches(ticketSchema, TICKET_MOCK, 'tags', 'new york').length, 1);
        });
    });
});
