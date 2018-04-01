sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent,JSONModel) {
	"use strict";

	return UIComponent.extend("hxeneo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			
			UIComponent.prototype.init.apply(this, arguments);
			
			this.getRouter().initialize();

			this.getFornecedores();
		},

		getCategorias: function() {
			sap.ui.core.BusyIndicator.show();
			var url = window.location.origin + "/api/catalogo/retornaCatalogoDeProdutosPorCategorias";
			var that = this;

			var settings = {
				"async": false,
				"crossDomain": true,
				"url": url,
				"method": "GET",
				"headers": {
					"Content-Type": "text/plain"
				},
				success: function(response){
					var oModelCategories = new JSONModel(response.Catalogo);
					that.setModel(oModelCategories, "catalogo");
					if (that.getModel("config").getProperty("/categoriaSelecionadaId")) {
						that._oRouter.navTo('products', {
							category_id: that.getModel("config").getProperty("/categoriaSelecionadaId")
						});
		
					}
					
				},
				error: function() {
					var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Erro ao tentar listar categorias", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				}
			}
			
			
			$.ajax(settings).done(function(response) {
				sap.ui.core.BusyIndicator.hide();
			});
		},

		getFornecedores: function() {
			sap.ui.core.BusyIndicator.show();
			var url = window.location.origin + "/api/fornecedores/retornaFornecedores";
			var that = this;

			var settings = {
				"async": false,
				"crossDomain": true,
				"url": url,
				"method": "GET",
				"headers": {
					"Content-Type": "application/json"
				},
				success: function(response){
					console.log(response);
					var oModelFornecedores = new JSONModel(response.Fornecedores);
					that.setModel(oModelFornecedores, "fornecedores");
					sap.ui.core.BusyIndicator.hide();
						
				},
				error: function() {
					var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Erro ao tentar listar fornecedores", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				}
			}
			
			
			$.ajax(settings).done(function(response) {
				});
		},

		getFornecedor(codigo) {
			

			sap.ui.core.BusyIndicator.show();
			var url = window.location.origin + `/api/fornecedores/retornaFornecedor/${codigo}`;
			var that = this;

			var settings = {
				"async": false,
				"crossDomain": true,
				"url": url,
				"method": "GET",
				"headers": {
					"Content-Type": "application/json"
				},
				success: function(response){
					console.log(response);
					// if (response.Fornecedor.length = 0) {
					// 	var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					// 	MessageBox.error(
					// 		"Fornecedor não encontrado", {
					// 			styleClass: bCompact ? "sapUiSizeCompact" : ""
					// 		}
					// 	);
					// } else {
						that.getModel("config").setProperty("/fornecedorSelecionado",response.Fornecedor[0]);
							console.log(that.getModel("config"));
					// }		
				},
				error: function() {
					var bCompact = !!that.getView().$().closest(".sapUiSizeCompact").length;
					MessageBox.error(
						"Erro ao tentar buscar fornecedor", {
							styleClass: bCompact ? "sapUiSizeCompact" : ""
						}
					);
				}
			}
			
			
			$.ajax(settings).done(function(response) {
				sap.ui.core.BusyIndicator.hide();
			});


		}
	});
});