const { Given, When, Then, Before } = require('cucumber');
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

Before(function () {
    this.fn = null;
    this.insightTable = null;
});

Given(/^A date of (.*)$/, function (date) {
    this.date = new Date(date);
});
Given(/^a (.*) list$/, function (type,table) {
    if(type==='date') {
        let cleanTable = [];
        for (let x in table.raw()[0]) {
            cleanTable[x] = new Date(table.raw()[0][x])
        }
        this.datesTable = JSON.stringify(cleanTable);
    }
    else if (type==='key data') {
        this.insightTable = table.hashes();
    }
    else if (type === 'data with dates'){
        let cleanTable = table.hashes();
        for (let x in table.hashes()) {
            cleanTable[x].Date = moment(new Date(cleanTable[x].Date)).format('LLL');
        }
        this.insightTable = cleanTable;
    }
    else if (type === 'random data'){
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function randomArray() {
            let Random = [];
            for (let x = 0; x < 30; x++) {
                Random.push(getRndInteger(-0.89, 0.89));
            }
            return Random;
        }
        let cleanTable = table.raw()[0];
        this.insightTable = JSON.parse('{"'+ cleanTable[0] + '":[' + randomArray() + '], "' +
                                             cleanTable[1] + '":[' + randomArray() + '], "' +
                                             cleanTable[2] + '":[' + randomArray() + '], "' +
                                             cleanTable[3] + '":[' + randomArray() + '], "' +
                                             cleanTable[4] + '":[' + randomArray() + '], "' +
                                             cleanTable[5] + '":[' + randomArray() + '], "' +
                                             cleanTable[6] + '":[' + randomArray() + '], "' +
                                             cleanTable[7] + '":[' + randomArray() + ']}');
    }
    else if(type === 'number key data'){
        this.insightTable= table.hashes()[0];
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
    if (fn.startsWith('number of')){
        this.fn = 'update cases';
        this.caseType = fn.substring(10,16);
        let table = {
            contextHTML : '<div id="activeCasesNumber"></div>' +
            '<div id="unassignedCasesNumber"></div>' +
            '<div id="OpenedCasesNumber"></div>' +
            '<div id="ClosedCasesNumber"></div>'
        };
        $('#test').append(table.contextHTML);
        app.updateCases(this.insightTable[0],document, $);
    }
    else
        this.fn = fn;
    if(fn === 'client insights'){
        $('#test').append('<div id="catDiv"><ul><div id="issues"></div></ul></div>');
        app.insightsClient(this.insightTable,document, $);
    }
    else if (fn === 'new ticket') {
        let modal = {
            contextHTML : '<div class="modal" id="myModal">' +
            '<h4 id="headerDisplay"></h4>' +
            '<button type="button" id="closeModal"></button>' +
            '<input type="text" id="title"><textarea id="description"></textarea>' +
            '<input type="text" id="product">' +
            '<input type="text" id="serial">' +
            '<button id="exstSite"></button>' +
            '<button id="newSite"></button>' +
            '<div id="pickExtSite"><fieldset><select id="site"></select></fieldset></div>' +
            '<div id="fillNewSite"><fieldset><select id="country"><option> </option></select></fieldset><div>' +
            '<input id="text-to-add" type="text">' +
            '<select id="technology">' +
            '<option value="33"> </option>' +
            '<option value="270"> </option>' +
            '<option value="34"> </option>' +
            '<option value="35"> </option>' +
            '<option value="36"> </option>' +
            '<option value="37"> </option>' +
            '<option value="38"> </option>' +
            '<option value="305"> </option>' +
            '</select>'+
            '<select id="severity" >' +
            '<option value="1"> </option>' +
            '<option value="2"> </option>'+
            '<option value="3"> </option>' +
            '<option value="4"> </option>' +
            '</select>' +
            '<button id="buttonSubmit"> </button>'+
            '</div>'
        };
        $('#test').append('<div id="ticket"></div>');
        $('#test').append('<div id="createTicket"></div>');
        $('#test').append(modal.contextHTML);
        let allSites = JSON.stringify([
            {SiteID: "549", SiteName: "Azadea", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "617", SiteName: "Credit Libanais", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "601", SiteName: "Delta Trading Co.", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "618", SiteName: "Hopital Albert Haykel", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "539", SiteName: "KSA", SiteCountry: "saudi arabia", SiteCountryCode: "99"},
            {SiteID: "49", SiteName: "Mkalles", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "613", SiteName: "MOF", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "593", SiteName: "Ogero HO", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "577", SiteName: "Red Cross Hazmieh", SiteCountry: "lebanon", SiteCountryCode: "2"},
            {SiteID: "564", SiteName: "Red Cross Spears", SiteCountry: "lebanon", SiteCountryCode: "2"},
            {SiteID: "621", SiteName: "SGBL", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "563", SiteName: "Tech Hub", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "437", SiteName: "TEST PORTAL", SiteCountry: "Lebanon", SiteCountryCode: "2"},
            {SiteID: "616", SiteName: "TESTING", SiteCountry: "lebanon", SiteCountryCode: "2"}]);
        let allCountries = JSON.stringify([
            {CountryID:3,    CountryName: "Afghanistan"},
            {CountryID:4,    CountryName: "Albania"},
            {CountryID:5,    CountryName: "Algeria"},
            {CountryID:6,    CountryName: "Argentina"},
            {CountryID:7,    CountryName:"Armenia"},
            {CountryID:8,    CountryName:"Australia"},
            {CountryID:9,    CountryName:"Austria"},
            {CountryID:10,   CountryName:"Azerbaijan"},
            {CountryID:11,   CountryName:"Bahrain"},
            {CountryID:12,   CountryName:"Bangladesh"},
            {CountryID:13,   CountryName:"Belarus"},
            {CountryID:14,   CountryName:"Belgium"},
            {CountryID:15,   CountryName:"Belize"},
            {CountryID:16,   CountryName:"Bolivarian Republic of Venezuela"},
            {CountryID:17,   CountryName:"Bolivia"},
            {CountryID:18,   CountryName:"Bosnia and Herzegovina"},
            {CountryID:19,   CountryName:"Brazil"},
            {CountryID:20,   CountryName:"Brunei Darussalam"},
            {CountryID:21,   CountryName:"Bulgaria"},
            {CountryID:22,   CountryName:"Cambodia"},
            {CountryID:23,   CountryName:"Canada"},
            {CountryID:24,   CountryName:"Chile"},
            {CountryID:25,   CountryName:"Colombia"},
            {CountryID:127,  CountryName:"Congo"},
            {CountryID:26,   CountryName:"Costa Rica"},
            {CountryID:27,   CountryName:"Croatia"},
            {CountryID:28,   CountryName:"Czech Republic"},
            {CountryID:29,   CountryName:"Denmark"},
            {CountryID:30,   CountryName:"Dominican Republic"},
            {CountryID:31,   CountryName:"Ecuador"},
            {CountryID:32,   CountryName:"Egypt"},
            {CountryID:33,   CountryName:"El Salvador"},
            {CountryID:34,   CountryName:"Estonia"},
            {CountryID:35,   CountryName:"Ethiopia"},
            {CountryID:36,   CountryName:"Faroe Islands"},
            {CountryID:37,   CountryName:"Finland"},
            {CountryID:38,   CountryName:"France"},
            {CountryID:39,   CountryName:"Georgia"},
            {CountryID:40,   CountryName:"Germany"},
            {CountryID:128,  CountryName:"Ghana"},
            {CountryID:41,   CountryName:"Greece"},
            {CountryID:42,   CountryName:"Greenland"},
            {CountryID:43,   CountryName:"Guatemala"},
            {CountryID:44,   CountryName:"Honduras"},
            {CountryID:45,   CountryName:"Hong Kong S.A.R."},
            {CountryID:46,   CountryName:"Hungary"},
            {CountryID:47,   CountryName:"Iceland"},
            {CountryID:48,   CountryName:"India"},
            {CountryID:49,   CountryName:"Indonesia"},
            {CountryID:50,   CountryName:"Iran"},
            {CountryID:51,   CountryName:"Iraq"},
            {CountryID:52,   CountryName:"Ireland"},
            {CountryID:53,   CountryName:"Islamic Republic of Pakistan"},
            {CountryID:54,   CountryName:"Israel"},
            {CountryID:55,   CountryName:"Italy"},
            {CountryID:56,   CountryName:"Jamaica"},
            {CountryID:57,   CountryName:"Japan"},
            {CountryID:58,   CountryName:"Jordan"},
            {CountryID:59,   CountryName:"Kazakhstan"},
            {CountryID:60,   CountryName:"Kenya"},
            {CountryID:61,   CountryName:"Korea"},
            {CountryID:62,   CountryName:"Kuwait"},
            {CountryID:63,   CountryName:"Kyrgyzstan"},
            {CountryID:64,   CountryName:"Lao P.D.R."},
            {CountryID:65,   CountryName:"Latvia"},
            {CountryID:2,    CountryName:"Lebanon"},
            {CountryID:66,   CountryName:"Libya"},
            {CountryID:67,   CountryName:"Liechtenstein"},
            {CountryID:68,   CountryName:"Lithuania"},
            {CountryID:69,   CountryName:"Luxembourg"},
            {CountryID:70,   CountryName:"Macao S.A.R."},
            {CountryID:71,   CountryName:"Macedonia (FYROM)"},
            {CountryID:72,   CountryName:"Malaysia"},
            {CountryID:73,   CountryName:"Maldives"},
            {CountryID:74,   CountryName:"Malta"},
            {CountryID:75,   CountryName:"Mexico"},
            {CountryID:76,   CountryName:"Mongolia"},
            {CountryID:77,   CountryName:"Montenegro"},
            {CountryID:78,   CountryName:"Morocco"},
            {CountryID:79,   CountryName:"Nepal"},
            {CountryID:80,   CountryName:"Netherlands"},
            {CountryID:81,   CountryName:"New Zealand"},
            {CountryID:82,   CountryName:"Nicaragua"},
            {CountryID:83,   CountryName:"Nigeria"},
            {CountryID:84,   CountryName:"Norway"},
            {CountryID:85,   CountryName:"Oman"},
            {CountryID:86,   CountryName:"Panama"},
            {CountryID:87,   CountryName:"Paraguay"},
            {CountryID:88,   CountryName:"People's Republic of China"},
            {CountryID:89,   CountryName:"Peru"},
            {CountryID:90,   CountryName:"Philippines"},
            {CountryID:91,   CountryName:"Poland"},
            {CountryID:92,   CountryName:"Portugal"},
            {CountryID:93,   CountryName:"Principality of Monaco"},
            {CountryID:94,   CountryName:"Puerto Rico"},
            {CountryID:95,   CountryName:"Qatar"},
            {CountryID:96,   CountryName:"Romania"},
            {CountryID:97,   CountryName:"Russia"},
            {CountryID:98,   CountryName:"Rwanda"},
            {CountryID:99,   CountryName:"Saudi Arabia"},
            {CountryID:100,  CountryName:"Senegal"},
            {CountryID:101,  CountryName:"Serbia"},
            {CountryID:102,  CountryName:"Serbia and Montenegro (Former)"},
            {CountryID:103,  CountryName:"Singapore"},
            {CountryID:104,  CountryName:"Slovakia"},
            {CountryID:105,  CountryName:"Slovenia"},
            {CountryID:106,  CountryName:"South Africa"},
            {CountryID:107,  CountryName:"Spain"},
            {CountryID:108,  CountryName:"Sri Lanka"},
            {CountryID:109,  CountryName:"Sweden"},
            {CountryID:110,  CountryName:"Switzerland"},
            {CountryID:111,  CountryName:"Syria"},
            {CountryID:112,  CountryName:"Taiwan"},
            {CountryID:113,  CountryName:"Tajikistan"},
            {CountryID:114,  CountryName:"Thailand"},
            {CountryID:115,  CountryName:"Trinidad and Tobago"},
            {CountryID:116,  CountryName:"Tunisia"},
            {CountryID:117,  CountryName:"Turkey"},
            {CountryID:118,  CountryName:"Turkmenistan"},
            {CountryID:119,  CountryName:"UAE"},
            {CountryID:120,  CountryName:"Ukraine"},
            {CountryID:121,  CountryName:"United Kingdom"},
            {CountryID:1,    CountryName:"United States (US)"},
            {CountryID:122,  CountryName:"Uruguay"},
            {CountryID:123,  CountryName:"Uzbekistan"},
            {CountryID:124,  CountryName:"Vietnam"},
            {CountryID:125,  CountryName:"Yemen"},
            {CountryID:126,  CountryName:"Zimbabwe"}

        ]);
        function fillModal(sites,countries){
            $('#site').empty();
            $('#country').empty();
            $('#country').append('<option disabled selected value class="text-muted">Country of New Site</option>');
            for(let i=0;i<sites.length;i++){
                $('#site').append( '<option value="'+sites[i].SiteID+'">' +sites[i].SiteName+' | <span class="text-muted">'
                    +sites[i].SiteCountry+'</span></option>' );
            }
            for(let i=0;i<countries.length;i++){
                $('#country').append( '<option id="'+countries[i].CountryID+'" value="'+countries[i].CountryName+'">'
                    +countries[i].CountryName+ '</option>' );
            }
        }
        fillModal(JSON.parse(allSites), JSON.parse(allCountries));
        $("#createTicket").click(function(){
            $("#title").val('');
            $("#description").val('');
            $("#product").val('');
            $("#serial").val('');
            let sites=allSites;
            sites=JSON.parse(sites);
            $('#site').empty();
            /** Error Handling: Uncaught null sites error*/
            for(let i=0;i<sites.length;i++){
                $('#site').append( '<option value="'+sites[i].SiteID+'">' +sites[i].SiteName+' | <span class="text-muted">'
                    +sites[i].SiteCountry+'</span></option>' );
            }
            $("#technology").val('');
            $("severity").val('');
        });
        $('#buttonSubmit').click(function() {
            let title=$("#title").val();
            let dscription=$("#description").val();
            let product=$("#product").val();
            let serialNum=$("#serial").val();
            let site=$("#site").val();
            let technology=$("#technology").val();
            let severity=$("#severity").val();
            if((title==="")||(dscription==="")||(site==="")||(technology==="")||(severity==="")){
                alert("Please Fill all Fields");
                return;
            }
            if(product===""){
                product="n/a";
            }
            if(serialNum===""){
                serialNum="n/a";
            }
            if(siteIndicator==="exst"){
                $("#noFile").text("No file chosen...");
                $("#chooseFile").val("");
                $('#pickExtSite').hide(500);
                $('#fillNewSite').hide(500);
                $('#ticket').append(JSON.stringify({
                    "title": title,
                    "description": dscription,
                    "product": product,
                    "serial": serialNum,
                    "site": site,
                    "technology": technology,
                    "severity": severity
                }));
            }
            else{
                let country=$("#country");
                let countryName=country.val();
                if(countryName===""){
                    alert("Please Choose Country of new Site");
                    return;
                }
                let countryCode=0;
                for(let i=0;i<country.options.length;i++){
                    if(country.options[i].value===countryName){
                        countryCode=country.options[i].id;
                    }
                }
                let siteName=$('#text-to-add').val();
                $("#noFile").text("No file chosen...");
                $("#chooseFile").val("");
                $('#text-to-add').val("");
                $('#text-to-add').html("");
                $('#pickExtSite').hide(500);
                $('#fillNewSite').hide(500);
                $('#ticket').append(JSON.stringify({
                    "title": title,
                    "description": dscription,
                    "product": product,
                    "serial": serialNum,
                    "sitename": siteName,
                    "sitecountry": countryName,
                    "sitecountrycode": countryCode,
                    "technology": technology,
                    "severity": severity
                }));
            }

        });
        $("#title").val("");
        $("#description").val("");
        $("#product").val("");
        $("#serial").val("");
        $("#site").val("");
        $("#technology").val("");
        $("#severity").val("");
        $('#exstSite').click(function(){
            siteIndicator = "exst";
        });
        $('#newSite').click(function(){
            siteIndicator="new";
        });
        $('#createTicket').trigger('click');
        $('#title').val('test');
        $('#description').val('test');
        $('#product').val('test');
        $('#serial').val('test');
        $('#site').val(549);
        $('#country').val(2);
        $('#technology').val(33);
        $('#severity').val(1);
        $('#buttonSubmit').trigger('click');
    }
    else if (fn === 'latest ticket'){
        $('#test').append('<table><tbody id="ticketsTable"></tbody></table>');
        app.latestTickets(this.insightTable,document, $);
    }
    else if(fn === 'vulnerability table') {
        $('#test').append('<table id="vulTable"><tbody><tr class="rowVul"></tr></tbody></table>');
        app.vulTable(this.insightTable,document, $);
    }
    else if (fn === 'source table'){
        $('#test').append('<div id="sources"><table id="sourcesTable"><tbody><tr class="rowClassSrcs"></tr></tbody></table></div>');
        app.srcsTable(this.insightTable,256500000,250,document, $);
    }
    else if (fn === 'delay graph'){
        $('#test').append('<div id="delayTable"><div id="delay"><div id="delayGraph"></div><canvas id="delayCanvas"></canvas></div></div>');
        app.delayGraph(this.insightTable,1.0,document, $, chart);
    }
    else if (fn.startsWith('daily number of')){
        this.fn = 'daily cases';
        this.caseType = fn.substring(16,22);
        let table = {
            contextHTML: '<fieldset></fieldset>' +
            '<div id="chartTrendDiv"><canvas id="main-chart"></canvas></div>' +
            '<input type="text" id="customTrend">'+
            '<span id="openedTickets"></span>' +
            '<div id="openedWidth"></div>' +
            '<span id="closedTickets"></span>' +
            '<div id="closedWidth"></div>' +
            '<span id="canceledTickets"></span>' +
            '<div id="canceledWidth"></div>' +
            '<span id="unassignedTickets"></span>' +
            '<div id="unassignedWidth"></div>' +
            '<span id="activeTickets"></span>' +
            '<div id="activeWidth"></div>'
        };
        $('#test').append(table.contextHTML);
        app.dailyCases(this.insightTable, null, document, $ ,chart);
    }
});

Then(/^I should(.*) expect to get (.*)$/, function (not,expected_data) {
    if(this.fn !== null){
        let id = null;
        let testType = 'date';
        if (expected_data === 'null') expected_data='';
        else if (expected_data.startsWith('the ticket')) {
            expected_data = moment(new Date(expected_data.substring(14))).format('LLL');
        }
        else if (expected_data.startsWith('a badge of')){
            expected_data = 'success';
            testType = 'status';
        }
        if(this.fn === 'client insights') id = '#issues';
        else if (this.fn === 'new ticket') id  = '#ticket';
        else if (this.fn === 'latest ticket') {
            if(testType==='date')
                id= '.test:first';
            else if (testType === 'status'){
                id = '.test1:first';
            }
        }
        else if (this.fn === 'update cases'){
            if(expected_data==='') expected_data='null';
            id = '#'+this.caseType + 'CasesNumber';
        }
        else if (this.fn === 'vulnerability table'){
            id = '.rowVul:first .progress-bar';
            testType = 'progress';
        }
        else if (this.fn === 'source table'){
            id = '.spec:first';
            testType = 'progress';
        }
        else if (this.fn = 'daily cases'){
            id = '#'+ this.caseType + 'Tickets';
        }
        if(not===''){
            if (testType==='date') {
                expect($(id).text()).to.equal(expected_data);
            }
            else if (testType === 'status'){
                expect($(id)[0].innerHTML.substring(25, 32)).to.equal(expected_data);
            }
            else if(testType==='progress'){
                expect($(id).css('width')).to.equal(expected_data);
            }
        }
        else expect($(id).text()).not.to.equal(expected_data);
    }
});
Then(/^I should expect to get$/, function (dataTable) {
        expect(JSON.stringify(this.insightTable)).to.equal(JSON.stringify(dataTable.hashes()));
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
Then(/^it should pass$/, function () {
    expect(true).to.equal(true);
});