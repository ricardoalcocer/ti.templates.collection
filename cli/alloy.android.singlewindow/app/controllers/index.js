var thisWin=$.index;
thisWin.title="Main Window";

function doClick(e) {
    alert(e.source.title);
}

thisWin.addEventListener('open',function(e){
	// load the ActionBar Helper Library
	ABH=require('actionbarhelper').actionBarHelper; 

	// obtain an instance to the library
    actionBarHelper=new ABH(thisWin);

    // reload the Activivity's menu
    actionBarHelper.reloadMenu();

    // change the Activity's title
    actionBarHelper.setTitle(thisWin.title);
})

thisWin.open();