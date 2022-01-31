const assert = require('chai').assert;
const axios = require('axios').default;
const config = require('../src/server/serverConfig');
const testUtils = require('./test_api_utils');

describe("Basic Api Hello World Tests", function() {

    it("should succeed when calling: " + `${config.DOMAIN}/api/helloworld`, async function() {
        try {            
            var result = await axios.get(`${config.DOMAIN}/api/helloworld`);
            assert.equal(JSON.stringify(result.data), JSON.stringify({data: "hello world"}) );
        } catch (e) {
            assert.fail(e.message);
        }
    });

    it("should throw an exception when calling: " + `${config.DOMAIN}/api/error`, async function() {
        try {            
            var result = await axios.get(`${config.DOMAIN}/api/error`);
            assert.fail('we should have thrown exception');            
        } catch (e) {
            assert.equal(e.message, 'Request failed with status code 500');
            assert.equal(e.response.data.message, 'Internal error in the api code');

        }
    });    

});



