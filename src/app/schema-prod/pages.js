
export default {"main":{"type":"usr.page-components.frames.PageFrameWithDrawer","instance":"pageFrameWithDrawer","props":{"bottomAppBar":{"content":[{"type":"usr.in-page-components.navigation.BottomNavigation","instance":"bottomNavigation","props":{"activeNavigationKey":"navItem1","icons":[{"type":"usr.in-page-components.icons.material-ui.AcUnitIcon","instance":"acUnitIcon","props":{"color":"inherit","fontSize":"default","style":"filled"}}],"navigationItems":[{"iconIndex":0,"label":"Nav Item 2","navigationKey":"navItem2"},{"iconIndex":0,"label":"Nav 1","navigationKey":"nav1"},{"iconIndex":0,"label":"Nav Item 3","navigationKey":"navItem3"}],"showLabels":true}}],"elevation":"1"},"drawer":{"content":[{"type":"usr.in-page-components.list.ListWithItems","instance":"mainPageSideNavigation","props":{"icons":[],"listItems":[{"id":"00002","primaryText":"List Item 00002","secondaryText":"Subtext 00002"},{"id":"00003","primaryText":"List Item 00003","secondaryText":"Subtext 00003"},{"href":"/test-page-1","id":"00001","primaryText":"List Item 00001","secondaryText":"Subtext 00001"},{"id":"00004","primaryText":"List Item 00004","secondaryText":"Subtext 00004"}]}}],"width":"250px"},"footerContent":[],"hiddenMainContent":[{"type":"usr.page-components.utils.PageParametersReceiver","instance":"mainPageParametersReceiver","props":{}}],"mainContent":[],"topAppBar":{"elevation":"2","title":"Welcome","titleVariant":"h5"}}},"noMatch":{},"probes":{"radio-group-probe":{},"test-select-control":{"type":"usr.in-page-components.layouts.DivWithStyle","instance":"divWithStyle","props":{"children":[{"type":"usr.in-page-components.layouts.GridWithCells","instance":"gridWithCells","props":{"cells":[{"cellContent":{"type":"usr.in-page-components.layouts.DivWithStyle","instance":"divWithStyle","props":{"children":[{"type":"usr.in-page-components.button.ButtonGroupWithButtons","instance":"buttonGroupWithButtons","props":{"buttons":[{"color":"secondary","endIcon":null,"label":"None","loading":false,"startIcon":null},{"color":"primary","endIcon":null,"id":"orange","label":"Orange","startIcon":null},{"color":"primary","endIcon":null,"id":"green","label":"Green","startIcon":null},{"color":"primary","endIcon":null,"id":"blue","label":"Blue","startIcon":null}],"variant":"contained"}}],"style":{"display":"flex","align":"center","justifyContent":"center","flexWrap":"wrap"}}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.inputs.SelectWithOptions","instance":"selectWithOptions","props":{"disabled":false,"formControl":{"autoWidth":false,"color":"primary","fullWidth":true,"helperText":"Help text here","hiddenLabel":false,"margin":"none","native":true,"size":"medium","variant":"standard"},"label":"Test","options":[{"id":"0000","value":""},{"id":"0001","label":"Orange","value":"orange"},{"disabled":true,"id":"0002","label":"Blue","value":"blue"},{"id":"0003","label":"Green","value":"green"}],"selectedValue":"orange"}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}}],"flexProperties":{"alignContent":"stretch","alignItems":"stretch","direction":"column","justify":"flex-start","wrap":"wrap"},"gridProperties":{"spacing":"2"}}}],"style":{"display":"flex","padding":"1em"}}}},"test-2":{"type":"usr.in-page-components.layouts.Box","instance":"box","props":{"borders":{"borderColor":{}},"children":[],"display":{"display":"flex"},"flexbox":{"flexDirection":"column"},"palette":{"backgroundColor":{},"color":{}},"positions":{},"sizing":{},"spacing":{"marginSpacing":{},"paddingSpacing":{}},"typography":{}}},"test-page-1":{"type":"usr.page-components.frames.PageFrameWithDrawer","instance":"pageFrameWithDrawer","props":{"bottomAppBar":{"content":[],"elevation":"3"},"drawer":{"content":[{"type":"usr.in-page-components.list.ListWithItems","instance":"mainPageSideNavigation","props":{"icons":[],"listItems":[{"divider":true,"href":"/test-page-1","id":"00001","primaryText":"List Item 00001","secondaryText":"Subtext 00001"},{"id":"00002","primaryText":"List Item 00002","secondaryText":"Subtext 00002"},{"id":"00003","primaryText":"List Item 00003","secondaryText":"Subtext 00003"},{"id":"00004","primaryText":"List Item 00004","secondaryText":"Subtext 00004"}]}}],"width":"250px"},"footerContent":[],"hiddenMainContent":[],"mainContent":[{"type":"usr.in-page-components.layouts.Container","instance":"container","props":{"content":{"type":"usr.in-page-components.layouts.DivWithStyle","instance":"divWithStyle","props":{"children":[{"type":"usr.in-page-components.layouts.GridWithCells","instance":"gridWithCells","props":{"cells":[{"cellContent":{"type":"usr.in-page-components.typography.Typography","instance":"myLabel","props":{"align":"inherit","color":"initial","display":"initial","gutterBottom":false,"noWrap":false,"paragraph":false,"text":"Text here","variant":"body1"}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.button.FloatingActionButton","instance":"floatingActionButton","props":{"color":"primary","icon":{"type":"usr.in-page-components.icons.material-ui.AccessAlarmIcon","instance":"accessAlarmIcon","props":{"color":"inherit","fontSize":"default","style":""}},"loading":false,"size":"small"}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.button.Button","instance":"button","props":{"endIcon":{"type":"usr.in-page-components.icons.material-ui.AcUnitIcon","instance":"acUnitIcon","props":{"color":"inherit","fontSize":"default","style":"filled"}},"label":"Button","startIcon":null,"variant":"contained"}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.button.ButtonGroupWithButtons","instance":"buttonGroupWithButtons","props":{"buttons":[{"endIcon":null,"id":"0001","label":"Button1","startIcon":{"type":"usr.in-page-components.icons.material-ui.AccessAlarmIcon","instance":"accessAlarmIcon","props":{"color":"inherit","fontSize":"default","style":"filled"}}},{"endIcon":null,"id":"0002","label":"Button2","startIcon":{"type":"usr.in-page-components.icons.material-ui.AcUnitIcon","instance":"acUnitIcon","props":{"color":"inherit","fontSize":"default","style":"filled"}}},{"endIcon":null,"id":"0003","label":"Button3","startIcon":null}]}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.inputs.Checkbox","instance":"checkbox","props":{"color":"default","label":"Checkbox"}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.navigation.BreadcrumbsWithLinks","instance":"breadcrumbsWithLinks","props":{"icons":[{"type":"usr.in-page-components.icons.material-ui.AccessTimeIcon","instance":"accessTimeIcon","props":{"color":"inherit","fontSize":"small","style":"filled"}},{"type":"usr.in-page-components.icons.material-ui.AccountBalanceWalletIcon","instance":"accountBalanceWalletIcon","props":{"color":"inherit","fontSize":"small"}},{"type":"usr.in-page-components.icons.material-ui.AccountCircleIcon","instance":"accountCircleIcon","props":{"color":"inherit","fontSize":"small","style":"filled"}}],"itemsAfterCollapse":1,"itemsBeforeCollapse":1,"links":[{"disabled":false,"href":"#","iconIndex":0,"id":"0001","label":"Path 1","variant":"inherit"},{"disabled":true,"href":"#","iconIndex":1,"id":"0002","label":"Path 2"},{"disabled":true,"href":"#","iconIndex":1,"id":"0002","label":"Path 2"},{"href":"#","iconIndex":2,"id":"0003","label":"Path 3","variant":"inherit"},{"href":"#","id":"0003","label":"Path 3","variant":"inherit"}],"maxItems":2,"separatorNode":{"type":"usr.in-page-components.layouts.DivWithStyle","instance":"divWithStyle","props":{"children":[{"type":"usr.in-page-components.icons.material-ui.AddIcon","instance":"addIcon","props":{"color":"inherit","fontSize":"inherit","style":"filled"}}],"style":{"display":"flex","fontSize":"15px"}}}}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}},{"cellContent":{"type":"usr.in-page-components.button.IconButton","instance":"iconButton","props":{"color":"primary","icon":{"type":"usr.in-page-components.icons.material-ui.AcUnitIcon","instance":"acUnitIcon","props":{"color":"inherit","fontSize":"default","style":"filled"}},"loading":false,"size":""}},"cellProperties":{"lg":"false","md":"false","sm":"false","xl":"false","xs":"true","zeroMinWidth":false}}],"flexProperties":{"alignContent":"stretch","alignItems":"stretch","direction":"column","justify":"flex-start","wrap":"wrap"},"gridProperties":{"spacing":"2"}}}],"style":{"display":"flex","paddingTop":"1em","flexDirection":"column"}}},"disableMaxWidth":false,"fixed":false,"maxWidth":"lg","sizing":{}}}],"topAppBar":{"elevation":"2","title":"Some Title Here","titleVariant":"h6"}}}};
