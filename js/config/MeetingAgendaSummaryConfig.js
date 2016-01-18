
/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

(function(w){

    var a = {};
    a.Url = "http://psch.mspshosting.com/ofr/Lists/Meeting%20Agenda";
    a.RestUrl = "http://psch.mspshosting.com/ofr/_api/web/lists/getbytitle('Meeting Agenda')/Items";
    a.VisibleItems = 5;
    a.RowHeight = 30;
    a.HeaderHeight = 30;
    a.Configuration = "" +
        "<grid width='100%' " +
            "selectionMode='singleRow' " +
            "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems) + 10)+"' > " +
            "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                "<columns>" +
                    "<column " +
                        "dataField='MDate.CDate' " +
                        "sortCompareFunction='MeetingDateGridController.sortCompareFunction' "+
                        "headerText='Date' />" +
                    "<column " +
                        "dataField='Activity_x0020_Name' " +
                        "sortCompareFunction='ActivityNameGridController.sortCompareFunction' "+
                        "headerText='Activity Name' />" +
                    "<column " +
                        "dataField='Types' " +
                        "headerText='Type' />" +
                    "<column " +
                        "dataField='Title' " +
                        "headerText='Title' />" +
                    "<column " +
                        "dataField='Status' " +
                        "headerText='Status' />" +
                "</columns>" +
            "</level>" +
        "</grid>";
    w.MeetingAgendaSummaryConfig = a;
}(window));
