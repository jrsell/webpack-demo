var server = null;

// Starts the api server before tests run
before(function() {
    server = require('../src/server/server').server;
});

// Closes the server after tests run
after(function(done) {
    server && server.close(done);
});


