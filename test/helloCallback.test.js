define(['chai', 'src/helloCallback'], function(chai, helloCallback){
  var assert = chai.assert;
  describe('helloCallback', function(){
    it('should do stuff',function(done){

      var called = false;
      function cb(){
        called = true;
      }

      helloCallback(cb);
      assert.ok(called, 'callback should be called');

      helloCallback(done);
    });
  });
});