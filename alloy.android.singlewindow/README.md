# Android Single Window Starter Template

![screenshot](http://s20.postimg.org/b0nxzwvpp/android_single_window.png)

## The code
This template contains:

* **index.xml - The basic screen definition**
* **index.tss - The stylesheet**
* **index.js - Actual code for the main screen**
* **actionbarhelper.js (external CommonJS library explained below)**
* **i18n (internationalization) sample**
	* the i18n folder contains sample folders for English (en) and Spanish (es).  If you plan for your app to be used by international users you should consider placing all you app captions in these files.

## Use-cases

This template is the ideal place to start any Android-only App, setting the ground for further development.  Pair this with the [Android View Pager Module](https://marketplace.appcelerator.com/apps/2228#!overview) to achieve a 100% native Android experience.

The template is configured to work in both Portrait and Landscape modes.  To lock it to a particular orientation simply open **/styles/index.tss** and configure this line:

     orientationModes: [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT,Ti.UI.PORTRAIT]
     
## Notes
This template will run on Android devices/emulators with Android version 3.0 and above.

## Holo Themes

This template uses ** Theme.Holo.Light ** as a default Holo theme.  You can change your Holo theme to ** Theme.Holo ** or ** Theme.Holo.Light.DarkActionBar ** (Available with API Level 14 and up) by editing the ** tiapp.xml **, and look for the <application> tag inside the Android manifest.

## Modules and libraries

This template contains the following external modules:

### A. actionbarhelper.js

This project includes ** /lib/actionbarhelper.js **, a small convenience class to manage the ActionBar.  Inside any Window controller, add a function to your open event like so:

    $.index.addEventListener('open',function(e){
	    ABH=require('actionbarhelper').actionBarHelper;
        actionBarHelper=new ABH($.index);
        actionBarHelper.reloadMenu();
        actionBarHelper.setTitle(thisWin.title);
    })
    
Check the [source code](https://github.com/ricardoalcocer/tiactionbarhelper/blob/master/app/lib/actionbarhelper.js) for additional methods.

## Building

### A. Make file

This template contains a convenient Makefile to facilitate launching the app on emulator or device.  Simply go to the app's folder through your Terminal and type:

    make d
    
to send the app to your connected Android device, or

    make e
    
to display a list of available emulators.

### B. Studio
To send the app to emulator or device using Studio, click on the Run icon.

![build_studio](http://s20.postimg.org/mhhbunsst/launch_studio.png)


### C. Titanium CLI

If you'd like to test always in the same Emulator, run

     ti build -p android --device-id
     
Find the emulator you'd like and copy its name to the clipboard, for example ** *titanium_11_HVGA_x86* **.  With this name you can run

     ti build -p android --device-id "titanium_11_HVGA_x86"

---
Last updated: December 2013

