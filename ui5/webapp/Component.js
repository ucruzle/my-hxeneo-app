sap.ui.define([
	'sap/ui/core/UIComponent',
	"sap/ui/Device",
	"ui5/fiscal/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	var Component = UIComponent.extend("ui5.fiscal.Component", {
		// metadata : {
		// 	rootView : "ui5.fiscal.view.S0",
		// 	dependencies : {
		// 		libs : ["sap.m"]
		// 	}
		// }
		
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
	return Component;
});