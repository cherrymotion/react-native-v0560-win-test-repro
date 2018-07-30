jest.unmock('lodash');
const lodash = require('lodash');

// Override the random to always return the number halfway between upper and lower bounds
lodash.random = jest.fn((lower, upper) =>
    Math.floor((upper - lower) / 2 + lower)
);

module.exports = lodash;
