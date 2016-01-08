/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

var ActivitySummaryController = window.ActivitySummaryController = {};
ActivitySummaryController.grid = null;

ActivitySummaryController.dataProvider = null;

ActivitySummaryController.defaultFaultHandler = function(err){
    alert("Error occur while loading the data");
};

ActivitySummaryController.fetchActivitySummaryDetails = function(){
    Service.get(ActivitySummaryConfig.RestUrl + (ActivitySummaryConfig.Query ? "?"+ActivitySummaryConfig.Query : ""), undefined, function(res){
        ActivitySummaryController.dataProvider = res.d.results;
        ActivitySummaryController.grid.setDataProvider(res.d.results);
    }, ActivitySummaryController.defaultFaultHandler);
};

ActivitySummaryController.init = function(grid){
    ActivitySummaryController.grid = grid;
    ActivitySummaryController.fetchActivitySummaryDetails();

    EventManager.addEventListener(this, MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT, function(e){
        ActivitySummaryController.filterAndApplyData(e.selectedAgenda);
    });
};

ActivitySummaryController.filterAndApplyData = function(selectedAgenda){
    // TODO : need to apply

};

