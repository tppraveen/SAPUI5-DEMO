var opraveenController;
sap.ui.controller("SimpleProj.Controller.praveen", 
{
	onInit : function ()  {
		opraveenController=this;
		console.log("On Init");
                    
	},
	onAfterRendering: function(){
		console.log("On After Rendering");
		opraveenController.setProductDetail();
	},
	getInput : function(){
		const input = opraveenController.getView().byId("getInputa").getValue();
		const input1 = opraveenController.getView().byId("getInputb").getValue();
		const a=parseInt(input);
		const b=parseInt(input1);
                   	alert("ADDITION of two num is "+(b+a));	
	},
	setProductDetail : function(){
		var productDetail;
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Praveen/task-web/SQL_TP_WEBTASK&Content-Type=text/json"

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					opraveenController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
	},
	getUserComment : function(oEvent){
		alert(oEvent.getSource().mProperties.value);
	},

	getUserComment : function(oEvent){
		alert(oEvent.getSource().mProperties.value);
	},
	SearchRecord : function(){	
		var userInput = opraveenController.getView().byId("productInput").getValue();
		var userInput2 = opraveenController.getView().byId("productInput2").getValue();
		if(userInput2==""&&userInput==""){
			sap.m.MessageToast.show("Please Enter Valid Id");
			return
		}
alert(userInput2);
alert(userInput);
		var productDetail;
		
		var url = "/XMII/Illuminator?QueryTemplate=SMT_TRAINING/Praveen/task-web/SQL_TP_WEBTASK&Content-Type=text/json&Param.2="+userInput2+"&Param.1="+userInput

		$.ajax({
			url: url,
			type: "POST",
			success: function (data, txt, jqXHR) {
				if(data.Rowsets.Rowset != undefined){
					productDetail = data.Rowsets.Rowset[0].Row
					var oModel = new sap.ui.model.json.JSONModel(productDetail);
					opraveenController.getView().setModel(oModel);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
			}
		});
		
	}
     
});
