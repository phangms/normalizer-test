/**
 * 
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

describe('api', function() {
	it('should say hooray');
});

it('should say hooray', function() {
	chai.request('http://localhost:8080').get('api').end(function(err, res) {
		expect(res).to.have.status(200);
	});
});
