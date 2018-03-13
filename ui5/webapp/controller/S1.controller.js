sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"

], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("hxeneo.controller.S1", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.S1
		 */
		onInit: function() {

			this._oRouter = UIComponent.getRouterFor(this);

		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf hxeneo.view.S1
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf hxeneo.view.S1
		 */
		//	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf hxeneo.view.S1
		 */
		//	onExit: function() {
		//
		//	}
		/**
		 *@memberOf hxeneo.controller.S1
		 */
		onListItemCategoryPress: function(oEvent) {

			// Recuperar o link clicado na lista
			var oListItem = oEvent.getSource();
			var oContext = oListItem.getBindingContext();
			var oCategory = oContext.getObject();
			var sCategoryId = oCategory.ID;

			this._oRouter.navTo('products', {
				category_id: sCategoryId
			});

		},
		/**
		 *@memberOf hxeneo.controller.S1
		 */
		onAddCategory: function(oEvent) {

			this._oRouter.navTo('create');

		}
	});
});