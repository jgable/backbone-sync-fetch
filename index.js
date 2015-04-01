var Backbone = require('backbone');
var fetchSync = require('./backbone-sync-fetch');

Backbone._sync = Backbone.sync;
Backbone.sync = fetchSync;

module.exports = Backbone;
