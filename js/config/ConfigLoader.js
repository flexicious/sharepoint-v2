/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

var ConfigLoader = {};


$(document).ready(function(){
    ConfigLoader.load();
});

ConfigLoader.load = function(){
    var meetingDateGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.MEETING_DATE_GRID_ID), {
        configuration : MeetingDateGridConfig.Configuration
    });
    MeetingDateGridController.init(meetingDateGrid);

    var activityNameDateGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_NAME_GRID_ID), {
        configuration : ActivityNameGridConfig.Configuration
    });
    ActivityNameGridController.init(activityNameDateGrid);

    var meetingAgendaSummaryDateGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.MEETING_AGENDA_SUMMARY_GRID_ID), {
        configuration : MeetingAgendaSummaryConfig.Configuration
    });
    MeetingAgendaSummaryController.init(meetingAgendaSummaryDateGrid);

    var activityMeetingSummaryGrid = new flexiciousNmsp.FlexDataGrid(document.getElementById(Constants.ACTIVITY_MEETING_SUMMARY_GRID_ID), {
        configuration : ActivityMeetingSummaryConfig.Configuration
    });
    ActivityMeetingSummaryController.init(activityMeetingSummaryGrid);
};