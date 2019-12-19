
export default {"start":[{"type":"component","props":{"componentName":"applicationStartWrapper","componentInstance":"wrapperInstance"}}],"tests":{"test-1":[{"type":"component","props":{"componentName":"usr.in-page-components.list.ListWithItems","componentInstance":"mainPageSideNavigation"},"events":[{"name":"onItemClick","targets":[{"type":"component","props":{"componentName":"usr.in-page-components.typography.Typography","componentInstance":"myLabel","propertyName":"text","transformScript":"(outputObject) => {\n  return outputObject.listItem.id;\n}"}}]}]}],"test-select-control":[{"type":"component","props":{"componentName":"usr.in-page-components.button.ButtonGroupWithButtons","componentInstance":"buttonGroupWithButtons"},"events":[{"name":"onClick","targets":[{"type":"component","props":{"componentName":"usr.in-page-components.inputs.SelectWithOptions","componentInstance":"selectWithOptions","propertyName":"label","transformScript":"(outputObject) => {\n  return `Selected value: ${outputObject.label}`;\n}"}},{"type":"component","props":{"componentName":"usr.in-page-components.inputs.SelectWithOptions","componentInstance":"selectWithOptions","propertyName":"selectedValue","transformScript":"(outputObject) => {\n  if (outputObject) {\n    const { id } = outputObject;\n    if (id) {\n      return id;\n    }\n    return \"\";\n  }\n  return \"\";\n}"}}]}]}]}};
