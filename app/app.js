let now = new Date(2008,1,3,5,56,36);
let earliestDate = now.toISOString();
let datesTable = JSON.stringify([
    new Date(2008,5,3,8,56,39),
    new Date(2009,6,5,8,7,2),
    new Date(2008,1,3,5,56,36),
    new Date (2003,5,20,5,30,15)
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
let monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let siteIndicator="exst";

module.exports = {
    now : now,
    earliestDate : earliestDate,
    datesTable : datesTable,
    allSites : allSites,
    allCountries :allCountries,
    monthNames : monthNames,
    siteIndicator: siteIndicator,
    nextDateButton: function (document, $) {
        let dateEarly = new Date(earliestDate);
        let dateFrom = new Date(dateEarly.getTime() - (30 * 86400000));
        $('#next').append(JSON.stringify({dateEarly, dateFrom}));
    },
    previousDateButton: function (document, $) {

        let jsonArr = JSON.parse(datesTable);
        jsonArr.pop();
        jsonArr.pop();
        let to = new Date(jsonArr[jsonArr.length - 1]);
        let start = new Date(jsonArr[jsonArr.length - 2]);
        jsonArr.pop();
        jsonArr.pop();
        jsonArr = JSON.stringify(jsonArr);
        datesTable = jsonArr;
        return {to, start};
    },
    firstDateButton: function (document, $) {
        let to = new Date();
        let start = new Date(to.getTime() - (150 * 86400000));
        return {to: to, start: start};
    },
    insightsClient : function (data,document, $) {

    let catDiv = document.getElementById('catDiv');
    catDiv.className = "col-sm-6 col-lg-6";

    $('#issues').empty();

    for (let i = 0; i < data.length; i++) {
        let percIssues = (data[i].CategoryCount / data[i].TotalCategories) * 100;

        if (data[i].Category === "Undefined") {
            data[i].Category = "Other";
        }
        if (typeof data[i].CategoryCount === "object") {
            data[i].CategoryCount = 0;
        }
        let issues = '  <li>'
            +
            ' <span class="title">' + data[i].Category + '</span>' +
            ' <span class="value">' + data[i].CategoryCount + ' ' +
            '   </span>' +
            '<div class="bars">' +
            ' <div class="progress progress-xs">' +
            '<div class="" role="progressbar" style="background-color:#FFCE56 !important; width: ' + percIssues +
            '%" aria-valuenow="8" ' +
            'aria-valuemin="0" aria-valuemax="100"></div>' +
            ' </div>' +
            '  </div>' +
            '</li>';

        $('#issues').append(issues);
    }
},
    latestTickets : function (data,document, $) {
    if (data.length !== 0) {
        /**Error handling: Case when data length = 1*/
        earliestDate = data[data.length - 1].Date;
        let arr = datesTable;
        if (arr === "") {
            let dates = [data[data.length - 1].Date, data[0].Date];
            datesTable = JSON.stringify(dates);
        }
        else {
            let arrJSON = JSON.parse(arr);
            arrJSON.push(data[data.length - 1].Date, data[0].Date);
            datesTable = JSON.stringify(arrJSON);
        }
    }
    let table = document.getElementById("ticketsTable");
    $(".latestTicketsRows").remove();
    for (let i = 0; i < data.length; i++) {
        let stat = "success";
        if (data[i].Status === "Active") {
            stat = "warning";
        }
        else if (data[i].Status === "Soft-Closed") {
            stat = "info";
        }
        let row = document.createElement("tr");
        row.className = "latestTicketsRows";

        let c1 = document.createElement("td");
        let c11 = document.createElement("span");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let divTd = document.createElement("div");
        divTd.style.height = "40px";
        divTd.style.overflow = "scroll";
        c1.className = "test1";
        c2.className = "test";
        c4.appendChild(divTd);
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");
        c11.className = "badge badge-" + stat;
        c11.innerHTML = data[i].Status;
        if (data[i].Status === "Canceled") {
            c11.className = "";
            c11.innerHTML = "<span style='background-color:grey; color:white;'>Canceled</span>"
        }
        c3.style.width = "10%";
        c2.style.width = "14%";
        c5.style.width = "11%";
        c6.style.width = "15%";
        c2.innerHTML = (data[i].Date);

        c3.innerHTML = "<b>" + data[i].Customer + "</b>";
        divTd.innerHTML = data[i].Title;
        c5.innerHTML = data[i].Owner;
        c6.innerHTML = data[i].Reference;

        c1.appendChild(c11);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        row.appendChild(c5);
        row.appendChild(c6);
        $(table).append(row);

    }
},
    updateCases : function (data,document, $) {

    $("#activeCasesNumber").html(data.Active);

    $("#unassignedCasesNumber").html(data.Unassigned);

    $("#OpenedCasesNumber").html(data.Opened);

    $("#ClosedCasesNumber").html(data.Closed);

},
    dailyCases: function(data, coords,document, $, chart_init) {
    let totalCases;
    let totalOpened = 0;
    let totalClosed = 0;
    let totalCanceled = 0;
    let totalUnassigned = 0;
    let totalActive = 0;

    let openedDaily = [];
    let closedDaily = [];
    let canceledDaily = [];
    let unassignedDaily = [];
    let activeDaily = [];


    totalOpened = totalOpened + parseInt(data.Opened);
    totalClosed = totalClosed + parseInt(data.Closed);
    totalCanceled = totalCanceled + parseInt(data.Canceled);
    totalUnassigned = totalUnassigned + parseInt(data.Unassigned);
    totalActive = totalActive + parseInt(data.Active);

    openedDaily.push(parseInt(data.Opened));
    closedDaily.push(parseInt(data.Closed));
    canceledDaily.push(parseInt(data.Canceled));
    unassignedDaily.push(parseInt(data.Unassigned));
    activeDaily.push(parseInt(data.Active));

    totalCases = totalOpened + totalClosed + totalCanceled + totalUnassigned + totalActive;

    $("#openedTickets").html("(" + totalOpened + " Tickets)");
    $("#openedWidth").css("width", (totalOpened / totalCases * 100));

    $("#closedTickets").html("(" + totalClosed + " Tickets)");
    $("#closedWidth").css("width", (totalClosed / totalCases * 100));


    $("#canceledTickets").html("(" + totalCanceled + " Tickets)");
    $("#canceledWidth").css("width", (totalCanceled / totalCases * 100));

    $("#unassignedTickets").html("(" + totalUnassigned + " Tickets)");
    $("#unassignedWidth").css("width", (totalUnassigned / totalCases * 100));

    $("#activeWidth").css("width", (totalActive / totalCases * 100));
    let daysSorted = [];
    if (coords === null) {
        let days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

        let goBackDays = 7;
        let today = new Date();

        for (let i = 0; i < goBackDays; i++) {
            let newDate = new Date(today.setDate(today.getDate() - 1));
            daysSorted.push(days[newDate.getDay()]);
        }
    } else if (coords.length === 1) {
        let temp = coords[0];
        coords[0] = 'previous';
        coords[1] = temp;
        coords[2] = 'next';
        daysSorted = coords.reverse();
    }
    else {
        let daysSorted = coords.reverse();
    }

    if (openedDaily.length === 1) {
        let tempOpen = openedDaily[0];
        let tempClosed = closedDaily[0];
        let tempCanceled = canceledDaily[0];
        let tempActive = activeDaily[0];

        openedDaily[0] = 0;
        closedDaily[0] = 0;
        canceledDaily[0] = 0;
        activeDaily[0] = 0;
        openedDaily[2] = 0;
        closedDaily[2] = 0;
        canceledDaily[2] = 0;
        activeDaily[2] = 0;

        openedDaily[1] = tempOpen;
        closedDaily[1] = tempClosed;
        canceledDaily[1] = tempCanceled;
        activeDaily[1] = tempActive;
    }
    data = {
        labels: daysSorted.reverse(), //['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Opened',
                backgroundColor: 'transparent',
                borderColor: $.brandInfo,
                pointHoverBackgroundColor: '#5bc0de',
                borderWidth: 2,
                data: openedDaily
            },
            {
                label: 'Closed',
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: closedDaily
            },
            {
                label: 'Canceled',
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: canceledDaily
            },
            {
                label: 'Active',
                backgroundColor: 'transparent',
                borderColor: $.brandWarning,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: activeDaily
            }
        ]
    };

    let options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value) {
                        return value;
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                }
            }]
        },
        elements: {
            point: {
                //radius: 0,
                //hitRadius: 10,
                //hoverRadius: 4,
                //hoverBorderWidth: 3,

                radius: 2,
                hitRadius: 10,
                hoverRadius: 3,
                hoverBorderWidth: 3,
            },
            line: {
                tension: 0
            }
        },
        legend: {
            display: false
        }
    };

    $('#main-chart').remove();

    $('#chartTrendDiv').append('<canvas id="main-chart"></canvas>');

    let ctx = document.getElementById('main-chart').getContext('2d');
    const { Chart } = chart_init;
    let mainChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

},
    vulTable: function (jsonevt,document, $) {
    let length = jsonevt.length;
    let maxCount = jsonevt[0].count;
    for (let i = 0; i < length; i++) {
        if (jsonevt[i].count > maxCount) {
            maxCount = jsonevt[i].count;
        }
    }
    $(".rowVul").remove();
    for (let i = 0; i < length; i++) {
        let rowInfo = {
            "tName": "",
            "attacker": "",
            "shn": "",
            "victim": "",
            "dhn": "",
            "severity": "",
            "count": ""
        };

        rowInfo.tName = jsonevt[i].threatid;
        rowInfo.attacker = jsonevt[i].src;
        rowInfo.shn = jsonevt[i].resolved_src;
        rowInfo.victim = jsonevt[i].dst;
        rowInfo.dhn = jsonevt[i].resolved_dst;
        rowInfo.severity = jsonevt[i].severity_of_threatid;
        rowInfo.count = jsonevt[i].count;

        let table = document.getElementById("vulTable");

        let row = document.createElement("tr");

        row.className = "rowVul";
        row.data = rowInfo;

        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");
        let c7 = document.createElement("td");

        if (rowInfo.severity === "critical") {
            c7.style.color = "red";
        } else if (rowInfo.severity === "high") {
            c7.style.color = "brown";
        } else if (rowInfo.severity === "medium") {
            c7.style.color = "orange";
        } else if (rowInfo.severity === "low") {
            c7.style.color = "#CD853F";
        } else if (rowInfo.severity === "informational") {
            c7.style.color = "blue";
        } else {
            c7.style.color = "purple";
        }

        c1.style.width = "30%";
        c2.style.width = "10%";
        c4.style.width = "10%";
        c6.style.width = "25%";
        c7.style.width = "25%";


        c1.style.fontSize = "0.85em";
        c2.style.fontSize = "0.85em";
        c3.style.fontSize = "0.85em";
        c4.style.fontSize = "0.85em";
        c5.style.fontSize = "0.85em";
        c6.style.fontSize = "0.85em";
        c7.style.fontSize = "0.85em";

        let percCount = (rowInfo.count / maxCount).toFixed(1) * 100;
        c1.innerHTML = rowInfo.tName;
        c2.innerHTML = rowInfo.shn;
        c3.innerHTML = rowInfo.attacker;
        c4.innerHTML = rowInfo.dhn;
        c5.innerHTML = rowInfo.victim;
        c6.innerHTML = "<div class='row'><div class='col-sm-3' style='text-align:right'>" + rowInfo.count + "</div>" +
            "<div class='progress progress-xs col-sm-6' style='height:10px; padding-left:7px !important;'>" +
            "<div class='progress-bar bg-danger' role='progressbar' style='width: " + percCount +
            "%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='" + maxCount + "'></div></div></div>";
        c7.innerHTML = rowInfo.severity;

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c4);
        row.appendChild(c6);
        row.appendChild(c7);

        $(table).append(row);
    }
},
    tableScrollSrcs: function(document, $) {
    let maxRows = 11;
    let table = document.getElementById("sourcesTable");
    let wrapper = table.parentNode;
    let rowsInTable = table.rows.length;
    let height = 0;

    if (rowsInTable > maxRows) {
        for (let i = 0; i < maxRows; i++) {
            height += table.rows[i].clientHeight;
        }
        wrapper.style.height = height + "px";
    }
},
    srcsTable: function(jsonevt, maxBytes, maxSessions,document, $) {
    let length = jsonevt.length;

    $(".rowClassSrcs").remove();
    //let placeRowInTable=1;
    for (let i = 0; i < length; i++) {
        let rowInfo = {
            "src": "",
            "resolvedSrc": "",
            "sessions": "",
            "bytes": ""
        };
        let intMaxBytes = maxBytes;
        rowInfo.src = jsonevt[i].src;
        rowInfo.resolvedSrc = jsonevt[i].resolved_src;
        rowInfo.sessions = jsonevt[i].sessions;
        rowInfo.bytes = jsonevt[i].bytes;
        let intBytes = rowInfo.bytes;
        if (rowInfo.bytes >= 1000000000) {
            rowInfo.bytes = rowInfo.bytes / 1000000000;
            rowInfo.bytes = "" + rowInfo.bytes.toFixed(1) + "G";
        } else if (rowInfo.bytes >= 100000000) {
            rowInfo.bytes = rowInfo.bytes / 100000000;
            rowInfo.bytes = "" + rowInfo.bytes.toFixed(1) + "M";
        } else {
            rowInfo.bytes = rowInfo.bytes / 100000;
            rowInfo.bytes = "" + rowInfo.bytes.toFixed(1) + "K";
        }

        if (maxBytes >= 1000000000) {
            maxBytes = maxBytes / 1000000000;
            maxBytes = "" + maxBytes + "G";
        } else if (maxBytes >= 100000000) {
            maxBytes = maxBytes / 100000000;
            maxBytes = "" + maxBytes + "M";
        }
        let percBytes = (intBytes / intMaxBytes).toFixed(2) * 100;
        let table = document.getElementById("sourcesTable");

        let row = document.createElement("tr");
        row.className = "rowClassSrcs";
        row.data = rowInfo;

        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");

        c1.style.width = "15%";
        c2.style.width = "15%";
        c3.style.width = "35%";
        c4.style.width = "35%";

        c1.style.fontSize = "0.85em";
        c2.style.fontSize = "0.85em";
        c3.style.fontSize = "0.85em";
        c4.style.fontSize = "0.85em";

        let intSessions = parseInt(rowInfo.sessions);
        let percSessions = (intSessions / parseInt(maxSessions)).toFixed(2) * 100;

        c1.innerHTML = rowInfo.resolvedSrc;
        c2.innerHTML = rowInfo.src;

        c3.innerHTML = "<div class='row'><div class='col-sm-3' style='text-align:right'>" + rowInfo.sessions +
            "</div><div class='progress progress-xs col-sm-6' style='height:10px; padding-left: 5px !important;'>" +
            "<div class='progress-bar bg-success spec' role='progressbar' style='width: " + percSessions +
            "%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='" + maxSessions + "'></div></div></div>";
        c4.innerHTML = "<div class='row'><div class='col-sm-3' style='text-align:right'>" + rowInfo.bytes
            + "</div><div class='progress progress-xs col-sm-6' style='height:10px; padding-left: 5px !important;'>" +
            "<div class='progress-bar bg-info' role='progressbar' style='width: " + percBytes +
            "%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='" + intMaxBytes + "'></div></div></div>";
        //console.log('percbytes: ' + percBytes);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        $(table).append(row);
        this.tableScrollSrcs();
    }
},
    delayGraph: function(data, val,document, $, chart_init) {
    let value = val;
    let dateNow = new Date();
    let hourNow = dateNow.getHours();
    let minuteNow = dateNow.getMinutes();
    let xaxis = [];
    let xCoord = hourNow + ":" + minuteNow;
    xaxis.push(xCoord);
    for (let i = 0; i < 30; i++) {
        minuteNow = minuteNow - 2;
        if (minuteNow < 0) {
            hourNow = hourNow - 1;
            minuteNow = 59;
        }
        xCoord = hourNow + ":" + minuteNow;
        xaxis.push(xCoord);
    }
    let xSorted = [];
    if (value === 24.0) {
        let days = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        let timeNow = new Date();
        let hrNow = timeNow.getHours();
        let hrsFirstPart = days.slice(hrNow, days.length);
        let hrsSecondPart = days.slice(0, hrNow + 1);
        xSorted = hrsFirstPart.concat(hrsSecondPart);
        xSorted.reverse();
    } else if (value === 1.0) {
        let dateNow = new Date();
        let hourNow = dateNow.getHours();
        let minuteNow = dateNow.getMinutes();
        xSorted = [];
        let xCoord = hourNow + ":" + minuteNow;
        xSorted.push(xCoord);
        for (let i = 0; i < 28; i++) {
            minuteNow = minuteNow - 2;
            if (minuteNow < 0) {
                hourNow = hourNow - 1;
                minuteNow = 59;
            }
            if (minuteNow < 10) {
                minuteNow = "0" + minuteNow;
            }
            xCoord = hourNow + ":" + minuteNow;
            xSorted.push(xCoord);
        }


    } else if (value === 144.0) {
        let timeNow = new Date();
        let hrNow = timeNow.getHours();
        let dateNow = timeNow.getDate();
        xSorted = [];
        for (let i = 0; i < 30; i++) {
            timeNow = new Date();
            let newDate = new Date(timeNow.setHours(timeNow.getHours() - (i * 6)));
            let month = monthNames[newDate.getMonth()];
            let day = newDate.getDate();
            let hour = newDate.getHours();
            let minutes = newDate.getMinutes();
            let strTime = hour + ":" + minutes;
            if ((hour < 6) || (i === 29)) {
                strTime = day + "/" + month;
            } else if ((hour > 6) && (hour < 12)) {
                hour = "6";
                minutes = "00";
                //strTime = hour+ ":" + minutes;
            } else if ((hour > 12) && (hour < 18)) {
                hour = "12";
                minutes = "00";
                //strTime = hour+ ":" + minutes;
            } else if (hour > 18) {
                hour = "18";
                minutes = "00";
                //strTime = hour+ ":" + minutes;
            }

            xSorted.push(strTime);
        }

    } else {
        let timeNow = new Date();
        let xSorted = [];
        for (let i = 0; i < 30; i++) {
            timeNow = new Date();
            let newDate = new Date(timeNow.setDate(timeNow.getDate() - (i)));
            let month = monthNames[newDate.getMonth()];
            let day = newDate.getDate();
            let strTime = day + "/" + month;
            xSorted.push(strTime);
        }
    }

    let lineChartData = {
        labels: xSorted.reverse(),
        datasets: [
            {
                label: 'Antarctica',
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.Antartica
            },
            {
                label: 'Australia',
                backgroundColor: 'transparent',
                borderColor: 'brown',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.Australia
            },
            {
                label: 'Brazil',
                backgroundColor: 'transparent',
                borderColor: 'yellow',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.Brazil
            },
            {
                label: 'Egypt',
                backgroundColor: 'transparent',
                borderColor: 'pink',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.Egypt
            },
            {
                label: 'Japan',
                backgroundColor: 'transparent',
                borderColor: 'blue',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.Japan
            },
            {
                label: 'UK',
                backgroundColor: 'transparent',
                borderColor: '#5FFFDD',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.UK
            },
            {
                label: 'USA',
                backgroundColor: 'transparent',
                borderColor: 'purple',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.USA
            },
            {
                label: 'UAE',
                backgroundColor: 'transparent',
                borderColor: '#347D65',
                borderWidth: 2,
                pointHoverBackgroundColor: '#fff',
                data: data.UAE
            }
        ]
    };
    let options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value) {
                        //indexDay=value;
                        return value;
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    //maxTicksLimit: 5,
                    //max: 200,
                    //min: 0
                }
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        }
    };
    let ctx = document.getElementById('delayCanvas');
    const { Chart } =  chart_init;
    let chart = new Chart(ctx, {
        type: 'line',
        data: lineChartData,
        options: options
    });

    options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
}

};