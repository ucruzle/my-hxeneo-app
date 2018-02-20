sap.ui.define([
	"sap/ui/core/mvc/Controller", 
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";
	
	return Controller.extend("demo.hxeneo.controller.S0", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo.hxeneo.view.S0
		 */ //	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo.hxeneo.view.S0
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo.hxeneo.view.S0
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo.hxeneo.view.S0
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf demo.hxeneo.controller.S0
		 */
		/**
		 *@memberOf demo.hxeneo.controller.S0
		 */
		onCollapseExpandPress: function() {
			var oNavigationList = this.getView().byId('navigationList');
			var bExpanded = oNavigationList.getExpanded();

			oNavigationList.setExpanded(!bExpanded);
		}
	});
});