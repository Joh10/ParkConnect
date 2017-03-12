sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("com.ordina.parkconnectHackaton_ParkConnect.controller.Book", {
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("main", {}, true);
			}
		},
		handleDelete: function(oEvent) {
			var oList = oEvent.getSource(),
				oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContext().getPath();
 
			// after deletion put the focus back to the list
			oList.attachEventOnce("updateFinished", oList.focus, oList);
 
			// send a delete request to the odata service
			this.oProductModel.remove(sPath);
		},
		onSavePress: function(oEvent) {
			
		}
	});
});