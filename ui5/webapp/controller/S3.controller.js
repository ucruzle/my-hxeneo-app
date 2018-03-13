sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
	
], function(Controller, MessageBox) {
	"use strict";
	
	return Controller.extend("hxeneo.controller.S3", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.S3
		 */ //	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf hxeneo.view.S3
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf hxeneo.view.S3
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf hxeneo.view.S3
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf hxeneo.controller.S3
		 */
		onSaveCatalog: function() {
			
			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			
			var  oNewCategory = {
				ID: this.byId("input_id").getValue(),
				Name: this.byId("input_name").getValue()
			};
			
			function onSuccess (oData, response) {
				sap.m.MessageToast.show("Sucesso total!!!");
			}
			
			function onError(oError) {
				MessageBox.error("Erro...deu zica!!");
			}
			
			var oSettings = {
				success: onSuccess.bind(this),
				error: onError.bind(this)
			};
			
			oModel.create('/Categories', oNewCategory, oSettings);
		}
	});
});