sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("hxeneo.controller.Cockpit", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.Cockpit
		 */
		//	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf hxeneo.view.Cockpit
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf hxeneo.view.Cockpit
		 */
		//	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf hxeneo.view.Cockpit
		 */
		//	onExit: function() {
		//
		//	}
		/**
		 *@memberOf hxeneo.controller.Cockpit
		 */
		onNavToProductsCatalog: function() {
			this.getRouter().navTo("employeeList");
		},
		/**
		 *@memberOf hxeneo.controller.Cockpit
		 */
		onNavToSuppliersList: function() {
			this.getRouter().navTo("employeeOverview");
		}
	});
});