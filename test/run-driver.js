// Setup for Selenium Webdriver Using Chrome
// Requires running selenium-server-standalone-3.13.0.jar
const {Builder} = require('selenium-webdriver');

(async function selenium_run() {
    try {
    let driver = await new Builder().forBrowser('chrome').build().get('http://localhost:49916/DataConsult-Testing/test/qunit.html');
    await driver.quit();
    } catch (e) {
        throw e;
    }
})();

// Setup for WebdriverIO Using PhantomJS
/*
"use strict";
var phantomjs = require('phantomjs-prebuilt')
var webdriverio = require('webdriverio')
var wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } }

phantomjs.run('--webdriver=4444').then(program => {
    webdriverio.remote(wdOpts).init()
        .url('http://localhost:49916/DataConsult-Testing/test/qunit.html')
        .getTitle().then(title => {
        console.log(title) // 'Mozilla Developer Network'
        program.kill() // quits PhantomJS
    })
})*/
