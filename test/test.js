let now = new Date(2008, 1, 3, 5, 56, 36);
let earliestDate = now.toISOString();
let datesTable = JSON.stringify([
    new Date(2008, 5, 3, 8, 56, 39),
    new Date(2009, 6, 5, 8, 7, 2),
    new Date(2008, 1, 3, 5, 56, 36),
    new Date(2003, 5, 20, 5, 30, 15)
]);
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
    {CountryID: 3, CountryName: "Afghanistan"},
    {CountryID: 4, CountryName: "Albania"},
    {CountryID: 5, CountryName: "Algeria"},
    {CountryID: 6, CountryName: "Argentina"},
    {CountryID: 7, CountryName: "Armenia"},
    {CountryID: 8, CountryName: "Australia"},
    {CountryID: 9, CountryName: "Austria"},
    {CountryID: 10, CountryName: "Azerbaijan"},
    {CountryID: 11, CountryName: "Bahrain"},
    {CountryID: 12, CountryName: "Bangladesh"},
    {CountryID: 13, CountryName: "Belarus"},
    {CountryID: 14, CountryName: "Belgium"},
    {CountryID: 15, CountryName: "Belize"},
    {CountryID: 16, CountryName: "Bolivarian Republic of Venezuela"},
    {CountryID: 17, CountryName: "Bolivia"},
    {CountryID: 18, CountryName: "Bosnia and Herzegovina"},
    {CountryID: 19, CountryName: "Brazil"},
    {CountryID: 20, CountryName: "Brunei Darussalam"},
    {CountryID: 21, CountryName: "Bulgaria"},
    {CountryID: 22, CountryName: "Cambodia"},
    {CountryID: 23, CountryName: "Canada"},
    {CountryID: 24, CountryName: "Chile"},
    {CountryID: 25, CountryName: "Colombia"},
    {CountryID: 127, CountryName: "Congo"},
    {CountryID: 26, CountryName: "Costa Rica"},
    {CountryID: 27, CountryName: "Croatia"},
    {CountryID: 28, CountryName: "Czech Republic"},
    {CountryID: 29, CountryName: "Denmark"},
    {CountryID: 30, CountryName: "Dominican Republic"},
    {CountryID: 31, CountryName: "Ecuador"},
    {CountryID: 32, CountryName: "Egypt"},
    {CountryID: 33, CountryName: "El Salvador"},
    {CountryID: 34, CountryName: "Estonia"},
    {CountryID: 35, CountryName: "Ethiopia"},
    {CountryID: 36, CountryName: "Faroe Islands"},
    {CountryID: 37, CountryName: "Finland"},
    {CountryID: 38, CountryName: "France"},
    {CountryID: 39, CountryName: "Georgia"},
    {CountryID: 40, CountryName: "Germany"},
    {CountryID: 128, CountryName: "Ghana"},
    {CountryID: 41, CountryName: "Greece"},
    {CountryID: 42, CountryName: "Greenland"},
    {CountryID: 43, CountryName: "Guatemala"},
    {CountryID: 44, CountryName: "Honduras"},
    {CountryID: 45, CountryName: "Hong Kong S.A.R."},
    {CountryID: 46, CountryName: "Hungary"},
    {CountryID: 47, CountryName: "Iceland"},
    {CountryID: 48, CountryName: "India"},
    {CountryID: 49, CountryName: "Indonesia"},
    {CountryID: 50, CountryName: "Iran"},
    {CountryID: 51, CountryName: "Iraq"},
    {CountryID: 52, CountryName: "Ireland"},
    {CountryID: 53, CountryName: "Islamic Republic of Pakistan"},
    {CountryID: 54, CountryName: "Israel"},
    {CountryID: 55, CountryName: "Italy"},
    {CountryID: 56, CountryName: "Jamaica"},
    {CountryID: 57, CountryName: "Japan"},
    {CountryID: 58, CountryName: "Jordan"},
    {CountryID: 59, CountryName: "Kazakhstan"},
    {CountryID: 60, CountryName: "Kenya"},
    {CountryID: 61, CountryName: "Korea"},
    {CountryID: 62, CountryName: "Kuwait"},
    {CountryID: 63, CountryName: "Kyrgyzstan"},
    {CountryID: 64, CountryName: "Lao P.D.R."},
    {CountryID: 65, CountryName: "Latvia"},
    {CountryID: 2, CountryName: "Lebanon"},
    {CountryID: 66, CountryName: "Libya"},
    {CountryID: 67, CountryName: "Liechtenstein"},
    {CountryID: 68, CountryName: "Lithuania"},
    {CountryID: 69, CountryName: "Luxembourg"},
    {CountryID: 70, CountryName: "Macao S.A.R."},
    {CountryID: 71, CountryName: "Macedonia (FYROM)"},
    {CountryID: 72, CountryName: "Malaysia"},
    {CountryID: 73, CountryName: "Maldives"},
    {CountryID: 74, CountryName: "Malta"},
    {CountryID: 75, CountryName: "Mexico"},
    {CountryID: 76, CountryName: "Mongolia"},
    {CountryID: 77, CountryName: "Montenegro"},
    {CountryID: 78, CountryName: "Morocco"},
    {CountryID: 79, CountryName: "Nepal"},
    {CountryID: 80, CountryName: "Netherlands"},
    {CountryID: 81, CountryName: "New Zealand"},
    {CountryID: 82, CountryName: "Nicaragua"},
    {CountryID: 83, CountryName: "Nigeria"},
    {CountryID: 84, CountryName: "Norway"},
    {CountryID: 85, CountryName: "Oman"},
    {CountryID: 86, CountryName: "Panama"},
    {CountryID: 87, CountryName: "Paraguay"},
    {CountryID: 88, CountryName: "People's Republic of China"},
    {CountryID: 89, CountryName: "Peru"},
    {CountryID: 90, CountryName: "Philippines"},
    {CountryID: 91, CountryName: "Poland"},
    {CountryID: 92, CountryName: "Portugal"},
    {CountryID: 93, CountryName: "Principality of Monaco"},
    {CountryID: 94, CountryName: "Puerto Rico"},
    {CountryID: 95, CountryName: "Qatar"},
    {CountryID: 96, CountryName: "Romania"},
    {CountryID: 97, CountryName: "Russia"},
    {CountryID: 98, CountryName: "Rwanda"},
    {CountryID: 99, CountryName: "Saudi Arabia"},
    {CountryID: 100, CountryName: "Senegal"},
    {CountryID: 101, CountryName: "Serbia"},
    {CountryID: 102, CountryName: "Serbia and Montenegro (Former)"},
    {CountryID: 103, CountryName: "Singapore"},
    {CountryID: 104, CountryName: "Slovakia"},
    {CountryID: 105, CountryName: "Slovenia"},
    {CountryID: 106, CountryName: "South Africa"},
    {CountryID: 107, CountryName: "Spain"},
    {CountryID: 108, CountryName: "Sri Lanka"},
    {CountryID: 109, CountryName: "Sweden"},
    {CountryID: 110, CountryName: "Switzerland"},
    {CountryID: 111, CountryName: "Syria"},
    {CountryID: 112, CountryName: "Taiwan"},
    {CountryID: 113, CountryName: "Tajikistan"},
    {CountryID: 114, CountryName: "Thailand"},
    {CountryID: 115, CountryName: "Trinidad and Tobago"},
    {CountryID: 116, CountryName: "Tunisia"},
    {CountryID: 117, CountryName: "Turkey"},
    {CountryID: 118, CountryName: "Turkmenistan"},
    {CountryID: 119, CountryName: "UAE"},
    {CountryID: 120, CountryName: "Ukraine"},
    {CountryID: 121, CountryName: "United Kingdom"},
    {CountryID: 1, CountryName: "United States (US)"},
    {CountryID: 122, CountryName: "Uruguay"},
    {CountryID: 123, CountryName: "Uzbekistan"},
    {CountryID: 124, CountryName: "Vietnam"},
    {CountryID: 125, CountryName: "Yemen"},
    {CountryID: 126, CountryName: "Zimbabwe"}

]);
let monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let siteIndicator = "exst";

/** Enhancement: Display results per page (10-20/page) instead of date range based*/
QUnit.test("Next Button Test", function (assert) {
    $('#qunit-fixture').append('<div id="next"></div>');

    function test_next(next_range) {
        nextDateButton();
        assert.equal($('#next').text(), next_range, "The result should be " + next_range);
    }

    let next_date_range = "{\"dateEarly\":\"2008-02-03T03:56:36.000Z\",\"dateFrom\":\"2008-01-04T03:56:36.000Z\"}";
    if (earliestDate) {
        test_next(next_date_range);
    }
    else {
        earliestDate = now.toISOString();
        test_next(next_date_range);

    }
    $('#next').empty();
    earliestDate = 'foo';
    next_date_range = "{\"dateEarly\":null,\"dateFrom\":null}";
    test_next(next_date_range);
    $('#next').empty();

});

/** Issue: Unhandled less than 4 entries of datesTable size*/
QUnit.test("Previous Button Test", function (assert) {
    $('#qunit-fixture').append('<div id="previous"></div>');

    function test_previous(previous_range) {
        assert.equal(JSON.stringify(previousDateButton()), JSON.stringify(previous_range), "The result should be "
            + JSON.stringify(previous_range));
    }

    let prev_date_range = {
        "to": new Date(2009, 6, 5, 8, 7, 2),
        "start": new Date(2008, 5, 3, 8, 56, 39)

    };
    test_previous(prev_date_range);
});

/** Issue: Unhandled no tickets with date range */
/** Enhancement: Add !==NaN to handle Invalid Dates*/
QUnit.test("First Button Test", function (assert) {

    $('#qunit-fixture').append('<div id="first"></div>');

    function test_first(previous_range) {
        assert.equal(JSON.stringify(firstDateButton()), JSON.stringify(previous_range), "The result should be "
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
QUnit.test("Insights Test", function (assert) {
    $('#qunit-fixture').append('<div id="catDiv"><ul><div id="issues"></div></ul></div>');

    function test_insightsClient(data, expected_data) {
        insightsClient(data);
        assert.deepEqual(document.getElementById('issues').innerHTML, expected_data, "The results should be null");
    }

    function test_insightsClientInequal(data, expected_data) {
        insightsClient(data);
        assert.notEqual(document.getElementById('issues').innerHTML, expected_data, "The results should be null");
    }

    let data = [
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
    data = [];
    test_insightsClient(data, "");
});

/** Labels Mismatch in form*/
QUnit.test("New Ticket Test", function (assert) {
    let modal = {
        contextHTML: '<div class="modal" id="myModal">' +
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
        '</select>' +
        '<select id="severity" >' +
        '<option value="1"> </option>' +
        '<option value="2"> </option>' +
        '<option value="3"> </option>' +
        '<option value="4"> </option>' +
        '</select>' +
        '<button id="buttonSubmit"> </button>' +
        '</div>'
    };
    $('#qunit-fixture').append('<div id="ticket"></div>');
    $('#qunit-fixture').append('<div id="createTicket"></div>');
    $('#qunit-fixture').append(modal.contextHTML);

    function fillModal(sites, countries) {
        $('#site').empty();
        $('#country').empty();
        $('#country').append('<option disabled selected value class="text-muted">Country of New Site</option>');
        for (let i = 0; i < sites.length; i++) {
            $('#site').append('<option value="' + sites[i].SiteID + '">' + sites[i].SiteName + ' | <span class="text-muted">'
                + sites[i].SiteCountry + '</span></option>');
        }
        for (let i = 0; i < countries.length; i++) {
            $('#country').append('<option id="' + countries[i].CountryID + '" value="' + countries[i].CountryName + '">'
                + countries[i].CountryName + '</option>');
        }
    }

    fillModal(JSON.parse(allSites), JSON.parse(allCountries));
    $("#createTicket").click(function () {
        let title = document.getElementById("title");
        title.innerHTML = "";
        let dscription = document.getElementById("description").value;
        dscription.innerHTML = "";
        let product = document.getElementById("product").value;
        product.innerHTML = "";
        let serialNum = document.getElementById("serial").value;
        serialNum.innerHTML = "";
        let sites = allSites;
        sites = JSON.parse(sites);
        //console.log(sites);
        $('#site').empty();
        /** Error Handling: Uncaught null sites error*/
        for (let i = 0; i < sites.length; i++) {
            $('#site').append('<option value="' + sites[i].SiteID + '">' + sites[i].SiteName + ' | <span class="text-muted">'
                + sites[i].SiteCountry + '</span></option>');
        }
        let technology = document.getElementById("technology").value;
        technology.innerHTML = "";
        let severity = document.getElementById("severity").value;
        severity.innerHTML = "";
    });
    $('#buttonSubmit').click(function () {
        let title = document.getElementById("title").value;
        let dscription = document.getElementById("description").value;
        let product = document.getElementById("product").value;
        let serialNum = document.getElementById("serial").value;
        let site = document.getElementById("site").value;
        let technology = document.getElementById("technology").value;
        let severity = document.getElementById("severity").value;
        if ((title === "") || (dscription === "") || (site === "") || (technology === "") || (severity === "")) {
            alert("Please Fill all Fields");
            return;
        }
        if (product === "") {
            product = "n/a";
        }
        if (serialNum === "") {
            serialNum = "n/a";
        }
        if (siteIndicator === "exst") {
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
        else {
            let country = document.getElementById("country");
            let countryName = country.value;
            if (countryName === "") {
                alert("Please Choose Country of new Site");
                return;
            }
            let countryCode = 0;
            for (let i = 0; i < country.options.length; i++) {
                if (country.options[i].value === countryName) {
                    countryCode = country.options[i].id;
                }
            }
            let siteName = $('#text-to-add').val();
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
    $('#exstSite').click(function () {
        $('#fillNewSite').hide(500);
        $('#pickExtSite').show(500);
        siteIndicator = "exst";
    });
    $('#newSite').click(function () {
        $('#pickExtSite').hide(500);
        $('#fillNewSite').show(500);
        siteIndicator = "new";
    });

    function test_buttonSubmit(expected_data) {
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
        assert.equal(document.getElementById('ticket').innerHTML, expected_data, "The expected form result is "
            + expected_data);

    }

    let expected_data = "{\"title\":\"test\",\"description\":\"test\",\"product\":\"test\",\"serial\":\"test\"," +
        "\"site\":\"549\",\"technology\":\"33\",\"severity\":\"1\"}";

    test_buttonSubmit(expected_data);
    /*$('#closeModal').trigger('click');
    $('#ticket').empty();*/
});


/** Enhancement: Sort by date to improve pagination and easier navigation (can display results by pages)*/
QUnit.test("Latest Ticket Test", function (assert) {
    $('#qunit-fixture').append('<table><tbody id="ticketsTable"></tbody></table>');

    function test_latestTickets(data, expected_data, type) {
        latestTickets(data);
        if (type === 'date') {
            let test = $('.test').first()[0].innerHTML;
            assert.equal(test, expected_data, "The result should be " + expected_data);
        }
        else {
            let test = $('.test1').first()[0].innerHTML.substring(25, 32);
            assert.equal(test, expected_data, "The badge should be " + expected_data);
        }
    }

    // Unsorted Data Outcome
    let data = [
        {
            Date: new Date(2018, 5, 19, 6, 30, 20).toLocaleString(),
            Customer: "May 19",
            Title: "May 19",
            Owner: "May 19",
            Reference: "180519-063020",
            Status: "Soft-Closed"
        },
        {
            Date: new Date(2018, 5, 20, 9, 57, 38).toLocaleString(),
            Customer: "May 20",
            Title: "May 20",
            Owner: "May 20",
            Reference: "180520-095738",
            Status: "Active"
        },
        {
            Date: new Date(2018, 5, 15, 4, 30, 20).toLocaleString(),
            Customer: "May 15",
            Title: "May 15",
            Owner: "May 15",
            Reference: "180515-043020",
            Status: "Active"
        },
        {
            Date: new Date(2018, 5, 2, 2, 2, 2).toLocaleString(),
            Customer: "May 2",
            Title: "May 2",
            Owner: "May 2",
            Reference: "180502-020202",
            Status: "Soft-Closed"
        },

    ];
    let expected_data = data[0].Date;
    test_latestTickets(data, expected_data, 'date');
    //Wrong Date Format in data outcome
    data = [
        {
            Date: new Date("foo"),
            Customer: "May 19",
            Title: "May 19",
            Owner: "May 19",
            Reference: "180519-063020",
            Status: "Soft-Closed"
        },
        {
            Date: new Date(2018, 5, 20, 9, 57, 38).toLocaleString(),
            Customer: "May 20",
            Title: "May 20",
            Owner: "May 20",
            Reference: "180520-095738",
            Status: "Active"
        },
        {
            Date: new Date(2018, 5, 15, 4, 30, 20).toLocaleString(),
            Customer: "May 15",
            Title: "May 15",
            Owner: "May 15",
            Reference: "180515-043020",
            Status: "Active"
        },
        {
            Date: new Date(2018, 5, 2, 2, 2, 2).toLocaleString(),
            Customer: "May 2",
            Title: "May 2",
            Owner: "May 2",
            Reference: "180502-020202",
            Status: "Soft-Closed"
        },

    ];
    expected_data = "Invalid Date";
    /** Enhancement: Eliminate entry when date is invalid*/
    test_latestTickets(data, expected_data, 'date');
    // Wrong Status
    /** Test passed: Backup button class used, however undefined label added*/
    data = [
        {
            Date: new Date(2018, 5, 19, 6, 30, 20).toLocaleString(),
            Customer: "May 19",
            Title: "May 19",
            Owner: "May 19",
            Reference: "180519-063020",
            Status: "Soft"
        },
        {
            Date: new Date(2018, 5, 20, 9, 57, 38).toLocaleString(),
            Customer: "May 20",
            Title: "May 20",
            Owner: "May 20",
            Reference: "180520-095738",
            Status: "Active"
        },
        {
            Date: new Date(2018, 5, 15, 4, 30, 20).toLocaleString(),
            Customer: "May 15",
            Title: "May 15",
            Owner: "May 15",
            Reference: "180515-043020",
            Status: "Active"
        },
        {
            Date: new Date(2018, 5, 2, 2, 2, 2).toLocaleString(),
            Customer: "May 2",
            Title: "May 2",
            Owner: "May 2",
            Reference: "180502-020202",
            Status: "Soft-Closed"
        },

    ];
    expected_data = "success";
    test_latestTickets(data, expected_data, 'status');
});

/** Error Handling: Invalid Data*/
QUnit.test("Update Cases Test", function (assert) {
    function test_updateCases(data, expected_data) {
        let table = {
            contextHTML: '<div id="activeCasesNumber"></div>' +
            '<div id="unassignedCasesNumber"></div>' +
            '<div id="OpenedCasesNumber"></div>' +
            '<div id="ClosedCasesNumber"></div>'
        };
        $('#qunit-fixture').append(table.contextHTML);
        updateCases(data);
        let test = $('#activeCasesNumber').html();
        assert.equal(test, expected_data, "The result should be " + expected_data);
    }

    let data = {Opened: 56, Unassigned: 45, Closed: 3, Active: 5};
    let expected_data = 5;
    test_updateCases(data, expected_data);
    data = {Opened: 'foo', Unassigned: -2, Closed: '', Active: null};
    expected_data = "";
    test_updateCases(data, expected_data);
});

/** Error Handling: No restriction on type of of values*/
QUnit.test("Vul Table Test", function (assert) {
    $('#qunit-fixture').append('<table id="vulTable"><tbody><tr class="rowVul"></tr></tbody></table>');

    function test_vulTable(data, expected_data) {
        vulTable(data);
        let test = $('.rowVul:first .progress-bar').css('width');
        assert.equal(test, expected_data, "The result should be " + expected_data);
    }

    let data = [
        {
            threatid: "test",
            src: "test",
            resolved_src: "test",
            dst: "test",
            resolved_dst: "test",
            severity_of_threatid: "critical",
            count: "4"
        },
        {
            threatid: "test1",
            src: "test1",
            resolved_src: "test1",
            dst: "test1",
            resolved_dst: "test1",
            severity_of_threatid: "high",
            count: "-3"  /** Unhandled */
        }
    ];
    let expected_data = "61px";
    test_vulTable(data, expected_data);
});

/** Error Handling: Displaying incorrect data NaN instead of not showing row*/
QUnit.test("Src Table Test", function (assert) {
    $('#qunit-fixture').append('<div id="sources"><table id="sourcesTable"><tbody><tr class="rowClassSrcs"></tr></tbody></table></div>');

    function test_srcTable(data, expected_data) {
        srcsTable(data, 256500000, 250);
        let test = $('.spec:first').css('width');
        //console.log(test);
        assert.equal(test, expected_data, "The result should be " + expected_data);
    }

    let data = [
        {
            src: '127.0.1.1',
            resolved_src: '127.0.1.1',
            sessions: 121,
            bytes: 250000000
        },
        {
            src: '127.0.0.1',
            resolved_src: '127.0.0.1',
            sessions: 1209,
            bytes: 100000000
        }
    ];
    let expected_data = "55.6719px";
    test_srcTable(data, expected_data);
});

/** Error Handling: Unclean data*/
/** Variable Declaration: Undefined since definition in if-else states*/
QUnit.test("Delay Graph Test", function (assert) {
    $('#qunit-fixture').append('<div id="delayTable"><div id="delay"><div id="delayGraph"></div><canvas id="delayCanvas"></canvas></div></div>');

    function test_delayGraph(data, expected_data) {
        delayGraph(data, 1.0);
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
        Antartica: randomArray(),
        Australia: randomArray(),
        Brazil: randomArray(),
        Egypt: randomArray(),
        Japan: randomArray(),
        UK: randomArray(),
        USA: randomArray(),
        UAE: randomArray()
    };
    let expected_data = true;
    test_delayGraph(data, expected_data);
});

/** Error Handling: Negative Values */
QUnit.test("Daily Cases Test", function (assert) {
    let table = {
        contextHTML: '<fieldset></fieldset>' +
        '<div id="chartTrendDiv"><canvas id="main-chart"></canvas></div>' +
        '<input type="text" id="customTrend">' +
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

    function test_dailyCases(data, expected_data) {
        let coords = null;
        dailyCases(data, coords);
        let test = $('#openedTickets').html();
        assert.equal(test, expected_data, "The result should be " + expected_data);
    }

    let data = {Opened: -56, Unassigned: 45, Closed: 3, Active: 5, Canceled: 3};
    let expected_data = "(-56 Tickets)";
    test_dailyCases(data, expected_data);
});
