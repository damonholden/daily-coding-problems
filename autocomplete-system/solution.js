'use strict';

const autoComplete = (queryString, dictionary) => dictionary.filter((string) => string.includes(queryString));

module.exports = autoComplete;
