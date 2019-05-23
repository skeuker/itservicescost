sap.ui.define([
	"sap/ui/generic/app/AppComponent"
], function (AppComponent) {
	"use strict";

	//instantiate a new component container
	var oContainer = new sap.ui.core.ComponentContainer({
		name: "pnp.itservicescost",
		height: "100%"
	});

	//construct a new shell
	var oShell = new sap.m.Shell("Shell", {
		showLogout: false,
		appWidthLimited: false,
		app: oContainer
	});

	//place shell into index.html
	oShell.placeAt("content");

});