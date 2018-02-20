sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"demo/hxeneo/model/models"
	
], function(UIComponent, JSONModel, models) {
	"use strict";

	var Component = UIComponent.extend("demo.hxeneo.Component", {
		
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
			
			// var oModel = new JSONModel(oData);
			this.setModel(models.createODataModel());

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
	return Component;
});