({
	clickSection : function(cmp, event, helper) {
		helper.toggleExpand(cmp);
		helper.fireItemClicked(cmp);
	},

	handleClickedItem: function(cmp, event, helper) {
		helper.verifyToggleState(cmp, event);
	}
})