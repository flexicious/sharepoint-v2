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
         MeetingAgendaSummaryController.grid.setDataProvider(e.selectedActivity);
    });

    grid.addEventListener(this, flexiciousNmsp.Constants.EVENT_CHANGE , function(e){
        var meetingAgendaEvent = new MeetingAgendaEvent(MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT);
        var selectedItems = MeetingAgendaSummaryController.grid.getSelectedItems();
        meetingAgendaEvent.selectedAgenda = selectedItems.length ? selectedItems[selectedItems.length-1] : [];
        meetingAgendaEvent.selectedAgendas = selectedItems;
        EventManager.dispatchEvent(meetingAgendaEvent);
    });
};
