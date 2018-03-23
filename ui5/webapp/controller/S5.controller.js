sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History"

], function(Controller, UIComponent, MessageBox, History) {
	"use strict";

	return Controller.extend("hxeneo.controller.S5", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf hxeneo.view.S4
		 */
			onInit: function() {
				this._oRouter = UIComponent.getRouterFor(this);
			},

			onAlteraFornecedor: function() {
				
				// @typeof sap.ui.model.odata.v2.ODataModel
				var oModel = this.getView().getModel();
				var url    = window.location.origin + "/api/fornecedores/alteraFornecedor";
				var that   = this;
				
				var oAlteraFornecedor = {
					CodigoDoFornecedor: this.byId("input_codigoDoFornecedor").getValue(),
					NomeDaEmpresa: this.byId("input_nomeDaEmpresa").getValue(),
					NomeDoContato: this.byId("input_nomeDoContato").getValue(),
					CargoDoContato: this.byId("input_cargoDoContato").getValue(),
					Endereco: this.byId("input_endereco").getValue(),
					Cidade: this.byId("input_cidade").getValue(),
					Regiao: this.byId("input_regiao").getValue(),
					CEP: this.byId("input_cep").getValue(),
					Pais: this.byId("input_pais").getValue(),
					Telefone: this.byId("input_telefone").getValue(),
					Fax: this.byId("input_fax").getValue(),
					HomePage: this.byId("input_homePage").getValue()
				};

				var settings = {
					"async": true,
					"crossDomain": true,
					"data": oAlteraFornecedor,
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

			onExcluiFornecedor: function() {

				// @typeof sap.ui.model.odata.v2.ODataModel
				var oModel = this.getView().getModel();
				var url    = window.location.origin + "/api/fornecedores/eliminaFornecedor/" + `${this.byId("input_codigoDoFornecedor").getValue()}`;
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

				$.ajax(settings).done(function (response) {
					console.log(response);
				  });

				this.onBack();

			},

			onBack: function() {

				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("productDetail", true);
				}

			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf hxeneo.view.S4
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf hxeneo.view.S4
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf hxeneo.view.S4
		 */
		//	onExit: function() {
		//
		//	}

	});

});