# Alloy Cross-platform Tabs Template

[image]

## The code
This template contains:

* **index.xml - The basic screen definition**
* **index.tss - The stylesheet**
* **index.js - Actual code for the main screen**
* **i18n (internationalization) sample**
	* the i18n folder contains sample folders for English (en) and Spanish (es).  If you plan for your app to be used by international users you should consider placing all you app captions in these files.

## Use-cases

This template is the ideal place to start any ...

The template is configured to work in both Portrait and Landscape modes.  To lock it to a particular orientation simply open **/styles/index.tss** and configure this line:

     orientationModes: [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT,Ti.UI.PORTRAIT]
     
## Notes
This template will run on Android devices/emulators with Android version 3.0 and above.

## Holo Themes

This template uses ** Theme.Holo.Light ** as a default Holo theme.  You can change your Holo theme to ** Theme.Holo ** or ** Theme.Holo.Light.DarkActionBar ** (Available with API Level 14 and up) by editing the ** tiapp.xml **, and look for the <application> tag inside the Android manifest.

## Modules and libraries

This template has no external modules or libraries.

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
Last updated: January 2014

