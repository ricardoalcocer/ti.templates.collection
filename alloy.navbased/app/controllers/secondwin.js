var args = arguments[0] || {};
var thisWin=$.secondwin;

function dosetup(){
	// the Android Activity needs to be created in order to access the ActionBar
	if (OS_ANDROID){
		var actionBarHelper = require('actionbarhelper')(thisWin);  
		actionBarHelper.setUpAction(function(e){
			$.secondwin.close();
		})
	}
}