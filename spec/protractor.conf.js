exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],
  multiCapabilities: [
  /* Uncomment these to run tests in other browsers:
          { 'browserName': 'chrome' },
          { 'browserName': 'firefox' },
          { 'browserName': 'safari' },
  */
          {
              'browserName': 'phantomjs',
              'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
              'phantomjs.cli.args': ['--debug=false', '--webdriver-logfile=/tmp/webdriver.log', '--webdriver-loglevel=INFO']
  //            'phantomjs.cli.args': ['--debug=true', '--webdriver-logfile=webdriver.log', '--webdriver-loglevel=DEBUG']     // alternative, with full debugging on
              // (loglevels supported: 'ERROR', 'WARN', 'INFO', 'DEBUG') (default 'INFO')
          }
      ],

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
