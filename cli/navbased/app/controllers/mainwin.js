var args = arguments[0] || {};
var thisWin=$.mainwin;

function doClick(e) {
    var newWin=Alloy.createController('secondwin').getView();

    // if on iOS, open newWin inside the NavigationWindow; 
    // else, open it as an Activity
    if(OS_IOS){
    	Alloy.CFG.navWin.openWindow(newWin);
    }else{
    	newWin.open();
    }
}