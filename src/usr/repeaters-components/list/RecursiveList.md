
### RecursiveList

It's a template for a new React component.

> Find in the source code the properties of the component written in the correct format for Webcodesk. 
> Add comments to the properties if you want to see hints in the properties editor of the component.

#### Properties

*Inputs*
* __styling__ - _{Object}_ CSS properties
    * __borderColor__ - _{string}_ The border-color shorthand CSS property sets the color of an element's border.
    * __borderWidth__ - _{string}_ The border-width shorthand CSS property sets the width of an element's border.
    * __borderStyle__ - _{string}_ The border-style shorthand CSS property sets the line style for all four sides of an element's border.
    * __padding__ - _{string}_ An element's padding area is the space between its content and its border.
    * __margin__ - _{string}_ The margin CSS property sets the margin area on all four sides of an element.
* __data__ - _{Object}_ Used for passing data in the component
    * __title__ - _{string}_ Component title value
    * __placeholder__ - _{string}_ Placeholder text in the input element
    * __inputText__ - _{string}_ Text value in the input element
* __cells__ - _{array}_ The placeholders for child components. Increase array size to put more items.

*Outputs*

* __onInputTextChange__ - _{function}_ Triggered when the text is changed in the input control.
    * _output data format_  `{ enteredText: "value" }`
* __onSubmit__ - _{function}_ Triggered when the user clicks on the button control, and submits the entered value.
    * _output data format_  `{ enteredText: "value" }`

#### Files

* `RecursiveList.comp.js` - the source code of the component.
* `RecursiveList.props.js` - the source code of the PropTypes definitions.
* `RecursiveList.md` - the source of the current file

> Don't remove the suffix before file extensions (`*.comp.js`, `*.props.js`)
