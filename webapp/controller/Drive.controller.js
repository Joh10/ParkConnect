sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("com.ordina.parkconnectHackaton_ParkConnect.controller.Drive", {
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
		onSwitchFromChange: function(oEvent) {
			var switchButton = oEvent.getSource();
			if(switchButton.getState()){
				this.getView().byId("fromElement").setVisible(false);
			}
			else
			{
				this.getView().byId("fromElement").setVisible(true);
			}
		},
		onSwitchToChange: function(oEvent) {
			var switchButton = oEvent.getSource();
			if(switchButton.getState()){
				this.getView().byId("toElement").setVisible(false);
			}
			else
			{
				this.getView().byId("toElement").setVisible(true);
			}
		},
		onSavePress: function() {
			var hanaOdatModel = new sap.ui.model.odata.ODataModel("/oDataParkingService");
			var data = {};
			data["REFID_USERS"] = 1;
			data["PASS"] = "blabla";
			data["DATE_TIME"] = this.getView().byId("TP1").getDateValue();
			data["DESCRIPTION"] = this.getView().byId("descriptionInput").getValue();

			hanaOdatModel.create("/DestinationHabitUsers", data, {
				success: function(oData) {
					console.log("success");

				},
				error: function(err) {
					console.log(err);
				}
			});
			
		}
	});
});