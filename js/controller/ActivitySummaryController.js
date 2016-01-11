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
    }, ActivitySummaryController.defaultFaultHandler);
};

ActivitySummaryController.init = function(grid){
    ActivitySummaryController.grid = grid;
    ActivitySummaryController.fetchActivitySummaryDetails();

    EventManager.addEventListener(this, MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT, function(e){
        ActivitySummaryController.filterAndApplyData(e.selectedAgenda);
    });

    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_SELECTED , function(e){
        // need to reset the grid on the data selection in the meeting date grid.
        ActivitySummaryController.grid.setDataProvider([]);
    });
};

ActivitySummaryController.filterAndApplyData = function(selectedAgenda){
    if(!selectedAgenda)
        return;
    for(var i = 0; i < ActivitySummaryController.dataProvider.length; i++){
        if(selectedAgenda["Activity_x0020_Name"] == ActivitySummaryController.dataProvider[i]["ProjectName"]) {
            ActivitySummaryController.grid.setDataProvider([ActivitySummaryController.dataProvider[i]]);
            break;
        }
    }
};

