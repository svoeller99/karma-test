define(['chai', 'src/hello'], function(chai, hello){
  var assert = chai.assert;
  describe('hello', function(){
    it('should greet you by name', function(){
      assert.equal('Hello Sean, you are super awesome', hello('Sean'));
    });
  });
});
