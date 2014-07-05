describe 'angularjs homepage', ->
  it 'should greet the named user', ->
    browser.get('/')
    greeting = element(By.id('test_id'))
    expect(greeting.getText()).toEqual('3')


