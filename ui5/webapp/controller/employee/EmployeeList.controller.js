sap.ui.define([
	
	"hxeneo/controller/BaseController"
	
], function (BaseController) {
	
	"use strict";
	
	return BaseController.extend("hxeneo.controller.employee.EmployeeList", {
	
		onListItemPressed : function(oEvent){
		
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("employee",{
				employeeId : oCtx.getProperty("EmployeeID")
				
			});
		}
		
	});
	
});