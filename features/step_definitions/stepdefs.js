const { Given, When, Then } = require('cucumber');
const QUnit = require('qunit');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<body><div id="qunit"></div><div id="qunit-fixture"></div></body>',
    { runScripts: "dangerously", pretendToBeVisual: true });
let { window } = dom;
let $ = require("jquery")(window);
const document = window.document;
let app = require('../../app/app');
let siteIndicator="exst";
let chart = require('../../app/Chart');

Given(/^A date of (.*)$/, function (date) {
    console.log(date);
    this.earliestDate = new Date(date);
    console.log(this.earliestDate);
});

When(/^I press next$/, function () {
    app.nextDateButton(this.earliestDate,$);
});

Then(/^I should get from (.*) to (.*)/, function (dateFrom, dateEarly) {
    let next_date_range = {dateEarly: dateEarly, dateFrom: dateFrom};
    $('#qunit-fixture').append('<div id="next"></div>');
    QUnit.test("Next Button Test", function (assert) {
        assert.equal(document.getElementById('next').innerHTML, next_date_range, "The result should be " + JSON.stringify(next_date_range));
    });
});
