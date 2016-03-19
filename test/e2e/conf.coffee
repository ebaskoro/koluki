###
  conf.coffee
###

exports.config =

  seleniumAddress: 'http://localhost:4444/wd/hub'

  capabilities:
    browserName: 'firefox'

  baseUrl: 'http://localhost:9001'

  allScriptsTimeout: 11000

  specs: [
    'scenarios.js'
  ]

  framework: 'jasmine'

  jasmineNodeOpts:
    defaultTimeoutInterval: 30000

  onPrepare: ->
    browser.driver.manage().window().maximize()