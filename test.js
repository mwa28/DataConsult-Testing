/*__________________________________________Configuration_____________________________________________________________*/
let now = new Date(2008,1,3,5,56,36);
sessionStorage.setItem('earliestDate',now.toISOString());
sessionStorage.setItem('datesTable',JSON.stringify([
    new Date(2008,5,3,8,56,39),
    new Date(2009,6,5,8,7,2),
    new Date(2008,1,3,5,56,36),
    new Date (2003,5,20,5,30,15)
]));
sessionStorage.setItem('allSites', JSON.stringify([
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
    {SiteID: "616", SiteName: "TESTING", SiteCountry: "lebanon", SiteCountryCode: "2"}]));
sessionStorage.setItem('allCountries', JSON.stringify([
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

]));
let monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let siteIndicator="exst";
$(document).ready(function() {
    $('#myModal').hide();
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
        siteIndicator = "exst";
    });
    $('#newSite').click(function(){
        $('#pickExtSite').hide(500);
        $('#fillNewSite').show(500);
        siteIndicator="new";
    });
    fillModal(JSON.parse(sessionStorage.getItem('allSites')), JSON.parse(sessionStorage.getItem('allCountries')));
});
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
/*__________________________________________Testing Next Button_______________________________________________________*/
                                                                                                                        /** Enhancement #1: Display results per page (10-20/page) instead of date range based*/
function nextDateButton(){
    let dateEarliest=sessionStorage.getItem('earliestDate');
    let dateEarly=new Date(dateEarliest);
    let dateFrom=new Date(dateEarly.getTime() - (30*86400000));
    $('#next').append(JSON.stringify({dateEarly, dateFrom}));
}
QUnit.test("Next Button Test", function (assert) {
    function test_next(next_range) {
        nextDateButton();
       assert.equal(document.getElementById('next').innerHTML, next_range,"The result should be " + next_range);
    }
    let next_date_range = "{\"dateEarly\":\"2008-02-03T03:56:36.000Z\",\"dateFrom\":\"2008-01-04T03:56:36.000Z\"}";
    if(sessionStorage.getItem('earliestDate')){
        test_next(next_date_range);
        $('#next').empty();
    }
    else {
        sessionStorage.setItem('earliestDate',now.toISOString());
        test_next(next_date_range);
        $('#next').empty();
    }
    sessionStorage.removeItem('earliestDate');
    sessionStorage.setItem('earliestDate', 'foo');
    next_date_range =  "{\"dateEarly\":null,\"dateFrom\":null}";
    test_next(next_date_range);
    $('#next').empty();

});

/*__________________________________________Testing Previous Button___________________________________________________*/
                                                                                                                        /** Issue: Unhandled less than 4 entries of datesTable size*/
function previousDateButton(){

    let arr=sessionStorage.getItem('datesTable');
    let jsonArr=JSON.parse(arr);
    jsonArr.pop();
    jsonArr.pop();
    let to=new Date(jsonArr[jsonArr.length-1]);
    let start=new Date(jsonArr[jsonArr.length-2]);
    jsonArr.pop();
    jsonArr.pop();
    jsonArr=JSON.stringify(jsonArr);
    sessionStorage.setItem('datesTable',jsonArr);
    return {to,start};
}
QUnit.test("Previous Button Test", function(assert){
    function test_previous(previous_range){
        assert.equal(JSON.stringify(previousDateButton()),JSON.stringify(previous_range), "The result should be "
            + JSON.stringify(previous_range));
    }
    sessionStorage.setItem('previousLatestDate',now.toISOString());
    let prev_date_range ={
        "to": new Date(2009,6,5,8,7,2),
        "start": new Date(2008,5,3,8,56,39)

    };
    test_previous(prev_date_range);
});

/*__________________________________________Testing First Button______________________________________________________*/
                                                                                                                        /** Issue: Unhandled no tickets with date range */
function firstDateButton() {
    let to = new Date();
    let start = new Date(to.getTime() - (150 * 86400000));
    return { to: to, start: start};
}
QUnit.test("First Button Test", function(assert){
    function test_first(previous_range){
        assert.equal(JSON.stringify(firstDateButton()),JSON.stringify(previous_range), "The result should be "
            + JSON.stringify(previous_range));
    }
    sessionStorage.setItem('previousLatestDate',now.toISOString());
    let date_range =
        {
            to: new Date(),
            start: new Date(new Date().getTime() - (150 * 86400000))
        };
    test_first(date_range);
});
                                                                                                                        /** Enhancement: Add !==NaN to handle Invalid Dates*/

/*__________________________________________Testing Insights__________________________________________________________*/
                                                                                                                        /** Error Handling: Uncaught TypeError after getElementByID in removing nodeRelatives for null (no element found)*/
function insightsClient(data){

    let catDiv=document.getElementById('catDiv');
    catDiv.className="col-sm-6 col-lg-6";

    $('#issues').empty();

    for (let i = 0; i < data.length; i++) {
        let percIssues = (data[i].CategoryCount / data[i].TotalCategories) * 100;

        if(data[i].Category==="Undefined"){
            data[i].Category="Other";
        }
        if(typeof data[i].CategoryCount==="object"){
            data[i].CategoryCount=0;
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
}
QUnit.test("Insights Test", function(assert){
    function test_insightsClient(data, expected_data){
        insightsClient(data);
        assert.deepEqual(document.getElementById('issues').innerHTML,expected_data, "The results should be null");
    }
    function test_insightsClientInequal(data, expected_data){
        insightsClient(data);
        assert.notEqual(document.getElementById('issues').innerHTML,expected_data,"The results should be null");
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

/*__________________________________________Testing Create Ticket Button______________________________________________*/
                                                                                                                        /** Labels Mismatch in form*/
                                                                                                                        /** Enhancement: Add document ready at start of main.js file */
$(document).ready(function(){
    $("#createTicket").click(function(){
        let title=document.getElementById("title");
        title.innerHTML="";
        let dscription=document.getElementById("description").value;
        dscription.innerHTML="";
        let product=document.getElementById("product").value;
        product.innerHTML="";
        let serialNum=document.getElementById("serial").value;
        serialNum.innerHTML="";
        let sites=sessionStorage.getItem('allSites');
        sites=JSON.parse(sites);
        //console.log(sites);
        $('#site').empty();
        /** Error Handling: Uncaught null sites error*/
        for(let i=0;i<sites.length;i++){
            $('#site').append( '<option value="'+sites[i].SiteID+'">' +sites[i].SiteName+' | <span class="text-muted">'
                +sites[i].SiteCountry+'</span></option>' );
        }
        let technology=document.getElementById("technology").value;
        technology.innerHTML="";
        let severity=document.getElementById("severity").value;
        severity.innerHTML="";
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen...");
        $("#chooseFile").val("");
        $("#myModal").show();
        });
    $('#buttonSubmit').click(function() {
        let title=document.getElementById("title").value;
        let dscription=document.getElementById("description").value;
        let product=document.getElementById("product").value;
        let serialNum=document.getElementById("serial").value;
        let site=document.getElementById("site").value;
        let technology=document.getElementById("technology").value;
        let severity=document.getElementById("severity").value;
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
            $("#myModal").modal('toggle');
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
            let country=document.getElementById("country");
            let countryName=country.value;
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
            $("#myModal").modal('toggle');
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
});
QUnit.test("New Ticket Test", function(assert){
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
        assert.equal(document.getElementById('ticket').innerHTML, expected_data, "The expected form result is "
            + expected_data);

    }
    let expected_data= "{\"title\":\"test\",\"description\":\"test\",\"product\":\"test\",\"serial\":\"test\"," +
                        "\"site\":\"549\",\"technology\":\"33\",\"severity\":\"1\"}";

    test_buttonSubmit(expected_data);
    $('#closeModal').trigger('click');
    $('#ticket').empty();
});

/*__________________________________________Testing Latest Tickets Row________________________________________________*/
                                                                                                                        /** td.width deprecated, td.style.width*/
                                                                                                                        /** Enhancement: Sort by date to improve pagination and easier navigation (can display results by pages)*/
function latestTickets(data) {
    if(data.length!==0){
        /**Error handling: Case when data length = 1*/
        sessionStorage.setItem("earliestDate",data[data.length-1].Date);
        let arr=sessionStorage.getItem('datesTable');
        if(arr===""){
            let dates=[data[data.length-1].Date,data[0].Date];
            sessionStorage.setItem("datesTable",JSON.stringify(dates));
        }
        else{
            let arrJSON=JSON.parse(arr);
            arrJSON.push(data[data.length-1].Date,data[0].Date);
            sessionStorage.setItem("datesTable",JSON.stringify(arrJSON));
        }
    }
    let table = document.getElementById("ticketsTable");
    $(".latestTicketsRows").remove();
    for (let i = 0; i < data.length; i++) {
        let stat = "success";
        if (data[i].Status === "Active") {
            stat = "warning";
        }
        else if(data[i].Status==="Soft-Closed"){
            stat = "info";
        }
        let row = document.createElement("tr");
        row.className="latestTicketsRows";

        let c1 = document.createElement("td");
        let c11 = document.createElement("span");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let divTd=document.createElement("div");
        divTd.style.height="40px";
        divTd.style.overflow="scroll";
        c1.className = "test1";
        c2.className="test";
        c4.appendChild(divTd);
        let c5 = document.createElement("td");
        let c6 = document.createElement("td");
        c11.className = "badge badge-" + stat;
        c11.innerHTML = data[i].Status;
        if(data[i].Status==="Canceled"){
            c11.className = "";
            c11.innerHTML="<span style='background-color:grey; color:white;'>Canceled</span>"
        }
        c3.style.width="10%";
        c2.style.width="14%";
        c5.style.width="11%";
        c6.style.width="15%";
        c2.innerHTML =(data[i].Date);

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
QUnit.test("Latest Ticket Test", function(assert){
    function test_latestTickets(data,expected_data, type) {
        latestTickets(data);
        if(type === 'date'){
        let test = $('.test').first()[0].innerHTML;
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

/*__________________________________________Testing Update Cases______________________________________________________*/
                                                                                                                        /** Error Handling: Invalid Data*/
function updateCases(data) {

    $("#activeCasesNumber").html(data.Active);

    $("#unassignedCasesNumber").html(data.Unassigned);

    $("#OpenedCasesNumber").html(data.Opened);

    $("#ClosedCasesNumber").html(data.Closed);

}
QUnit.test("Update Cases Test", function(assert){
    function test_updateCases(data,expected_data) {
        updateCases(data);
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

/*__________________________________________Testing Update Cases______________________________________________________*/
                                                                                                                        /** Error Handling: Negative Values */
function dailyCases(data,coords) {
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
    if(coords===null){
        let days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

        let goBackDays = 7;
        let today = new Date();

        for (let i = 0; i < goBackDays; i++) {
            let newDate = new Date(today.setDate(today.getDate() - 1));
            daysSorted.push(days[newDate.getDay()]);
        }
    }else if(coords.length===1){
        let temp=coords[0];
        coords[0]='previous';
        coords[1]=temp;
        coords[2]='next';
        daysSorted=coords.reverse();
    }
    else{
        let daysSorted=coords.reverse();
    }

    if(openedDaily.length===1){
        let tempOpen=openedDaily[0];
        let tempClosed=closedDaily[0];
        let tempCanceled=canceledDaily[0];
        let tempActive=activeDaily[0];

        openedDaily[0]=0;
        closedDaily[0]=0;
        canceledDaily[0]=0;
        activeDaily[0]=0;
        openedDaily[2]=0;
        closedDaily[2]=0;
        canceledDaily[2]=0;
        activeDaily[2]=0;

        openedDaily[1]=tempOpen;
        closedDaily[1]=tempClosed;
        canceledDaily[1]=tempCanceled;
        activeDaily[1]=tempActive;
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
    let mainChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

}
QUnit.test("Daily Cases Test", function(assert){
    function test_dailyCases(data,expected_data) {
        let coords = null;
        dailyCases(data,coords);
        let test = $('#openedTickets').html();
        assert.equal(test,expected_data, "The result should be " + expected_data);
    }
    let data = {Opened: -56, Unassigned: 45, Closed: 3, Active: 5, Canceled: 3};
    let expected_data="(-56 Tickets)";
    test_dailyCases(data,expected_data);
});

/*__________________________________________Testing Vul Table_________________________________________________________*/
                                                                                                                        /** Error Handling: No restriction on type of of values*/
function vulTable(jsonevt) {
    let length = jsonevt.length;
    let maxCount=jsonevt[0].count;
    for(let i=0;i<length;i++){
        if(jsonevt[i].count>maxCount){
            maxCount=jsonevt[i].count;
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
}
QUnit.test("Vul Table Test", function(assert){
    function test_vulTable(data,expected_data) {
        vulTable(data);
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

    $(document).ready(function (){
        $('#vulTable').hide()
    });
});

/*__________________________________________Testing Src Table_________________________________________________________*/
                                                                                                                        /** Error Handling: Displaying incorrect data NaN instead of not showing row*/
function tableScrollSrcs() {
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
}
function srcsTable(jsonevt, maxBytes,maxSessions) {
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
        console.log('percbytes: ' + percBytes);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        $(table).append(row);
        tableScrollSrcs();
    }
}
QUnit.test("Src Table Test", function(assert){
    function test_srcTable(data,expected_data) {
        srcsTable(data,256500000,250);
        let test = $('.spec:first').width() / $('.spec:first').parent().width() * 100;
        console.log(test);
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
    let expected_data="\t\n" +
        "47.994144144144144";
    test_srcTable(data,expected_data);
    $('#sources').hide()
});

/*__________________________________________Testing Delay Graph_______________________________________________________*/
                                                                                                                        /** Error Handling: Unclean data*/
                                                                                                                        /** Variable Declaration: Undefined since definition in if-else states*/
function delayGraph(data,val) {
    let value = val;
    let dateNow=new Date();
    let hourNow=dateNow.getHours();
    let minuteNow=dateNow.getMinutes();
    let xaxis=[];
    let xCoord=hourNow+":"+minuteNow;
    xaxis.push(xCoord);
    for(let i=0;i<30;i++){
        minuteNow=minuteNow-2;
        if(minuteNow<0){
            hourNow=hourNow-1;
            minuteNow=59;
        }
        xCoord=hourNow+":"+minuteNow;
        xaxis.push(xCoord);
    }
    let xSorted=[];
    if (value === 24.0) {
        let days = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        let timeNow = new Date();
        let hrNow = timeNow.getHours();
        let hrsFirstPart = days.slice(hrNow, days.length);
        let hrsSecondPart = days.slice(0, hrNow + 1);
        xSorted = hrsFirstPart.concat(hrsSecondPart);
        xSorted.reverse();
    } else if (value === 1.0) {
        let dateNow=new Date();
        let hourNow=dateNow.getHours();
        let minuteNow=dateNow.getMinutes();
        xSorted=[];
        let xCoord=hourNow+":"+minuteNow;
        xSorted.push(xCoord);
        for(let i=0;i<28;i++){
            minuteNow=minuteNow-2;
            if(minuteNow<0){
                hourNow=hourNow-1;
                minuteNow=59;
            }
            if(minuteNow<10){
                minuteNow="0"+minuteNow;
            }
            xCoord=hourNow+":"+minuteNow;
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
            let strTime = hour+ ":" + minutes;
            if((hour<6)||(i===29)){
                strTime = day + "/" + month;
            }else if((hour>6)&&(hour<12)){
                hour="6";
                minutes="00";
                //strTime = hour+ ":" + minutes;
            }else if((hour>12)&&(hour<18)){
                hour="12";
                minutes="00";
                //strTime = hour+ ":" + minutes;
            }else if(hour>18){
                hour="18";
                minutes="00";
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
QUnit.test("Delay Graph Test", function(assert){
    function test_delayGraph(data,expected_data) {
        delayGraph(data,1.0);
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
    $('#delayTable').hide()
});
