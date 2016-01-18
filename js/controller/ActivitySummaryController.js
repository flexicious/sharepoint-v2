/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

var ActivitySummaryController = window.ActivitySummaryController = {};
ActivitySummaryController.grid = null;

ActivitySummaryController.dataProvider = null;

ActivitySummaryController.defaultFaultHandler = function(err){
    //alert("Error occur while loading the data");
};

ActivitySummaryController.fetchActivitySummaryDetails = function(){
    Service.get(ActivitySummaryConfig.RestUrl + (ActivitySummaryConfig.Query ? "?"+ActivitySummaryConfig.Query : ""), undefined, function(res){
        ActivitySummaryController.dataProvider = res.d.results;
    }, ActivitySummaryController.defaultFaultHandler);
};

ActivitySummaryController.init = function(grids){
    ActivitySummaryController.grid1 = grids[0];
    ActivitySummaryController.grid2 = grids[1];
    ActivitySummaryController.grid3 = grids[2];
    ActivitySummaryController.grid4 = grids[3];
    ActivitySummaryController.fetchActivitySummaryDetails();

    EventManager.addEventListener(this, MeetingAgendaEvent.MEETING_AGENDA_SELECT_EVENT, function(e){
        ActivitySummaryController.filterAndApplyData(e.selectedAgenda);
    });

    EventManager.addEventListener(this, MeetingDateEvent.MEETING_DATE_SELECTED , function(e){
        // need to reset the grid on the data selection in the meeting date grid.
        ActivitySummaryController.resetGridDataProvider();
    });
};

ActivitySummaryController.resetGridDataProvider = function(){
    ActivitySummaryController.grid1.setDataProvider([]);
    ActivitySummaryController.grid2.setDataProvider([]);
    ActivitySummaryController.grid3.setDataProvider([]);
    ActivitySummaryController.grid4.setDataProvider([]);
};

ActivitySummaryController.filterAndApplyData = function(selectedAgenda){
    if(!selectedAgenda || !ActivitySummaryController.dataProvider || !ActivitySummaryController.dataProvider.length) {
        ActivitySummaryController.resetGridDataProvider();
        return;
    }
    for(var i = 0; i < ActivitySummaryController.dataProvider.length; i++){
        if(selectedAgenda["Activity_x0020_Name"] == ActivitySummaryController.dataProvider[i]["ProjectName"]) {
            ActivitySummaryController.grid1.setDataProvider([ActivitySummaryController.dataProvider[i]]);
            ActivitySummaryController.grid2.setDataProvider([ActivitySummaryController.dataProvider[i]]);
            ActivitySummaryController.grid3.setDataProvider([ActivitySummaryController.dataProvider[i]]);
            ActivitySummaryController.grid4.setDataProvider([ActivitySummaryController.dataProvider[i]]);
            break;
        }
    }
};

