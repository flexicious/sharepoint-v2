/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var ActivityNameGridController = window.ActivityNameGridController = {};
ActivityNameGridController.grid = null;

ActivityNameGridController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

ActivityNameGridController.init = function(grid){
    ActivityNameGridController.grid = grid;
    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_SELECTED , function(e){
        ActivityNameGridController.grid.setDataProvider(ActivityNameGridController.getUniqueListByName(e.selectedDates));
        var sort = new flexiciousNmsp.FilterSort();
        sort.sortColumn  = "Activity_x0020_Name";
        sort.sortCompareFunction = ActivityNameGridController.sortCompareFunction;
        sort.isAscending = true;
        ActivityNameGridController.grid.processSort([sort]);
    });

    grid.addEventListener(this, flexiciousNmsp.Constants.EVENT_CHANGE, function(e){
        var activityNameEvent = new ActivityNameEvent(ActivityNameEvent.ACTIVITY_SELECTED);
        activityNameEvent.selectedActivity = ActivityNameGridController.grid.getSelectedItems();
        EventManager.dispatchEvent(activityNameEvent);
    });
};

ActivityNameGridController.getUniqueListByName = function(selectedDates) {
    // list of agenda for selected dates.
    var meetingAgendas = [];
    var dp = MeetingDateGridController.serviceResult, i = 0;

    for (var k = 0; k < selectedDates.length; k++) {
        for (i = 0; i < dp.length; i++) {
            if (dp[i]["MDate"]["CDate"] == selectedDates[k]["MDate"]["CDate"])
                meetingAgendas.push(dp[i]);
        }
    }

    var selectedItems = [];
    var dump = [];
    for(i = 0; i < meetingAgendas.length; i++){
        if(dump.indexOf(meetingAgendas[i]["Activity_x0020_Name"]) == -1){
            dump.push(meetingAgendas[i]["Activity_x0020_Name"]);
            selectedItems.push({Activity_x0020_Name : meetingAgendas[i]["Activity_x0020_Name"]});
        }
    }
    dump = null;
    return selectedItems;
};

ActivityNameGridController.sortCompareFunction = function(a,b){
    return a["Activity_x0020_Name"] < b["Activity_x0020_Name"] ? -1 : a["Activity_x0020_Name"] == b["Activity_x0020_Name"] ? 0 : 1;
};