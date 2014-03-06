var thisWin=$.index;

// open function
function doopen(e){
    if (OS_ANDROID){
        var actionBarHelper = require('actionbarhelper')(thisWin);
        actionBarHelper.setTitle(L('mainwintitle'));
    }else{
        $.windowtitle.text=L('mainwintitle');
    }
}

$.index.open();