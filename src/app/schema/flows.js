
export default {"start":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"}}],"tests":{"radio-group-probe":[{"type":"component","props":{"componentName":"usr.in-page-components.inputs.RadioGroup","componentInstance":"radioGroupProbe"},"events":[{"name":"onChange","targets":[{"type":"component","props":{"componentName":"usr.in-page-components.inputs.RadioGroup","componentInstance":"radioGroupProbe","propertyName":"selectedValue","transformScript":"(outputObject) => {\n  return outputObject.value;\n}"}}]}]}],"test-1":[{"type":"component","props":{"componentName":"usr.in-page-components.list.ListWithItems","componentInstance":"mainPageSideNavigation"},"events":[{"name":"onItemClick","targets":[{"type":"component","props":{"componentName":"usr.in-page-components.typography.Typography","componentInstance":"myLabel","propertyName":"text","transformScript":"(outputObject) => {\n  return outputObject.listItem.id;\n}"}}]}]}]}};
