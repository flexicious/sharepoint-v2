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

    });

    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_DATA_LOADED, function(e){
        ActivityNameGridController.grid.setDataProvider(e.data);
    });
};
