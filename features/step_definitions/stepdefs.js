const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;
const moment = require('moment');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<div id="test"></div>',
    { runScripts: "dangerously", pretendToBeVisual: true });
let { window } = dom;
let $ = require("jquery")(window);
const document = window.document;
let app = require('../../app/app');
let siteIndicator="exst";
let chart = require('../../app/Chart');

Given(/^A date of (.*)$/, function (date) {
    this.date = new Date(date);
});

Given(/^a (.*) list$/, function (type,table) {
    let cleanTable = [];
    for (let x in table.raw()[0]){
        cleanTable[x]= new Date(table.raw()[0][x])
    }
    if(type==='date')
        this.datesTable = JSON.stringify(cleanTable);
    else if (type==='key data') {
        this.insightTable = table.hashes();
    }
});

Given(/^no data list$/, function () {
   this.insightTable= [];
});
When(/^I press (.*)$/, function (fn) {
    $('#test').text('');
    $('#test').append('<div id="'+ fn +'"></div>');
    this.fn = fn;
    if(fn === 'next'){
    app.nextDateButton(this.date,$);}
    else if (fn === 'previous'){
        app.previousDateButton(this.datesTable,$);
    }
    else if(fn === 'first'){
        app.firstDateButton($);
    }
});

When(/^I request (.*)$/, function (fn) {
    $('#test').append('<div id="catDiv"><ul><div id="issues"></div></ul></div>');
    this.fn = fn;
    app.insightsClient(this.insightTable,document, $);
});

Then(/^I should(.*) expect to get (.*)$/, function (not,expected_data) {
    if (expected_data === 'null') expected_data='';
    if(not==='')
        expect($('#issues').text()).to.equal(expected_data);
    else expect($('#issues').text()).not.to.equal(expected_data);
});
Then(/^I should get from (.*) to (.*)$/, function (dateFrom, dateTo) {
    if (dateFrom ==='now') {
        let dateFrom_wrap = new Date();
        dateFrom = moment(dateFrom_wrap).format('LLL');
        if (dateTo === '3 months back') {
            let dateTo_wrap = new Date(dateFrom_wrap - (150 * (86400000)));
            dateTo = moment(dateTo_wrap).format('LLL');
        }
    }
    let date_range = JSON.stringify([moment(new Date(dateFrom)).format('LLL'), moment(new Date(dateTo)).format('LLL')]);
    expect(document.getElementById(this.fn).innerHTML).to.equal(date_range);
});