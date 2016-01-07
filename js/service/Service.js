/**
 * Created by 19.06.2013-7pm on 09-Oct-15.
 */

var Service =  window.Service = {};
Service.get = function(url,param, onSuccess, onError){
    $.ajax({
        url : url,
        params : param,
        headers: {
            "accept": "application/json;odata=verbose"
        },
        type : "GET",
        success : onSuccess,
        error : onError,
        beforeSend : function(){$("#loader").show();},
        complete : function(){$("#loader").hide();}
    });
};

Service.post = function(url, param, onSuccess, onError){
    $.ajax({
        url : url,
        data : JSON.stringify(param),
        headers: {
            "accept": "application/json;odata=verbose"
        },
        type : "POST",
        success : onSuccess,
        error : onError,
        beforeSend : function(){$("#loader").show();},
        complete : function(){$("#loader").hide();}
    });
};

Service.addItem = function(url, item, requestDigest, successCallback, errorCallback){
    var headers =  {
        "accept": "application/json;odata=verbose",
            "X-RequestDigest": requestDigest,
            "content-Type": "application/json;odata=verbose"
    };

    $.ajax({
        url : url,
        type : "POST",
        data : JSON.stringify(item),
        headers : headers,
        success : successCallback,
        error : errorCallback,
        beforeSend : function(){$("#loader").show();},
        complete : function(){$("#loader").hide();}
    });
};


Service.updateItem = function(url, item , etag, id, requestDigest, successCallback, errorCallback){
    var headers =  {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": requestDigest,
        "content-Type": "application/json;odata=verbose",
        "X-HTTP-Method": "MERGE",
        "If-Match" : etag
    };

    $.ajax({
        url : url+"('"+id+"')",
        type: "POST",
        data : JSON.stringify(item),
        headers : headers,
        success : successCallback,
        error : errorCallback,
        beforeSend : function(){$("#loader").show();},
        complete : function(){$("#loader").hide();}
    });
};

Service.deleteItem = function(url, item, requestDigest, successCallback, errorCallback){
    var  headers  =  {
        "accept": "application/json;odata=verbose",
            "X-RequestDigest": requestDigest,
            "If-Match": item.__metadata.etag
    };
    $.ajax({
        url : url+"('"+item.Id+"')",
        type: "DELETE",
        headers : headers,
        success : successCallback,
        error : errorCallback,
        beforeSend : function(){$("#loader").show();},
        complete : function(){$("#loader").hide();}
    });
};
