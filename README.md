# Titanium App Templates

Repository containing various App templates for Titanium apps.  These templates are designed to be the **best** stating point for your Titanium app.  They all include:

* l18n folder with sample text and sample usage
* An Android ActionBar library
* Example Alloy conditional code in XML, JS and TSS
* Detailed README file in "blog post" format

## Installation
To use these templates, drop them onto:

	<titanium_sdk_folder>/templates/app (there should already be a folder named 'default')

After doing this, the templates are ready to be used by the Titanium CLI.


## Available Templates

### Name: alloy.android.singlewindow

Template for a "Single-window app" for Android.  Includes code for ActionBar access and ActionBar icons with event listeners. 
 
### Name: alloy.navbased
Template for a "Navigation-based" app for iOS and Android.  This template includes code for building an App that uses NavigationWindow on iOS and Activites on Android, all from a single code-base.

### Name: alloy.xplatform.tabs
Template for a "Tab-based" app for iOS and Android.

## Usage

	ti create --template <template_name>