/**
 * Created by 19.06.2013-7pm on 07-Jan-16.
 */
/**
 * a global object for event dispaching purpose
 */
(function(w){

    var EventManager = function(){
        flexiciousNmsp.EventDispatcher.apply(this);
    };
    EventManager.prototype.typeName = EventManager.typeName = "EventManager";
    EventManager.prototype = new flexiciousNmsp.EventDispatcher();
    w.EventManager = new EventManager();

}(window));