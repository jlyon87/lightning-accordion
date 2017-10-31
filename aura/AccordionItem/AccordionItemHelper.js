({
	toggleExpand : function(cmp) {
		var itemSection = cmp.find("itemSection");
		$A.util.toggleClass(itemSection, "slds-is-open");
		var isExpanded = cmp.get("v.isExpanded");
		cmp.set("v.isExpanded", !isExpanded);
	},

	fireItemClicked: function(cmp) {
		var clickedItem = $A.get("e.c:ClickedAccordionItem");
		clickedItem.setParams({
			itemName: cmp.get("v.iterationIndex")
		});

		clickedItem.fire();
	},

	verifyToggleState: function(cmp, event) {
		var iterationIndex = cmp.get("v.iterationIndex");
		var isExpanded = cmp.get("v.isExpanded");
		var clickedItem = event.getParam("itemName");

		if(iterationIndex !== clickedItem && isExpanded) {
			this.toggleExpand(cmp);
		}
	}
})