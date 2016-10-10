// show a little message when we update our schema for the babel-relay
console.log("giving babel-relay-plugin the current schema");

// `babel-relay-plugin` returns a function for creating plugin instances
var getBabelRelayPlugin = require('babel-relay-plugin');

// get schema data
var schema = require(__dirname + '/schema.json');

// create a plugin instance
module.exports = getBabelRelayPlugin(schema.data);

