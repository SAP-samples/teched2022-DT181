sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/ui/model/json/JSONModel',
        "sap/ui/model/Filter"
    ],
    function(PageController, JSONModel, Filter) {
        'use strict';

        return PageController.extend('sap.fe.cap.managetravels.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf sap.fe.cap.managetravels.ext.main.Main
             */
            //  onInit: function () {
            //
            //  },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf sap.fe.cap.managetravels.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf sap.fe.cap.managetravels.ext.main.Main
             */
             onAfterRendering: function (oEvent) {
				var oView = this.getView();
				var mFBConditions = new JSONModel({
					filtersTextInfo: oView.byId("FilterBar").getActiveFiltersText()
				});
				oView.setModel(mFBConditions, "fbConditions");
			},

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf sap.fe.cap.managetravels.ext.main.Main
             */
            //  onExit: function() {
            //
            //  },
            handlers: {
				onFiltersChanged: function (oEvent) {
					var oSource = oEvent.getSource();
					var mFBConditions = oSource.getModel("fbConditions");
					mFBConditions.setProperty("/filtersTextInfo", oSource.getActiveFiltersText());
				},
                onPressed: function (oEvent) {
                    var oContext = oEvent.getSource().getBindingContext();
                    this.routing.navigate(oContext);
                },
                onSliderChanged: function (oEvent) {
                    this._aStatusFilters = [];
                    var oBinding = this.getView().byId("container1").getBinding("content"),
                    sValue = oEvent.getParameter("value") * 1000;
                    this._aStatusFilters = [new Filter("TotalPrice", "GE", sValue, false)];
                    oBinding.filter(this._aStatusFilters)

                }              
			}
        });
    }
);
