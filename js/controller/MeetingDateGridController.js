/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var MeetingDateGridController = window.MeetingDateGridController = {};
MeetingDateGridController.grid = null;

MeetingDateGridController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

MeetingDateGridController.fetchMeetingDates = function(){
    Service.get(MeetingDateGridConfig.RestUrl+(MeetingDateGridConfig.Query? "?"+MeetingDateGridConfig.Query : ""), undefined , function(res){
        MeetingDateGridController.grid.setDataProvider(res.d.results);
        var sort = new flexiciousNmsp.FilterSort();
        sort.sortColumn = "Date.Title";
        sort.sortCompareFunction = MeetingDateGridController.sortCompareFunction;
        sort.isAscending = true;
        MeetingDateGridController.grid.processSort([sort]);

        var meetingEvent = new MeetingDateEvent(MeetingDateEvent.MEETING_DATE_DATA_LOADED);
        meetingEvent.data = res.d.results;
        EventManager.dispatchEvent(meetingEvent);

    }, MeetingDateGridController.defaultFaultHandler);
};

MeetingDateGridController.init = function(grid){
    MeetingDateGridController.grid = grid;
    MeetingDateGridController.fetchMeetingDates();
    MeetingDateGridController.grid.addEventListener(this, flexiciousNmsp.Constants.EVENT_CHANGE, function(event){
        var meetingDateEvent = new MeetingDateEvent(MeetingDateEvent.MEETING_DATE_SELECTED);
        meetingDateEvent.selectedDate = MeetingDateGridController.grid.getSelectedItems();
        EventManager.dispatchEvent(meetingDateEvent);
    });
};

MeetingDateGridController.sortCompareFunction = function(a,b){
    return Date.parse(a.Date.Title) - Date.parse(b.Date.Title);
};
