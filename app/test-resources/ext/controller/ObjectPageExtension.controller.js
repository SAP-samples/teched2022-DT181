sap.ui.define(
	["sap/ui/core/mvc/ControllerExtension"],
	function(ControllerExtension) {
		"use strict";

		return ControllerExtension.extend("sap.fe.cap.managetravels.ext.ObjectPageExtension", {
			// this section allows to extend lifecycle hooks or override public methods of the base controller
			override: {
				editFlow: {
					onBeforeSave: function() {
						//Check on green flights
                        if (!this.getView().getBindingContext().getProperty('GoGreen')){                        	
							return new Promise(async function(fnResolve, fnReject) {
								var mSettings = {
									id: "myFragment",
									name: "sap.fe.cap.managetravels.ext.fragment.Trees4Tickets",
									controller: this.base.getView().getController(),
									contextPath: "/Travel",
									initialBindingContext: this.getView().getBindingContext()
								}
								var oApproveDialog = await this.base.getExtensionAPI().loadFragment(mSettings);
								oApproveDialog.setBindingContext(this.getView().getBindingContext());
								let buttons = oApproveDialog.getButtons();
								let saveButton = buttons.find(obj => obj.sId === "myFragment--Save");
								saveButton.attachPress(function() {
													oApproveDialog.close();
													oApproveDialog.destroy();										
													fnResolve();	}.bind(this));

								let cancelButton = buttons.find(obj => obj.sId === "myFragment--Cancel");
								cancelButton.attachPress(function() {
													oApproveDialog.close();	
													oApproveDialog.destroy();									
													fnReject();	}.bind(this));
									oApproveDialog.open();
							}.bind(this));
                        }						
					}
				}
			}
		});
	}
);
