(function() {
  describe('angularjs homepage', function() {
    return it('should greet the named user', function() {
      var greeting;
      browser.get('http://www.angularjs.org');
      element(By.model('yourName')).sendKeys('Julie');
      greeting = element(By.binding('yourName'));
      return expect(greeting.getText()).toEqual('Hello Julie!');
    });
  });

}).call(this);
