sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History"
	
], function(Controller, MessageBox, History) {
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
		onAdicionaCategoria: function() {
			
			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			
			var  oNovaCategoria = {
				CodigoDaCategoria: this.byId("input_codigoDaCategoria").getValue(),
				NomeDaCategoria: this.byId("input_nomeDaCategoria").getValue(),
				Descricao: this.byId("input_descricao").getValue(),
			};
			
			this._oRouter = UIComponent.getRouterFor(this);
			var that = this;

			var settings = {
				"async": true,
				"crossDomain": true,
				"data": oNovaCategoria,
				"method": "POST",
				"headers": {
					"Content-Type": "text/plain"
				}
			}

			$.ajax(settings).done(function(response) {
				console.log(response);
				var oModelCategories = new JSONModel(response.Catalogo);
				that.getOwnerComponent().setModel(oModelCategories, "catalogo");
			});

			this.onBack();
		},

		onBack : function() {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			  
			  if (sPreviousHash !== undefined) {
				window.history.go(-1);
			  } else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("products", true);
			  }

		} 
		
	});
});