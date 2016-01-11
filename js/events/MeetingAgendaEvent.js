/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

(function(w){

    var MeetingAgendaEvent = function(type){
        if(!type)
            throw Error("type require");
        this.type = type;

        /**
         * typically last selected agenda from the grid.
         * @type {null}
         */
        this.selectedAgenda = null;

        /**
         * typically all selected agenda items from the grid
         * @type {null}
         */
        this.selectedAgendas = null;
    };

    MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT = "MEETING_AGENDA_SELECT_EVENT";

    w.MeetingAgendaEvent = MeetingAgendaEvent;

}(window));