exports.config = {
  // The address of a running selenium server.
  //seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
  seleniumAddress: 'http://localhost:4444/',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],
  multiCapabilities: [
  /* Uncomment these to run tests in other browsers:
          { 'browserName': 'firefox' },
          { 'browserName': 'safari' },
          { 'browserName': 'chrome' },
  */
          { 'browserName': 'phantomjs',
             'phantomjs.binary.path': '/usr/local/bin/phantomjs',
          }
          //{
              //'browserName': 'phantomjs'
              //'phantomjs.binary.path': '/usr/local/bin/phantomjs',
              //'phantomjs.cli.args': ['--debug=true', '--webdriver-logfile=/tmp/webdriver.log', '--webdriver-loglevel=INFO']
  //            'phantomjs.cli.args': ['--debug=true', '--webdriver-logfile=webdriver.log', '--webdriver-loglevel=DEBUG']     // alternative, with full debugging on
              // (loglevels supported: 'ERROR', 'WARN', 'INFO', 'DEBUG') (default 'INFO')
          //}
      ],

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
};
