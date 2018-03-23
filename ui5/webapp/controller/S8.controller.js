sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History"
	
], function(Controller, UIComponent, MessageBox, History) {
	"use strict";
	
	return Controller.extend("hxeneo.controller.S8", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.S3
		 */ 
		onInit: function() {
			this._oRouter = UIComponent.getRouterFor(this);
		},
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
		onAlteraCategoria: function() {
			
			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			var url    = window.location.origin + "/api/categorias/alteraCategoria";
			var that   = this;

			var  oAlteraCategoria = {
				CodigoDaCategoria: 0,
				NomeDaCategoria: this.byId("input_nomeDaCategoria").getValue(),
				Descricao: this.byId("input_descricao").getValue(),
			};

			var settings = {
				"async": true,
				"crossDomain": true,
				"data": oAlteraCategoria,
				"url": url,
				"method": "PUT",
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

		onExcluiCategoria: function() {

			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			var url    = window.location.origin + "/api/categorias/eliminaCategoria/" + `${this.byId("input_codigoDaCategoria").getValue()}`;
			var that   = this;

			var settings = {
				"async": true,
				"crossDomain": true,
				"url": url,
				"method": "DELETE",
				"headers": {
					"Content-Type": "text/plain"
				}
			}

			$.ajax(settings).done(function(response) {
				console.log(response);
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