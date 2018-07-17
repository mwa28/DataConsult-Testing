"use strict";

var _typeof =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function(obj) {
            return typeof obj;
        }
        : function(obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };

function nextDateButton() {
    var dateEarly = new Date(earliestDate);
    var dateFrom = new Date(dateEarly.getTime() - 30 * 86400000);
    $("#next").append(
        JSON.stringify({ dateEarly: dateEarly, dateFrom: dateFrom })
    );
}
function previousDateButton() {
    var jsonArr = JSON.parse(datesTable);
    jsonArr.pop();
    jsonArr.pop();
    var to = new Date(jsonArr[jsonArr.length - 1]);
    var start = new Date(jsonArr[jsonArr.length - 2]);
    jsonArr.pop();
    jsonArr.pop();
    jsonArr = JSON.stringify(jsonArr);
    datesTable = jsonArr;
    return { to: to, start: start };
}
function firstDateButton() {
    var to = new Date();
    var start = new Date(to.getTime() - 150 * 86400000);
    return { to: to, start: start };
}
function insightsClient(data) {
    var catDiv = document.getElementById("catDiv");
    catDiv.className = "col-sm-6 col-lg-6";

    $("#issues").empty();

    for (var i = 0; i < data.length; i++) {
        var percIssues = (data[i].CategoryCount / data[i].TotalCategories) * 100;

        if (data[i].Category === "Undefined") {
            data[i].Category = "Other";
        }
        if (_typeof(data[i].CategoryCount) === "object") {
            data[i].CategoryCount = 0;
        }
        var issues =
            "  <li>" +
            ' <span class="title">' +
            data[i].Category +
            "</span>" +
            ' <span class="value">' +
            data[i].CategoryCount +
            " " +
            "   </span>" +
            '<div class="bars">' +
            ' <div class="progress progress-xs">' +
            '<div class="" role="progressbar" style="background-color:#FFCE56 !important; width: ' +
            percIssues +
            '%" aria-valuenow="8" ' +
            'aria-valuemin="0" aria-valuemax="100"></div>' +
            " </div>" +
            "  </div>" +
            "</li>";

        $("#issues").append(issues);
    }
}
function latestTickets(data) {
    if (data.length !== 0) {
        /**Error handling: Case when data length = 1*/
        earliestDate = data[data.length - 1].Date;
        var arr = datesTable;
        if (arr === "") {
            var dates = [data[data.length - 1].Date, data[0].Date];
            datesTable = JSON.stringify(dates);
        } else {
            var arrJSON = JSON.parse(arr);
            arrJSON.push(data[data.length - 1].Date, data[0].Date);
            datesTable = JSON.stringify(arrJSON);
        }
    }
    var table = document.getElementById("ticketsTable");
    $(".latestTicketsRows").remove();
    for (var i = 0; i < data.length; i++) {
        var stat = "success";
        if (data[i].Status === "Active") {
            stat = "warning";
        } else if (data[i].Status === "Soft-Closed") {
            stat = "info";
        }
        var row = document.createElement("tr");
        row.className = "latestTicketsRows";

        var c1 = document.createElement("td");
        var c11 = document.createElement("span");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        var c4 = document.createElement("td");
        var divTd = document.createElement("div");
        divTd.style.height = "40px";
        divTd.style.overflow = "scroll";
        c1.className = "test1";
        c2.className = "test";
        c4.appendChild(divTd);
        var c5 = document.createElement("td");
        var c6 = document.createElement("td");
        c11.className = "badge badge-" + stat;
        c11.innerHTML = data[i].Status;
        if (data[i].Status === "Canceled") {
            c11.className = "";
            c11.innerHTML =
                "<span style='background-color:grey; color:white;'>Canceled</span>";
        }
        c3.style.width = "10%";
        c2.style.width = "14%";
        c5.style.width = "11%";
        c6.style.width = "15%";
        c2.innerHTML = data[i].Date;

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
}
function updateCases(data) {
    $("#activeCasesNumber").html(data.Active);

    $("#unassignedCasesNumber").html(data.Unassigned);

    $("#OpenedCasesNumber").html(data.Opened);

    $("#ClosedCasesNumber").html(data.Closed);
}
function dailyCases(data, coords) {
    var totalCases = void 0;
    var totalOpened = 0;
    var totalClosed = 0;
    var totalCanceled = 0;
    var totalUnassigned = 0;
    var totalActive = 0;

    var openedDaily = [];
    var closedDaily = [];
    var canceledDaily = [];
    var unassignedDaily = [];
    var activeDaily = [];

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

    totalCases =
        totalOpened + totalClosed + totalCanceled + totalUnassigned + totalActive;

    $("#openedTickets").html("(" + totalOpened + " Tickets)");
    $("#openedWidth").css("width", (totalOpened / totalCases) * 100);

    $("#closedTickets").html("(" + totalClosed + " Tickets)");
    $("#closedWidth").css("width", (totalClosed / totalCases) * 100);

    $("#canceledTickets").html("(" + totalCanceled + " Tickets)");
    $("#canceledWidth").css("width", (totalCanceled / totalCases) * 100);

    $("#unassignedTickets").html("(" + totalUnassigned + " Tickets)");
    $("#unassignedWidth").css("width", (totalUnassigned / totalCases) * 100);

    $("#activeWidth").css("width", (totalActive / totalCases) * 100);
    var daysSorted = [];
    if (coords === null) {
        var days = ["M", "T", "W", "T", "F", "S", "S"];

        var goBackDays = 7;
        var today = new Date();

        for (var i = 0; i < goBackDays; i++) {
            var newDate = new Date(today.setDate(today.getDate() - 1));
            daysSorted.push(days[newDate.getDay()]);
        }
    } else if (coords.length === 1) {
        var temp = coords[0];
        coords[0] = "previous";
        coords[1] = temp;
        coords[2] = "next";
        daysSorted = coords.reverse();
    } else {
        var _daysSorted = coords.reverse();
    }

    if (openedDaily.length === 1) {
        var tempOpen = openedDaily[0];
        var tempClosed = closedDaily[0];
        var tempCanceled = canceledDaily[0];
        var tempActive = activeDaily[0];

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
                label: "Opened",
                backgroundColor: "transparent",
                borderColor: $.brandInfo,
                pointHoverBackgroundColor: "#5bc0de",
                borderWidth: 2,
                data: openedDaily
            },
            {
                label: "Closed",
                backgroundColor: "transparent",
                borderColor: $.brandSuccess,
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: closedDaily
            },
            {
                label: "Canceled",
                backgroundColor: "transparent",
                borderColor: $.brandSuccess,
                pointHoverBackgroundColor: "#fff",
                borderWidth: 1,
                borderDash: [8, 5],
                data: canceledDaily
            },
            {
                label: "Active",
                backgroundColor: "transparent",
                borderColor: $.brandWarning,
                pointHoverBackgroundColor: "#fff",
                borderWidth: 1,
                borderDash: [8, 5],
                data: activeDaily
            }
        ]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        callback: function callback(value) {
                            return value;
                        }
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5
                    }
                }
            ]
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
                hoverBorderWidth: 3
            },
            line: {
                tension: 0
            }
        },
        legend: {
            display: false
        }
    };

    $("#main-chart").remove();

    $("#chartTrendDiv").append('<canvas id="main-chart"></canvas>');

    var ctx = document.getElementById("main-chart").getContext("2d");
    var mainChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
}
function vulTable(jsonevt) {
    var length = jsonevt.length;
    var maxCount = jsonevt[0].count;
    for (var i = 0; i < length; i++) {
        if (jsonevt[i].count > maxCount) {
            maxCount = jsonevt[i].count;
        }
    }
    $(".rowVul").remove();
    for (var _i = 0; _i < length; _i++) {
        var rowInfo = {
            tName: "",
            attacker: "",
            shn: "",
            victim: "",
            dhn: "",
            severity: "",
            count: ""
        };

        rowInfo.tName = jsonevt[_i].threatid;
        rowInfo.attacker = jsonevt[_i].src;
        rowInfo.shn = jsonevt[_i].resolved_src;
        rowInfo.victim = jsonevt[_i].dst;
        rowInfo.dhn = jsonevt[_i].resolved_dst;
        rowInfo.severity = jsonevt[_i].severity_of_threatid;
        rowInfo.count = jsonevt[_i].count;

        var table = document.getElementById("vulTable");

        var row = document.createElement("tr");

        row.className = "rowVul";
        row.data = rowInfo;

        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        var c4 = document.createElement("td");
        var c5 = document.createElement("td");
        var c6 = document.createElement("td");
        var c7 = document.createElement("td");

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

        var percCount = (rowInfo.count / maxCount).toFixed(1) * 100;
        c1.innerHTML = rowInfo.tName;
        c2.innerHTML = rowInfo.shn;
        c3.innerHTML = rowInfo.attacker;
        c4.innerHTML = rowInfo.dhn;
        c5.innerHTML = rowInfo.victim;
        c6.innerHTML =
            "<div class='row'><div class='col-sm-3' style='text-align:right'>" +
            rowInfo.count +
            "</div>" +
            "<div class='progress progress-xs col-sm-6' style='height:10px; padding-left:7px !important;'>" +
            "<div class='progress-bar bg-danger' role='progressbar' style='width: " +
            percCount +
            "%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='" +
            maxCount +
            "'></div></div></div>";
        c7.innerHTML = rowInfo.severity;

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c4);
        row.appendChild(c6);
        row.appendChild(c7);

        $(table).append(row);
    }
}
function tableScrollSrcs() {
    var maxRows = 11;
    var table = document.getElementById("sourcesTable");
    var wrapper = table.parentNode;
    var rowsInTable = table.rows.length;
    var height = 0;

    if (rowsInTable > maxRows) {
        for (var i = 0; i < maxRows; i++) {
            height += table.rows[i].clientHeight;
        }
        wrapper.style.height = height + "px";
    }
}
function srcsTable(jsonevt, maxBytes, maxSessions) {
    var length = jsonevt.length;

    $(".rowClassSrcs").remove();
    //let placeRowInTable=1;
    for (var i = 0; i < length; i++) {
        var rowInfo = {
            src: "",
            resolvedSrc: "",
            sessions: "",
            bytes: ""
        };
        var intMaxBytes = maxBytes;
        rowInfo.src = jsonevt[i].src;
        rowInfo.resolvedSrc = jsonevt[i].resolved_src;
        rowInfo.sessions = jsonevt[i].sessions;
        rowInfo.bytes = jsonevt[i].bytes;
        var intBytes = rowInfo.bytes;
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
        var percBytes = (intBytes / intMaxBytes).toFixed(2) * 100;
        var table = document.getElementById("sourcesTable");

        var row = document.createElement("tr");
        row.className = "rowClassSrcs";
        row.data = rowInfo;

        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");
        var c4 = document.createElement("td");

        c1.style.width = "15%";
        c2.style.width = "15%";
        c3.style.width = "35%";
        c4.style.width = "35%";

        c1.style.fontSize = "0.85em";
        c2.style.fontSize = "0.85em";
        c3.style.fontSize = "0.85em";
        c4.style.fontSize = "0.85em";

        var intSessions = parseInt(rowInfo.sessions);
        var percSessions = (intSessions / parseInt(maxSessions)).toFixed(2) * 100;

        c1.innerHTML = rowInfo.resolvedSrc;
        c2.innerHTML = rowInfo.src;

        c3.innerHTML =
            "<div class='row'><div class='col-sm-3' style='text-align:right'>" +
            rowInfo.sessions +
            "</div><div class='progress progress-xs col-sm-6' style='height:10px; padding-left: 5px !important;'>" +
            "<div class='progress-bar bg-success spec' role='progressbar' style='width: " +
            percSessions +
            "%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='" +
            maxSessions +
            "'></div></div></div>";
        c4.innerHTML =
            "<div class='row'><div class='col-sm-3' style='text-align:right'>" +
            rowInfo.bytes +
            "</div><div class='progress progress-xs col-sm-6' style='height:10px; padding-left: 5px !important;'>" +
            "<div class='progress-bar bg-info' role='progressbar' style='width: " +
            percBytes +
            "%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='" +
            intMaxBytes +
            "'></div></div></div>";
        //console.log('percbytes: ' + percBytes);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        $(table).append(row);
        tableScrollSrcs();
    }
}
function delayGraph(data, val) {
    var value = val;
    var dateNow = new Date();
    var hourNow = dateNow.getHours();
    var minuteNow = dateNow.getMinutes();
    var xaxis = [];
    var xCoord = hourNow + ":" + minuteNow;
    xaxis.push(xCoord);
    for (var i = 0; i < 30; i++) {
        minuteNow = minuteNow - 2;
        if (minuteNow < 0) {
            hourNow = hourNow - 1;
            minuteNow = 59;
        }
        xCoord = hourNow + ":" + minuteNow;
        xaxis.push(xCoord);
    }
    var xSorted = [];
    if (value === 24.0) {
        var days = [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
        ];
        var timeNow = new Date();
        var hrNow = timeNow.getHours();
        var hrsFirstPart = days.slice(hrNow, days.length);
        var hrsSecondPart = days.slice(0, hrNow + 1);
        xSorted = hrsFirstPart.concat(hrsSecondPart);
        xSorted.reverse();
    } else if (value === 1.0) {
        var _dateNow = new Date();
        var _hourNow = _dateNow.getHours();
        var _minuteNow = _dateNow.getMinutes();
        xSorted = [];
        var _xCoord = _hourNow + ":" + _minuteNow;
        xSorted.push(_xCoord);
        for (var _i2 = 0; _i2 < 28; _i2++) {
            _minuteNow = _minuteNow - 2;
            if (_minuteNow < 0) {
                _hourNow = _hourNow - 1;
                _minuteNow = 59;
            }
            if (_minuteNow < 10) {
                _minuteNow = "0" + _minuteNow;
            }
            _xCoord = _hourNow + ":" + _minuteNow;
            xSorted.push(_xCoord);
        }
    } else if (value === 144.0) {
        var _timeNow = new Date();
        var _hrNow = _timeNow.getHours();
        var _dateNow2 = _timeNow.getDate();
        xSorted = [];
        for (var _i3 = 0; _i3 < 30; _i3++) {
            _timeNow = new Date();
            var newDate = new Date(_timeNow.setHours(_timeNow.getHours() - _i3 * 6));
            var month = monthNames[newDate.getMonth()];
            var day = newDate.getDate();
            var hour = newDate.getHours();
            var minutes = newDate.getMinutes();
            var strTime = hour + ":" + minutes;
            if (hour < 6 || _i3 === 29) {
                strTime = day + "/" + month;
            } else if (hour > 6 && hour < 12) {
                hour = "6";
                minutes = "00";
                //strTime = hour+ ":" + minutes;
            } else if (hour > 12 && hour < 18) {
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
        var _timeNow2 = new Date();
        var _xSorted = [];
        for (var _i4 = 0; _i4 < 30; _i4++) {
            _timeNow2 = new Date();
            var _newDate = new Date(_timeNow2.setDate(_timeNow2.getDate() - _i4));
            var _month = monthNames[_newDate.getMonth()];
            var _day = _newDate.getDate();
            var _strTime = _day + "/" + _month;
            _xSorted.push(_strTime);
        }
    }

    var lineChartData = {
        labels: xSorted.reverse(),
        datasets: [
            {
                label: "Antarctica",
                backgroundColor: "transparent",
                borderColor: "red",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.Antartica
            },
            {
                label: "Australia",
                backgroundColor: "transparent",
                borderColor: "brown",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.Australia
            },
            {
                label: "Brazil",
                backgroundColor: "transparent",
                borderColor: "yellow",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.Brazil
            },
            {
                label: "Egypt",
                backgroundColor: "transparent",
                borderColor: "pink",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.Egypt
            },
            {
                label: "Japan",
                backgroundColor: "transparent",
                borderColor: "blue",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.Japan
            },
            {
                label: "UK",
                backgroundColor: "transparent",
                borderColor: "#5FFFDD",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.UK
            },
            {
                label: "USA",
                backgroundColor: "transparent",
                borderColor: "purple",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.USA
            },
            {
                label: "UAE",
                backgroundColor: "transparent",
                borderColor: "#347D65",
                borderWidth: 2,
                pointHoverBackgroundColor: "#fff",
                data: data.UAE
            }
        ]
    };
    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        callback: function callback(value) {
                            //indexDay=value;
                            return value;
                        }
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                        //maxTicksLimit: 5,
                        //max: 200,
                        //min: 0
                    }
                }
            ]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3
            }
        }
    };
    var ctx = document.getElementById("delayCanvas");
    var chart = new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: options
    });

    options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    };
}
