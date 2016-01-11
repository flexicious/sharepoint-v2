/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

(function(w){

    var a = {};
    a.Url = "http://psch.mspshosting.com/ofr/Lists/Project%20Summary";
    a.RestUrl = "http://psch.mspshosting.com/ofr/_api/web/lists/getbytitle('Project Summary')/Items";
    //a.Query = "$Select=Department, Activity_x0020_Name, Owner, Sponsor, Phase, State, Health, Start, EstFinish";
    a.VisibleItems = 5;
    a.RowHeight = 30;
    a.HeaderHeight = 30;
    a.Configuration = "" +
            "<grid width='100%' " +
                 "height='"+ (a.HeaderHeight + (a.RowHeight * a.VisibleItems) + 10)+"'> " +
                    "<level rowHeight='"+ a.RowHeight+"' headerHeight='"+ a.HeaderHeight+"' >" +
                        "<columns>" +
                            "<column " +
                                "dataField='Department' " +
                                "headerText='Department' />" +
                            "<column " +
                                "dataField='ProjectName' " +
                                "headerText='Activity Name' />" +
                            "<column " +
                                "dataField='Owner' " +
                                "headerText='Owner' />" +
                            "<column " +
                                "dataField='Sponsor' " +
                                "headerText='Sponsor' />" +
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
                                "dataField='Start' " +
                                "headerText='Start' />" +
                            "<column " +
                                "dataField='EstFinish' " +
                                "headerText='EstFinish' />" +
                            "<column " +
                                "dataField='Description' " +
                                "headerText='Description' />" +
                        "</columns>" +
                    "</level>" +
            "</grid>";
    w.ActivitySummaryConfig = a;

}(window));