
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
            "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems) + 10)+"' " +
            "selectionMode='single'> " +
            "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                "<columns>" +
                    "<column " +
                        "dataField='Date.Title' " +     // TODO : need to tell the correct date field
                        "headerText='Date' />" +
                    "<column " +
                        "dataField='Activity_x0020_Name' " +     // TODO : need to tell the correct date field
                        "headerText='Activity Name' />" +
                    "<column " +
                        "dataField='Types' " +     // TODO : need to tell the correct date field
                        "headerText='Type' />" +
                    "<column " +
                        "dataField='Title' " +     // TODO : need to tell the correct date field
                        "headerText='Title' />" +
                    "<column " +
                        "dataField='Status' " +     // TODO : need to tell the correct date field
                        "headerText='Status' />" +
                "</columns>" +
            "</level>" +
        "</grid>";
    w.MeetingAgendaSummaryConfig = a;
}(window));
