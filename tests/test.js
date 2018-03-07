const expect = require('chai').expect;
const request = require('request');



describe('Server', function () {
    it('should pass when everything is okay', function () {
        expect(true).to.be.true;
    });
});


var base_url = "http://localhost:3000/"

describe("Hello World Server", function() {
    describe("GET /", function() {
      it("returns status code 200", function(done) {
        request.get(base_url, function(error, response, body) {
          assert.equal(200, response.statusCode);
          done();
        });
      });
    });
  });
