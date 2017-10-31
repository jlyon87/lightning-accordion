# Custom Lightning Accordion

I needed a Lightning Accordion that worked in API v39. So I made this. Using the SLDS Accordion styles I've recreated the look and feel of the `lightning:accordion` base component from v41.

## Usage

Add the two Lightning Component Bundles and the Event from this repo to your Salesforce Org.

In your component, pass in your array of data to the Accordion and AccordionItems like so:

```html
<c:Accordion >

	<!-- Set the Accordion Items with an Aura Iteration -->
	<aura:set attribute="accordionItems">
		<aura:iteration var="account" items="{!v.accounts}" indexVar="i">

			<!-- Use the iteration indexVar as a unique identifier for each AccordionItem -->
			<c:AccordionItem iterationIndex="{!i}" title="{!account.Name}">

				<!-- Set the collapsible content of the Accordion Item -->
				<aura:set attribute="content">
					<lightning:card title="{!account.Type}" footer="{!account.Phone}" iconName="standard:account">
						<p>
							<ui:outputText value="{!account.BillingAddress.street}" />
						</p>
						<p>
							<ui:outputText value="{!account.Description}" />
						</p>
					</lightning:card>
				</aura:set>
			</c:AccordionItem>

		</aura:iteration>

	</aura:set>
</c:Accordion>
```
