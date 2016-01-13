/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var ActivityMeetingSummaryController = window.ActivityMeetingSummaryController = {};
ActivityMeetingSummaryController.grid = null;

ActivityMeetingSummaryController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

ActivityMeetingSummaryController.init = function(grid){
    ActivityMeetingSummaryController.grid = grid;

    EventManager.addEventListener(this, ActivityNameEvent.ACTIVITY_SELECTED, function(e){
        ActivityMeetingSummaryController.filterAndApply(e.selectedActivity);
    });
};

ActivityMeetingSummaryController.filterAndApply = function(selectedActivity){
    // TODO : if not care the meeting date, then pick the data from the meeting grid dataprovider
    //var dp = MeetingDateGridController.dataProvider;
    var selectedDates = MeetingDateGridController.grid.getSelectedItems();
    selectedActivity = flexiciousNmsp.UIUtils.extractPropertyValues(selectedActivity, "Activity_x0020_Name");
    // TODO not sure,  filter based on dates toooooo
    var selectedItems = [];
    for(var i = 0; i < selectedDates.length; i++){
        if(selectedActivity.indexOf(selectedDates[i]["Activity_x0020_Name"]) != -1){
            selectedItems.push(selectedDates[i]);
        }
    }

    ActivityMeetingSummaryController.grid.setDataProvider(selectedItems);

    var sort = new flexiciousNmsp.FilterSort();
    sort.sortColumn = "Date.Title";
    sort.sortCompareFunction = MeetingDateGridController.sortCompareFunction;
    sort.isAscending = false;
    ActivityMeetingSummaryController.grid.processSort([sort]);
};
