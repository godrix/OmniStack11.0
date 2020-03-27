const knex = require('knex');

const { development, test } = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? test : development;

const connection = knex(config);

module.exports = connection;
