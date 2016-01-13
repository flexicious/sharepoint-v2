/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

(function(w){

    var a = {};
    a.Url = "http://psch.mspshosting.com/ofr/Lists/Project%20Summary";
    a.RestUrl = "http://psch.mspshosting.com/ofr/_api/web/lists/getbytitle('Project Summary')/Items";
    //a.Query = "$Select=Department, Activity_x0020_Name, Owner, Sponsor, Phase, State, Health, Start, EstFinish";
    a.VisibleItems = 1;
    a.RowHeight = 30;
    a.HeaderHeight = 30;
    a.Configuration1 = "" +
            "<grid width='100%' " +
                 "noDataMessage='0' " +
                 "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems))+"'> " +
                    "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                        "<columns>" +
                            "<column " +
                                "dataField='Project_x0020_Department' " +
                                "headerText='Department' />" +
                            "<column " +
                                "dataField='ProjectName' " +
                                "headerText='Activity Name' />" +
                        "</columns>" +
                    "</level>" +
            "</grid>";

    a.Configuration2 = "" +
            "<grid width='100%' " +
                "noDataMessage='0' " +
                "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems))+"'> " +
                "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                    "<columns>" +
                        "<column " +
                            "dataField='Owner' " +
                            "headerText='Owner' />" +
                        "<column " +
                            "dataField='Sponsor' " +
                            "headerText='Sponsor' />" +
                    "</columns>" +
                "</level>" +
            "</grid>";

    a.Configuration3 = "" +
            "<grid width='100%' " +
                "noDataMessage='0' " +
                "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems))+"'> " +
                "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                    "<columns>" +
                        "<column " +
                            "dataField='Phase' " +
                            "headerText='Phase' />" +
                        "<column " +
                            "dataField='State' " +
                            "headerText='State' />" +
                        "<column " +
                            "dataField='Health' " +
                            "headerText='Health' />" +
                        "<column " +
                            "dataField='Project_x0020_Start' " +
                            "headerText='Start' />" +
                        "<column " +
                            "dataField='EstFinish' " +
                            "headerText='EstFinish' />" +
                    "</columns>" +
                "</level>" +
            "</grid>";

    a.Configuration4 = "" +
            "<grid width='100%' " +
                "noDataMessage='0' variableRowHeight='true' enableFillerRows='true' horizontalGridLines='false' " +
                 "height='"+ (a.HeaderHeight + (a.RowHeight * (a.VisibleItems + 2)))+"'> " +
                "<level headerHeight='"+ a.HeaderHeight+"' >" +
                    "<columns>" +
                        "<column " +
                            "wordWrap='true' "+
                            "dataField='Description' " +
                            "headerText='Description' />" +
                    "</columns>" +
                "</level>" +
            "</grid>";
    w.ActivitySummaryConfig = a;

}(window));