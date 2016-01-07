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
    /*EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_SELECTED , function(e){

    });*/

    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_DATA_LOADED, function(e){
         MeetingAgendaSummaryController.grid.setDataProvider(e.data); // TODO : load the data into the grid, when project selected in the activity name grid.
    });
};
