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
    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_SELECTED , function(e){

    });

    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_DATA_LOADED, function(e){
        ActivityMeetingSummaryController.grid.setDataProvider(e.data);
    });
};
