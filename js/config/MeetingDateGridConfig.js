
/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */

(function(w){

    var a = {};
    a.Url = "http://psch.mspshosting.com/ofr/Lists/Meeting%20Agenda";
    a.RestUrl = "http://psch.mspshosting.com/ofr/_api/web/lists/getbytitle('Meeting Agenda')/Items";
    a.Query = "$Select=Activity_x0020_Name, Types, Status, Title, Committees_x0020_Decision, Date/Title&$expand=Date";
    a.VisibleItems = 5;
    a.RowHeight = 30;
    a.HeaderHeight = 30;
    a.Configuration = "" +
        "<grid width='100%' " +
            "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems) + 10)+"'> " +
            "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                "<columns>" +
                    "<column " +
                        "headerStyleName='centerText' "+
                        "initialSortField='Date.Title' " +
                        "sortCompareFunction='MeetingDateGridController.sortCompareFunction' "+
                        "dataField='Date.Title' " +     // TODO : need to tell the correct the
                        "headerText='Meeting Date' />" +
                "</columns>" +
            "</level>" +
        "</grid>";
    w.MeetingDateGridConfig = a;
}(window));
