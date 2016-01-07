/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var MeetingDateGridController = window.MeetingDateGridController = {};
MeetingDateGridController.grid = null;

MeetingDateGridController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

MeetingDateGridController.fetchMeetingDates = function(){
    Service.get(ActivityNameGridConfig.RestUrl, undefined , function(res){
        MeetingDateGridController.grid.setDataProvider(res.d.results);
        var meetingEvent = new MeetingDateEvent(MeetingDateEvent.MEETING_DATE_DATA_LOADED);
        meetingEvent.data = res.d.results;
        EventManager.dispatchEvent(meetingEvent);
    }, MeetingDateGridController.defaultFaultHandler);
};

MeetingDateGridController.init = function(grid){
    MeetingDateGridController.grid = grid;
    MeetingDateGridController.fetchMeetingDates();
};
