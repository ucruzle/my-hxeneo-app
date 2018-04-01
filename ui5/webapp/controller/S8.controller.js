sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	
], function(Controller, UIComponent, MessageBox, History, MessageToast) {
	"use strict";
	
	return Controller.extend("hxeneo.controller.S8", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.S3
		 */ 
		onInit: function() {
			this._oRouter = UIComponent.getRouterFor(this);
			this._oRouter.getRoute("categoryDetail").attachPatternMatched(this._oRouteMatched, this);
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

		_oRouteMatched: function(oEvent) {
			
			var oParameters = oEvent.getParameters();
			var oAguments = oParameters.arguments;
			var sCategoryId = oAguments.category_id;
			
			this.getView().setModel(this.getOwnerComponent().getModel("catalogo"));
			this.getView().bindElement({ path: this.getOwnerComponent().getModel("config").getProperty("/categoriaSelecionadaPath")});
		
		},
		onAlteraCategoria: function() {
			
			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			var url    = window.location.origin + "/api/categorias/alteraCategoria";
			var that   = this;

			var  oAlteraCategoria = {
				CodigoDaCategoria: this.byId("input_codigoDaCategoria").getValue(),
				NomeDaCategoria: this.byId("input_nomeDaCategoria").getValue(),
				Descricao: this.byId("input_descricao").getValue(),
			};

			//console.log(oAlteraCategoria);

			var that = this;
			var settings = {
				"async": true,
				"crossDomain": true,
				"data": JSON.stringify(oAlteraCategoria),
				"url": url,
				"method": "PUT",
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
						"Erro ao tentar salvar categoria", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				}
			}

			$.ajax(settings).done(function(response) {
				//console.log(response);
			});

		},

		onExcluiCategoria: function() {

			// @typeof sap.ui.model.odata.v2.ODataModel
			var oModel = this.getView().getModel();
			var url    = window.location.origin + "/api/categorias/eliminaCategoria/" + this.byId("input_codigoDaCategoria").getValue();
			var that   = this;

			var settings = {
				"async": true,
				"crossDomain": true,
				"url": url,
				"method": "DELETE",
				"headers": {
					"Content-Type": "application/json"
				},
				success: function(msg){
					MessageToast.show("Excluído com sucesso", {closeOnBrowserNavigation: false});
					that.getOwnerComponent().getCategorias();
					that._oRouter.navTo('default');
				},
				error: function() {
					MessageBox.error(
						"Erro ao tentar excluir categoria", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				}
			}

			$.ajax(settings).done(function(response) {
				//console.log(response);
			});

			//this.onBack();
			
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