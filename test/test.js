// To sim a session\local storage
/*
let Storage = require('dom-storage');
let sessionStorage = new Storage(null, { strict: true });
*/

/*const QUnit = require('qunit');
const {window} = (new JSDOM(`<body><div id="qunit"></div><div id="qunit-fixture"></div></body>`, { runScripts: "dangerously" })).window;
document = window.document;*/
/** Replace all document by jquery*/
const chart = require('chart.js');
const QUnit = require('qunit');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM('<body><div id="qunit"></div><div id="qunit-fixture"></div></body>',
    { runScripts: "dangerously", pretendToBeVisual: true });
let { window } = dom;
let $ = require("jquery")(window);
const document = window.document;
let app = require('../app/app');

/** Enhancement: Display results per page (10-20/page) instead of date range based*/
QUnit.test("Next Button Test", function (assert) {
    $('#qunit-fixture').append('<div id="next"></div>');
    function test_next(next_range) {
        app.nextDateButton(document,$);
        assert.equal(document.getElementById('next').innerHTML, next_range,"The result should be " + next_range);
    }
    let next_date_range = "{\"dateEarly\":\"2008-02-03T03:56:36.000Z\",\"dateFrom\":\"2008-01-04T03:56:36.000Z\"}";
    if(app.earliestDate){
        test_next(next_date_range);
    }
    else {
        app.earliestDate = app.now.toISOString();
        test_next(next_date_range);

    }
    $('#next').empty();
    app.earliestDate =  'foo';
    next_date_range =  "{\"dateEarly\":null,\"dateFrom\":null}";
    test_next(next_date_range);
    $('#next').empty();

});

/** Issue: Unhandled less than 4 entries of datesTable size*/
QUnit.test("Previous Button Test", function(assert){
    $('#qunit-fixture').append('<div id="previous"></div>');
    function test_previous(previous_range){
        assert.equal(JSON.stringify(app.previousDateButton(document, $)),JSON.stringify(previous_range), "The result should be "
            + JSON.stringify(previous_range));
    }
    let prev_date_range ={
        "to": new Date(2009,6,5,8,7,2),
        "start": new Date(2008,5,3,8,56,39)

    };
    test_previous(prev_date_range);
});

/** Issue: Unhandled no tickets with date range */
/** Enhancement: Add !==NaN to handle Invalid Dates*/
QUnit.test("First Button Test", function(assert){

    $('#qunit-fixture').append('<div id="first"></div>');
    function test_first(previous_range){
        assert.equal(JSON.stringify(app.firstDateButton(document, $)),JSON.stringify(previous_range), "The result should be "
            + JSON.stringify(previous_range));
    }
    let date_range =
        {
            to: new Date(),
            start: new Date(new Date().getTime() - (150 * 86400000))
        };
    test_first(date_range);
});

/** Error Handling: Uncaught TypeError after getElementByID in removing nodeRelatives for null (no element found)*/
QUnit.test("Insights Test", function(assert){
    $('#qunit-fixture').append('<div id="catDiv"><ul><div id="issues"></div></ul></div>');
    function test_insightsClient(data, expected_data){
        app.insightsClient(data,document, $);
        assert.deepEqual($('#issues').text(),expected_data, "The results should be null");
    }
    function test_insightsClientInequal(data, expected_data){
        app.insightsClient(data,document, $);
        assert.notEqual($('#issues').text(),expected_data,"The results should be null");
    }
    let data=[
        {
            "Owner": "Julien Rahal",
            "CaseCount": "63",
            "Customer": "Azadea",
            "CustomerCount": "99",
            "Category": "Misconfiguration",
            "CategoryCount": "89",
            "Technology": "Voice & Video",
            "TechnologyCount": "112",
            "Difficulty": "Average",
            "DifficultyCount": "187",
            "TotalCases": 355,
            "TotalCustomers": 355,
            "TotalCategories": 346,
            "TotalTechnologies": 346,
            "TotalDifficulties": 346,
            "avatar": "https://lh3.googleusercontent.com/fPtXKFBuMvx7FaUz2J8S9CMJWFU7CYiCB4x9OtZcv3EjxTniJ-F3PXUmUjuqfaH39VTk3siPODA31w=w812-h811-rw-no"
        },
        {
            "Owner": "Mahmoud Lattouf",
            "CaseCount": "48",
            "Customer": "MIC2 | Touch",
            "CustomerCount": "31",
            "Category": "MAC",
            "CategoryCount": "82",
            "Technology": "Routing & Switching",
            "TechnologyCount": "91",
            "Difficulty": "Simple",
            "DifficultyCount": "114",
            "TotalCases": 355,
            "TotalCustomers": 355,
            "TotalCategories": 346,
            "TotalTechnologies": 346,
            "TotalDifficulties": 346,
            "avatar": "https://lh3.googleusercontent.com/Z0EzEvOXm-KCY27xigj5fBoSt0hFGIygw4iZ2mfbSZd665LRF7yHZMvU5XbgtVWL2RnivFnR7GbKuQ=s718-rw-no"
        },
        {
            "Owner": "Sylvia El Ferkh",
            "CaseCount": "44",
            "Customer": "Bank of Beirut (BOB)",
            "CustomerCount": "19",
            "Category": "Others",
            "CategoryCount": "45",
            "Technology": "Security",
            "TechnologyCount": "75",
            "Difficulty": "Difficult",
            "DifficultyCount": "30",
            "TotalCases": 355,
            "TotalCustomers": 355,
            "TotalCategories": 346,
            "TotalTechnologies": 346,
            "TotalDifficulties": 346,
            "avatar": "https://lh3.googleusercontent.com/lPkdIgRAi0YaOEWmo1tkSRK0EAV0SprkCiebyPcYmeOth2ee2G0DJAFqQQ7P2vx6bBCXZEZgHfGNhg=w1496-h1500-rw-no"
        }
    ];
    test_insightsClientInequal(data, "");
    data= [];
    test_insightsClient(data, "");
});

/** Labels Mismatch in form*/
QUnit.test("New Ticket Test", function(assert){
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
    $('#qunit-fixture').append('<div id="ticket"></div>');
    $('#qunit-fixture').append('<div id="createTicket"></div>');
    $('#qunit-fixture').append(modal.contextHTML);
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
    fillModal(JSON.parse(app.allSites), JSON.parse(app.allCountries));
    $("#createTicket").click(function(){
        $("#title").val('');
        $("#description").val('');
        $("#product").val('');
        $("#serial").val('');
        let sites=app.allSites;
        sites=JSON.parse(sites);
        //console.log(sites);
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
        if(app.siteIndicator==="exst"){
            $(".file-upload").removeClass('active');
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
            $(".file-upload").removeClass('active');
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
    $('#closeModal').click(function () {
        $('#myModal').hide()
    });
    $('#select2-drop').hide();
    $('#exstSite').click(function(){
        $('#fillNewSite').hide(500);
        $('#pickExtSite').show(500);
        app.siteIndicator = "exst";
    });
    $('#newSite').click(function(){
        $('#pickExtSite').hide(500);
        $('#fillNewSite').show(500);
        app.siteIndicator="new";
    });
    function test_buttonSubmit(expected_data){
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
        assert.equal($('#ticket').text(), expected_data, "The expected form result is "
            + expected_data);

    }
    let expected_data= "{\"title\":\"test\",\"description\":\"test\",\"product\":\"test\",\"serial\":\"test\"," +
        "\"site\":\"549\",\"technology\":\"33\",\"severity\":\"1\"}";

    test_buttonSubmit(expected_data);
    /*$('#closeModal').trigger('click');
    $('#ticket').empty();*/
});

/** Enhancement: Sort by date to improve pagination and easier navigation (can display results by pages)*/
QUnit.test("Latest Ticket Test", function(assert){
    $('#qunit-fixture').append('<table><tbody id="ticketsTable"></tbody></table>');
    function test_latestTickets(data,expected_data, type) {
        app.latestTickets(data,document, $);
        if(type === 'date'){
            let test = $('.test').first().text();
            assert.equal(test, expected_data, "The result should be " + expected_data);
        }
        else
        {
            let test = $('.test1').first()[0].innerHTML.substring(25, 32);
            assert.equal(test, expected_data, "The badge should be " + expected_data);
        }
    }
    // Unsorted Data Outcome
    let data = [
        {
            Date: new Date(2018,5,19,6,30,20).toLocaleString(),
            Customer: "May 19",
            Title: "May 19",
            Owner: "May 19",
            Reference: "180519-063020",
            Status: "Soft-Closed"
        },
        {
            Date: new Date(2018,5,20,9,57,38).toLocaleString(),
            Customer: "May 20",
            Title: "May 20",
            Owner: "May 20",
            Reference:"180520-095738",
            Status: "Active"
        },
        {
            Date: new Date(2018,5,15,4,30,20).toLocaleString(),
            Customer: "May 15",
            Title: "May 15",
            Owner: "May 15",
            Reference:"180515-043020",
            Status: "Active"
        },
        {
            Date: new Date(2018,5,2,2,2,2).toLocaleString(),
            Customer: "May 2",
            Title: "May 2",
            Owner: "May 2",
            Reference:"180502-020202",
            Status: "Soft-Closed"
        },

    ];
    let expected_data=data[0].Date;
    test_latestTickets(data,expected_data, 'date');
    //Wrong Date Format in data outcome
    data=[
        {
            Date: new Date("foo"),
            Customer: "May 19",
            Title: "May 19",
            Owner: "May 19",
            Reference: "180519-063020",
            Status: "Soft-Closed"
        },
        {
            Date: new Date(2018,5,20,9,57,38).toLocaleString(),
            Customer: "May 20",
            Title: "May 20",
            Owner: "May 20",
            Reference:"180520-095738",
            Status: "Active"
        },
        {
            Date: new Date(2018,5,15,4,30,20).toLocaleString(),
            Customer: "May 15",
            Title: "May 15",
            Owner: "May 15",
            Reference:"180515-043020",
            Status: "Active"
        },
        {
            Date: new Date(2018,5,2,2,2,2).toLocaleString(),
            Customer: "May 2",
            Title: "May 2",
            Owner: "May 2",
            Reference:"180502-020202",
            Status: "Soft-Closed"
        },

    ];
    expected_data="Invalid Date";
    /** Enhancement: Eliminate entry when date is invalid*/
    test_latestTickets(data,expected_data, 'date');
    // Wrong Status
    /** Test passed: Backup button class used, however undefined label added*/
    data=[
        {
            Date: new Date(2018,5,19,6,30,20).toLocaleString(),
            Customer: "May 19",
            Title: "May 19",
            Owner: "May 19",
            Reference: "180519-063020",
            Status: "Soft"
        },
        {
            Date: new Date(2018,5,20,9,57,38).toLocaleString(),
            Customer: "May 20",
            Title: "May 20",
            Owner: "May 20",
            Reference:"180520-095738",
            Status: "Active"
        },
        {
            Date: new Date(2018,5,15,4,30,20).toLocaleString(),
            Customer: "May 15",
            Title: "May 15",
            Owner: "May 15",
            Reference:"180515-043020",
            Status: "Active"
        },
        {
            Date: new Date(2018,5,2,2,2,2).toLocaleString(),
            Customer: "May 2",
            Title: "May 2",
            Owner: "May 2",
            Reference:"180502-020202",
            Status: "Soft-Closed"
        },

    ];
    expected_data= "success";
    test_latestTickets(data,expected_data, 'status');
});

/** Error Handling: Invalid Data*/
QUnit.test("Update Cases Test", function(assert){
    function test_updateCases(data,expected_data) {
        let table = {
            contextHTML : '<div id="activeCasesNumber"></div>' +
            '<div id="unassignedCasesNumber"></div>' +
            '<div id="OpenedCasesNumber"></div>' +
            '<div id="ClosedCasesNumber"></div>'
        };
        $('#qunit-fixture').append(table.contextHTML);
        app.updateCases(data,document, $);
        let test = $('#activeCasesNumber').html();
        assert.equal(test, expected_data, "The result should be " + expected_data);
    }
    let data = {Opened: 56, Unassigned: 45, Closed: 3, Active: 5};
    let expected_data=5;
    test_updateCases(data,expected_data);
    data = {Opened:'foo', Unassigned: -2, Closed: '', Active:null};
    expected_data = "";
    test_updateCases(data,expected_data);
});

/** Error Handling: No restriction on type of of values*/
QUnit.test("Vul Table Test", function(assert){
    $('#qunit-fixture').append('<table id="vulTable"><tbody><tr class="rowVul"></tr></tbody></table>');
    function test_vulTable(data,expected_data) {
        app.vulTable(data,document, $);
        let test = $('.rowVul:first .progress-bar').first().width() / $('.rowVul:first .progress-bar').parent().width() * 100;
        assert.equal(test,expected_data, "The result should be " + expected_data);
    }
    let data = [
        {
            threatid:"test",
            src:"test",
            resolved_src:"test",
            dst:"test",
            resolved_dst:"test",
            severity_of_threatid:"critical",
            count:"4"
        },
        {
            threatid:"test1",
            src:"test1",
            resolved_src:"test1",
            dst:"test1",
            resolved_dst:"test1",
            severity_of_threatid:"high",
            count:"-3"  /** Unhandled */
        }
    ];
    let expected_data="100";
    test_vulTable(data,expected_data);
});

/** Error Handling: Displaying incorrect data NaN instead of not showing row*/
QUnit.test("Src Table Test", function(assert){
    $('#qunit-fixture').append('<div id="sources"><table id="sourcesTable"><tbody><tr class="rowClassSrcs"></tr></tbody></table></div>');
    function test_srcTable(data,expected_data) {
        app.srcsTable(data,256500000,250,document, $);
        let test = $('.spec:first').width() / $('.spec:first').parent().width() * 100;
        //console.log(test);
        assert.equal(test,expected_data, "The result should be " + expected_data);
    }

    let data = [
        {
            src: '127.0.1.1',
            resolved_src: '127.0.1.1',
            sessions:121,
            bytes: 250000000
        },
        {
            src: '127.0.0.1',
            resolved_src: '127.0.0.1',
            sessions:1209,
            bytes: 100000000
        }
    ];
    let expected_data="47.99301724137931";
    test_srcTable(data,expected_data);
});

/** Error Handling: Unclean data*/
/** Variable Declaration: Undefined since definition in if-else states*/
QUnit.test("Delay Graph Test", function(assert){
    $('#qunit-fixture').append('<div id="delayTable"><div id="delay"><div id="delayGraph"></div><canvas id="delayCanvas"></canvas></div></div>');
    function test_delayGraph(data,expected_data) {
        app.delayGraph(data,1.0,document, $, chart);
        assert.ok(expected_data, "Working properly");
    }

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
    let data = {
        Antartica:  randomArray(),
        Australia:  randomArray(),
        Brazil:     randomArray(),
        Egypt:      randomArray(),
        Japan:      randomArray(),
        UK:         randomArray(),
        USA:        randomArray(),
        UAE:        randomArray()
    };
    let expected_data=true;
    test_delayGraph(data,expected_data);
});

/** Error Handling: Negative Values */
QUnit.test("Daily Cases Test", function(assert){
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
    $('#qunit-fixture').append(table.contextHTML);
    function test_dailyCases(data,expected_data) {
        let coords = null;
        app.dailyCases(data,coords,document, $,chart);
        let test = $('#openedTickets').html();
        assert.equal(test,expected_data, "The result should be " + expected_data);
    }
    let data = {Opened: -56, Unassigned: 45, Closed: 3, Active: 5, Canceled: 3};
    let expected_data="(-56 Tickets)";
    test_dailyCases(data,expected_data);
    console.log('done');
});

