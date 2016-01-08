/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

(function(w){

    var MeetingAgendaEvent = function(type){
        if(!type)
            throw Error("type require");
        this.type = type;

        /**
         *
         * @type {null}
         */
        this.selectedAgenda = null;
    };

    MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT = "MEETING_AGENDA_SELECT_EVENT";

    w.MeetingAgendaEvent = MeetingAgendaEvent;

}(window));