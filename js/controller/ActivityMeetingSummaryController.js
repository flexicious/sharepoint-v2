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
        ActivityMeetingSummaryController.grid.setDataProvider(e.selectedAgendas);
        var sort = new flexiciousNmsp.FilterSort();
        sort.sortColumn = "Date.Title";
        sort.sortCompareFunction = MeetingDateGridController.sortCompareFunction;
        sort.isAscending = false;
        ActivityMeetingSummaryController.grid.processSort([sort]);
    });
};
