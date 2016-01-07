/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */


(function(w){
    var MeetingDateEvent = function(type) {
        if(!type)
            throw Error("type require");
        this.type = type;
        this.selectedDate = null;
        this.data = null;
    };

    MeetingDateEvent.MEETING_DATE_SELECTED = "MEETING_DATE_SELECTED";
    MeetingDateEvent.MEETING_DATE_DATA_LOADED = "MEETING_DATE_DATA_LOADED";
    w.MeetingDateEvent = MeetingDateEvent;
}(window));
