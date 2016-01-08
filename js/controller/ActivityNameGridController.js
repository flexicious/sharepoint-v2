/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var ActivityNameGridController = window.ActivityNameGridController = {};
ActivityNameGridController.grid = null;

ActivityNameGridController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

ActivityNameGridController.init = function(grid){
    ActivityNameGridController.grid = grid;
    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_SELECTED , function(e){
        ActivityNameGridController.grid.setDataProvider(e.selectedDate);
        grid.addEventListener(this, flexiciousNmsp.Constants.EVENT_CHANGE, function(e){
            var activityNameEvent = new ActivityNameEvent(ActivityNameEvent.ACTIVITY_SELECTED);
            activityNameEvent.selectedActivity = ActivityNameGridController.grid.getSelectedItems();
            EventManager.dispatchEvent(activityNameEvent);
        });
    });
};
