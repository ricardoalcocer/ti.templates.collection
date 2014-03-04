# Titanium App Templates

Repository containing various App templates for Titanium apps.  These templates are designed to be the **best** stating point for your Titanium app.  They all include:

* l18n folder with sample text and sample usage
* An Android ActionBar library
* Example Alloy conditional code in XML, JS and TSS
* Detailed README file in "blog post" format

## Available Templates

### 1. Name: alloy.android.singlewindow

Template for a "Single-window app" for Android.  Includes code for ActionBar access and ActionBar icons with event listeners. 
 
### 2. Name: alloy.navbased
Template for an iOS and Android app with Hierarchical Navigation, using NavigationWindow on iOS and Activities on Android, all from a single code-base.

### 3. Name: alloy.xplatform.tabs
Template for a "Tab-based" app for iOS and Android.

## Installation
Templates can be used with both Titanium Studio and the Titanium CLI.

### I. Titanium CLI

To use these templates, drop them onto:

	<titanium_sdk_folder>/templates/app (there should already be a folder named 'default')
	
Note: To find your correct SDK folder, go to Terminal/Command Window and type:

	ti sdk
	
This will return information about your installed SDKs, including the SDK base installation path.

### II. Titanium Studio

I'm still working on this as they require some minor changes, but they will be installed as Aptana Rubles (Ruby Bundles).

## Usage

	ti create --template <template_name>