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
        /**
         * can share across over the controller
         */
        MeetingDateGridController.serviceResult = res.d.results;
        MeetingDateGridController.filterAndApply(res.d.results);
    }, MeetingDateGridController.defaultFaultHandler);
};

MeetingDateGridController.init = function(grid){
    MeetingDateGridController.grid = grid;
    MeetingDateGridController.fetchMeetingDates();
    MeetingDateGridController.grid.addEventListener(this, flexiciousNmsp.Constants.EVENT_CHANGE, function(event){
        var meetingDateEvent = new MeetingDateEvent(MeetingDateEvent.MEETING_DATE_SELECTED);
        meetingDateEvent.selectedDates = MeetingDateGridController.grid.getSelectedItems();
        EventManager.dispatchEvent(meetingDateEvent);
    });
};

MeetingDateGridController.filterAndApply = function(dp){
    var selectedDates = [];
    var dump = [];
    for(var i = 0; i < dp.length; i++){
        if(dump.indexOf(dp[i]["MDate"]["CDate"]) == -1){
            dump.push(dp[i]["MDate"]["CDate"]);
            selectedDates.push({ MDate : { CDate : dp[i]["MDate"]["CDate"]}});
        }
    }

    MeetingDateGridController.grid.setDataProvider(selectedDates);

    var sort = new flexiciousNmsp.FilterSort();
    sort.sortColumn = "MDate.CDate";
    sort.sortCompareFunction = MeetingDateGridController.sortCompareFunction;
    sort.isAscending = true;
    MeetingDateGridController.grid.processSort([sort]);

};

MeetingDateGridController.sortCompareFunction = function(a,b){
    return Date.parse(a.MDate.CDate) - Date.parse(b.MDate.CDate);
};
