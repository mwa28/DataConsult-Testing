# Testing Tools Evaluation
Testing Modules for [`msp.dcgroup.com`](https//msp.dcgroudp.com) using different tools.

## JSDOM QUnit Testing
`npm test` runs `node test/jsdom.js` which contains `npm` definitions of [JQuery](https://jquery.com/) and [JSDOM](https://github.com/jsdom/jsdom). This is used to create a window and document and access it without the need for an actual browser.

It executes tests using the [qunit](qunitjs.com) framework.