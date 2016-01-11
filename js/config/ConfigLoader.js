/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var ConfigLoader = {};


$(document).ready(function(){
    ConfigLoader.load();
});

ConfigLoader.load = function(){
    var meetingDateGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.MEETING_DATE_GRID_ID), {
        configuration : MeetingDateGridConfig.Configuration,
        delegate : window
    });
    MeetingDateGridController.init(meetingDateGrid);

    var activityNameDateGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_NAME_GRID_ID), {
        configuration : ActivityNameGridConfig.Configuration,
        delegate : window
    });
    ActivityNameGridController.init(activityNameDateGrid);

    var meetingAgendaSummaryDateGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.MEETING_AGENDA_SUMMARY_GRID_ID), {
        configuration : MeetingAgendaSummaryConfig.Configuration,
        delegate : window
    });
    MeetingAgendaSummaryController.init(meetingAgendaSummaryDateGrid);

    var activitySummaryGrid1 = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_SUMMARY_GRID_ID_1), {
        configuration : ActivitySummaryConfig.Configuration1,
        delegate : window
    });
    var activitySummaryGrid2 = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_SUMMARY_GRID_ID_2), {
        configuration : ActivitySummaryConfig.Configuration2,
        delegate : window
    });
    var activitySummaryGrid3 = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_SUMMARY_GRID_ID_3), {
        configuration : ActivitySummaryConfig.Configuration3,
        delegate : window
    });
    var activitySummaryGrid4 = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_SUMMARY_GRID_ID_4), {
        configuration : ActivitySummaryConfig.Configuration4,
        delegate : window
    });
    ActivitySummaryController.init([activitySummaryGrid1,activitySummaryGrid2,activitySummaryGrid3,activitySummaryGrid4]);

    var activityMeetingSummaryGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_MEETING_SUMMARY_GRID_ID), {
        configuration : ActivityMeetingSummaryConfig.Configuration,
        delegate : window
    });
    ActivityMeetingSummaryController.init(activityMeetingSummaryGrid);
};