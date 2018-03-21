sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
	
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("hxeneo.controller.S2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.S2
		 */
			onInit: function() {
				
				this._oList = this.byId("list_products");
			
				// @typeof sap.ui.core.routing.Router
				this._oRouter = UIComponent.getRouterFor(this);
				
				// Faz isso quando se faz uma chamada em Callback
				// Passando o objeto this para o attachRoutePatternMatched
				// o objeto this que contém a rota corrente em this._ORouter
				this._oRouter.attachRoutePatternMatched(this._oRouteMatched, this); 
				
			},
			
			_oRouteMatched: function(oEvent) {
				
				var oParameters = oEvent.getParameters();
				var oAguments = oParameters.arguments;
				var sCategoryId = oAguments.category_id;
				
				// para esta concatenação sempre usa (crase) e não (aspas simpres)
				console.log(this.getOwnerComponent().getModel("categories"));
				this.getView().setModel(this.getOwnerComponent().getModel("categories"));
				this.getView().bindElement({ path: "/"+sCategoryId});
			
			},

			onListItemProductPress: function(oEvent) {

				//Recuperar o link clicado na lista
				// var oListItem = oEvent.getSource();
				// var oContext = oListItem.getBindingContext("/Products");
				// var oProduct = oContext.getObject();
				// var sProductId = oAguments.ID;

				var sProductId = 1;

				this._oRouter.navTo('productDetail', {
					product_id: sProductId
				});

			},

			onAddProduct: function() {

				// TODO Adicionar um novo Produto
				// this._oRouter.navTo('productDetail', {
				// 	product_id: sProductId
				// });

			},

			onAddSupplier: function() {

				// TODO Adicionar um novo Fornecedor
				// this._oRouter.navTo('productDetail', {
				// 	product_id: sProductId
				// });

			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf hxeneo.view.S2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf hxeneo.view.S2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf hxeneo.view.S2
		 */
		//	onExit: function() {
		//
		//	}
	});

});