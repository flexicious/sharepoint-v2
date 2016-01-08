/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

(function(w){
    var ActivityNameEvent = function(type){
        if(!type)
            throw Error("type require");
        this.type = type;

        /**
         *
         * @type {null}
         */
        this.selectedActivity = null;
    };
    ActivityNameEvent.ACTIVITY_SELECTED = "ACTIVITY_SELECTED";

    w.ActivityNameEvent = ActivityNameEvent;
}(window));