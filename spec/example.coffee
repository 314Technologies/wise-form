describe 'angularjs homepage', ->
  it 'should greet the named user', ->
    browser.get('/')
    element(By.model('yourName')).sendKeys('Julie')
    greeting = element(By.binding('yourName'))
    expect(greeting.getText()).toEqual('Hello Julie!')


