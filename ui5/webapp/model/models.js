sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createODataModel: function() {
			
			var oData = {
				recipient: {
					name: "World"
				}
			};

			var oModel = new JSONModel(oData);
			return oModel;
		}
	};
});