sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
	
], function(Controller, UIComponent, MessageBox, History,MessageToast) {
	"use strict";
	
	return Controller.extend("hxeneo.controller.S3", {
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
		onAdicionaCategoria: function() {
			
			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			var url    = window.location.origin + "/api/categorias/adicionaCategoria";
			var that   = this;

			var  oNovaCategoria = {
				CodigoDaCategoria: 0,
				NomeDaCategoria: this.byId("input_nomeDaCategoria").getValue(),
				Descricao: this.byId("input_descricao").getValue(),
			};

			var settings = {
				"async": true,
				"crossDomain": true,
				"data": JSON.stringify(oNovaCategoria),
				"url": url,
				"method": "POST",
				"headers": {
					"Content-Type": "application/json"
				},
				success: function(msg){
					MessageToast.show("Salvo com sucesso", {closeOnBrowserNavigation: false});
					that.getOwnerComponent().getCategorias();
				},
				error: function() {
					var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Erro ao tentar incluir categoria", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				}
			}

			$.ajax(settings).done(function(response) {
				//console.log(response);
				// var oModelCategories = new JSONModel(response.Catalogo);
				// that.getOwnerComponent().setModel(oModelCategories, "catalogo");
			});

			
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