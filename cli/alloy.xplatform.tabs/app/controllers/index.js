function doopen(){
	// Here we set the App Title in the ActionBar (Android Only)
	if (OS_ANDROID){
		var activity=$.tabgroup.getActivity();
		if (activity){
			var ab=activity.actionBar;
			if (ab){
				ab.title=L('apptitle','Default app title');
			}else{
				console.log('Unable to access ActionBar');
			}
		}else{
			console.log('Unable to access activity');
		}
	}	
}

// open the tabgroup
$.tabgroup.open();
