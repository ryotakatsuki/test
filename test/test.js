const chai = require('chai');
const t = require('../');
const expect = chai.expect;
describe('Test group', function() {
  it('Test', function() {
    t();
    expect(true).to.be.eql(true);
  });
});
