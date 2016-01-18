/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var MeetingAgendaSummaryController = window.MeetingAgendaSummaryController = {};
MeetingAgendaSummaryController.grid = null;

MeetingAgendaSummaryController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

MeetingAgendaSummaryController.init = function(grid){
    MeetingAgendaSummaryController.grid = grid;

    EventManager.addEventListener(this, ActivityNameEvent.ACTIVITY_SELECTED, function(e){
         MeetingAgendaSummaryController.filterAndApply(e.selectedActivity);
    });

    grid.addEventListener(this, flexiciousNmsp.Constants.EVENT_CHANGE , function(e){
        var meetingAgendaEvent = new MeetingAgendaEvent(MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT);
        var selectedItems = MeetingAgendaSummaryController.grid.getSelectedItems();
        meetingAgendaEvent.selectedAgenda = selectedItems.length ? selectedItems[selectedItems.length-1] : null;
        meetingAgendaEvent.selectedAgendas = selectedItems;
        EventManager.dispatchEvent(meetingAgendaEvent);
    });
};

MeetingAgendaSummaryController.filterAndApply = function(selectedActivity){
    var selectedDates = MeetingDateGridController.grid.getSelectedItems();

    selectedDates = flexiciousNmsp.UIUtils.extractPropertyValues(selectedDates, "MDate");
    selectedDates = flexiciousNmsp.UIUtils.extractPropertyValues(selectedDates, "CDate");
    selectedActivity = flexiciousNmsp.UIUtils.extractPropertyValues(selectedActivity, "Activity_x0020_Name");

    var selectedItems = [], dp = MeetingDateGridController.serviceResult;
    for(var i = 0; i < dp.length; i++){
        if(selectedActivity.indexOf(dp[i]["Activity_x0020_Name"]) != -1 && selectedDates.indexOf(dp[i]["MDate"]["CDate"]) != -1){
            selectedItems.push(dp[i]);
        }
    }

    MeetingAgendaSummaryController.grid.setDataProvider(selectedItems);

    // sort stuff
    var sorts = [];
    var sort = new flexiciousNmsp.FilterSort();
    sort.sortColumn = "MDate.CDate";
    sort.sortCompareFunction = MeetingDateGridController.sortCompareFunction;
    sort.isAscending = false;
    sorts.push(sort);

    sort = new flexiciousNmsp.FilterSort();
    sort.sortColumn  = "Activity_x0020_Name";
    sort.sortCompareFunction = ActivityNameGridController.sortCompareFunction;
    sort.isAscending = true;
    sorts.push(sort);

    MeetingAgendaSummaryController.grid.processSort(sorts);


};