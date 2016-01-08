/**
 * Created by 19.06.2013-7pm on 08-Jan-16.
 */

(function(w){

    var a = {};
    a.Url = "http://psch.mspshosting.com/ofr/Lists/Project%20Summary";
    a.RestUrl = "http://psch.mspshosting.com/ofr/_api/web/lists/getbytitle('Project Summary')/Items";
   // a.Query = "$Select=Department, Activity_x0020_Name, Owner, Sponsor, Phase, State, Health, Start, Est_x0020_Finish";
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
                                "dataField='Activity_x0020_Name' " +
                                "headerText='Activity Name' />" +
                        "</columns>" +
                    "</level>" +
            "</grid>";
    w.ActivitySummaryConfig = a;

}(window));