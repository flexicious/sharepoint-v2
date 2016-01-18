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

    EventManager.addEventListener(this, MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT, function(e){
        ActivityMeetingSummaryController.filterAndApply(e.selectedAgenda);
    });
};

ActivityMeetingSummaryController.filterAndApply = function(selectedAgenda){
    if(!selectedAgenda){
        ActivityMeetingSummaryController.grid.setDataProvider([]);
        return;
    }

    var dp = MeetingDateGridController.serviceResult;
    var selectedItems = [];
    for(var i = 0; i < dp.length; i++){
        if(dp[i]["Activity_x0020_Name"] == selectedAgenda["Activity_x0020_Name"]){
            selectedItems.push(dp[i]);
        }
    }
    ActivityMeetingSummaryController.grid.setDataProvider(selectedItems);

    var sort = new flexiciousNmsp.FilterSort();
    sort.sortColumn = "MDate.CDate";
    sort.sortCompareFunction = MeetingDateGridController.sortCompareFunction;
    sort.isAscending = false;
    ActivityMeetingSummaryController.grid.processSort([sort]);
};
