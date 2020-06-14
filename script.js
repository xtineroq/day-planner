$(document).ready(function() {

    var workHours = [ 
        {
            id: "0",
            hour: "9:00",
            time: "09",
            meridiem: "am",
            plan: ""
        },
        {
            id: "1",
            hour: "10:00",
            time: "10",
            meridiem: "am",
            plan: ""
        },
        {
            id: "2",
            hour: "11:00",
            time: "11",
            meridiem: "am",
            plan: ""
        },
        {
            id: "3",
            hour: "12:00",
            time: "12",
            meridiem: "pm",
            plan: ""
        },
        {
            id: "4",
            hour: "1:00",
            time: "13",
            meridiem: "pm",
            plan: ""
        },
        {
            id: "5",
            hour: "2:00",
            time: "14",
            meridiem: "pm",
            plan: ""
        },
        {
            id: "6",
            hour: "3:00",
            time: "15",
            meridiem: "pm",
            plan: ""
        },
        {
            id: "7",
            hour: "4:00",
            time: "16",
            meridiem: "pm",
            plan: ""
        },
        {
            id: "8",
            hour: "5:00",
            time: "17",
            meridiem: "pm",
            plan: ""
        },
        
    ]

    // display current date in the header
    function headerDate() {
        var currentDate = moment().format("dddd, MMMM Do YYYY");
        $("#currentDay").text(currentDate);
    }

    // call header date
    headerDate();

    // display current time in the header
    function headerTime() {
        var currentTime = moment().format("h:mm a");
        $("#currentTime").text(currentTime);
    }

    // call header time
    headerTime();

    // saves entry to localStorage
    function saveMyPlan() {
        localStorage.setItem("workHours", JSON.stringify(workHours));
    }

    // displays data in the localStorage
    function displayMyPlan() {
        workHours.forEach(function (timeBlock) {
            $(`#${timeBlock.id}`).val(timeBlock.plan);
        });
    }

    // displays existing localStorage data if there's any
    function initialize() {
        var storedData = JSON.parse(localStorage.getItem("workHours"));

        if (storedData) {
            workHours = storedData;
        }

        saveMyPlan();
        displayMyPlan();
    }



    workHours.forEach(function(block) {

        // creates row of time blocks
        var hourRow = $("<div>").attr("class", "row no-gutters");
        $(".container").append(hourRow);

        // creates first column and display hour and meridiem
        var timeColumn = $("<div>").text(`${block.hour}${block.meridiem}`).attr("class", "col-12 col-md-2 hour");

        // creates second column
        var dataColumn = $("<div>").attr("class", "col-10 col-md-9 description");

        var plannerData = $("<textarea>").attr("class", "myData");
        dataColumn.append(plannerData);

        plannerData.attr("id", block.id);
        if (block.time < moment().format("HH")) {
            plannerData.attr("class", "past").prop("disabled", true);
        } else if (block.time === moment().format("HH")) {
            plannerData.attr("class", "present");
        } else if (block.time > moment().format("HH")) {
            plannerData.attr("class", "future");
        }

        // creates third column and save button
        var saveColumn = $("<button>").attr("class", "col-2 col-md-1 saveBtn");
        var saveIcon = $("<i class='far fa-save fa-lg'></i>");
        saveColumn.data("index", block.id);
        saveIcon.data("index", block.id);

        saveColumn.append(saveIcon);

        hourRow.append(timeColumn, dataColumn, saveColumn);
    })

    // loads any existing localStorage data
    initialize();


    // saves new data in localStorage
    $("#schedule").on("click", function(e) {
        e.preventDefault();

        if(event.target.matches("button") || event.target.matches("i")) {
            var userEntry = $("#"+ $(e.target).data("index")).val();
            var planIndex = $(e.target).data("index");

            objIndex = workHours.findIndex((obj => obj.id == planIndex));

            workHours[objIndex].plan = userEntry;
        }

        saveMyPlan();
    })

    // Clear button function
    $(".btn-danger").on("click", function clearPlanner() {
        // Clear all inputs
        $(".row").val("");

        // Clear localStorage
        localStorage.clear();

        //Reloads the page
        location.reload();
    });

});