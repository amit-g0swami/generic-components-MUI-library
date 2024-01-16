# @amit_g0swami/react-ui-library

[![npm version](https://badge.fury.io/js/%40amit_g0swami%2Freact-ui-library.svg)](https://badge.fury.io/js/%40amit_g0swami%2Freact-ui-library)

> A comprehensive React components library based on Material-UI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Storybook](#storybook)
- [Components](#components)
- [Hooks](#hooks)

## Installation

```bash
npm install @amit_g0swami/react-ui-library
# or
yarn add @amit_g0swami/react-ui-library
```

## Usage

```bash
import React from 'react';
import { YourComponent } from '@amit_g0swami/react-ui-library';

const App = () => {
  return (
    <div>
      <YourComponent />
    </div>
  );
};

export default App;
```

## Storybook

To view and interact with the components, you can use Storybook. Run the following command:

```bash
npm run storybook
# or
yarn storybook
```

Visit http://localhost:6006/ in your browser to see the Storybook.

## Components

| Component            | Props |
| -------------------- | ----- |
| DefaultAlert         | - `severity`: 'error' \| 'warning' \| 'info' \| 'success'<br/>- `variant`: 'outlined' \| 'filled'<br/>- `color`: 'error' \| 'warning' \| 'info' \| 'success'<br/>- `icon`: React.ReactElement<SvgIconProps><br/>- `title`: string<br/>- `message`: string<br/>- `border`: string<br/>- `bgColor`: string |
| DefaultButton        | - `color`: 'inherit' \| 'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning'<br/>- `disable`: boolean<br/>- `onClick`: () => void<br/>- `size`: 'small' \| 'medium' \| 'large'<br/>- `type`: 'button' \| 'submit' \| 'reset'<br/>- `name`: string<br/>- `value`: string<br/>- `variant`: 'text' \| 'outlined' \| 'contained'<br/>- `className`: string<br/>- `styles`: string<br/>- `form`: string<br/>- `bgcolor`: string |
| DefaultFloatingButton | - `color`: 'inherit' \| 'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning'<br/>- `disable`: boolean<br/>- `onClick`: () => void<br/>- `size`: 'small' \| 'medium' \| 'large'<br/>- `type`: 'button' \| 'submit' \| 'reset'<br/>- `name`: string<br/>- `value`: string<br/>- `variant`: 'text' \| 'outlined' \| 'contained'<br/>- `className`: string<br/>- `styles`: string<br/>- `form`: string<br/>- `bgcolor`: string |
| IconLabelButton       | - `color`: 'inherit' \| 'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning'<br/>- `disable`: boolean<br/>- `onClick`: () => void<br/>- `size`: 'small' \| 'medium' \| 'large'<br/>- `type`: 'button' \| 'submit' \| 'reset'<br/>- `name`: string<br/>- `value`: string<br/>- `variant`: 'text' \| 'outlined' \| 'contained'<br/>- `className`: string<br/>- `styles`: string<br/>- `form`: string<br/>- `bgcolor`: string<br/>- `btnText`: string<br/>- `startIcon`: IconType<br/>- `btnLabel`: string \| number |
| TextButton            | - `color`: 'inherit' \| 'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning'<br/>- `disable`: boolean<br/>- `onClick`: () => void<br/>- `size`: 'small' \| 'medium' \| 'large'<br/>- `type`: 'button' \| 'submit' \| 'reset'<br/>- `name`: string<br/>- `value`: string<br/>- `variant`: 'text' \| 'outlined' \| 'contained'<br/>- `className`: string<br/>- `styles`: string<br/>- `form`: string<br/>- `bgcolor`: string<br/>- `btnText`: string |
| DefaultIconButton      | - `color`: 'inherit' \| 'primary' \| 'secondary' \| 'success' \| 'error' \| 'info' \| 'warning'<br/>- `disable`: boolean<br/>- `onClick`: () => void<br/>- `size`: 'small' \| 'medium' \| 'large'<br/>- `type`: 'button' \| 'submit' \| 'reset'<br/>- `name`: string<br/>- `value`: string<br/>- `variant`: 'text' \| 'outlined' \| 'contained'<br/>- `className`: string<br/>- `styles`: string<br/>- `form`: string<br/>- `bgcolor`: string<br/>- `icon`: IconType |
| DefaultCard          | - `title`: string<br/>- `content`: string<br/>- `img`: string<br/>- `outlined`: boolean<br/>- `size`: number |
| DefaultCheck          | - `disabled`: boolean<br/>- `defaultChecked`: boolean<br/>- `checked`: boolean<br/>- `indeterminate`: boolean<br/>- `icon`: React.ReactElement<SvgIconProps><br/>- `checkedIcon`: React.ReactElement<SvgIconProps><br/>- `onClick`: (e: any) => void<br/>- `name`: string<br/>- `value`: string |
| RadioButton           | - `disabled`: boolean<br/>- `checked`: boolean<br/>- `defaultChecked`: boolean<br/>- `onClick`: any<br/>- `value`: string<br/>- `onChange`: (e: any) => void |
| DefaultChip           | - `icon`: React.ReactElement<SvgIconProps><br/>- `label`: string<br/>- `select`: React.ReactElement<SvgIconProps><br/>- `onClick`: () => void |
| DefaultInput          | - `type`: HTMLInputTypeAttribute<br/>- `placeholder`: string<br/>- `disabled`: boolean<br/>- `variant`: 'standard' \| 'filled' \| 'outlined' \| undefined<br/>- `className`: HTMLInputTypeAttribute<br/>- `onChange`: (e: { target: { value: SetStateAction<string> } }) => void<br/>- `value`: string<br/>- `required`: boolean<br/>- `minLength`: number<br/>- `maxLength`: number<br/>- `btn`: boolean<br/>- `name`: string<br/>- `width`: string<br/>- `label`: string<br/>- `labelRequired`: boolean |
| DefaultLink           | - `color`: ResponsiveStyleValue<Property.Color | string[] | undefined><br/>- `underline`: 'none' | 'hover' | 'always'<br/>- `title`: string<br/>- `url`: string |
| CircularLoader       | - `color`: 'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning' \| 'inherit'<br/>- `variant`: 'determinate' \| 'indeterminate'<br/>- `value`: number<br/>- `buffer`: number |
| LinearLoader         | - `color`: 'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning' \| 'inherit'<br/>- `variant`: 'determinate' \| 'indeterminate' \| 'buffer' \| 'query'<br/>- `value`: number<br/>- `buffer`: number |
| DefaultBadge          | - `icon`: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>><br/>- `badgeContent`: number<br/>- `color`: 'default' | 'error' | 'warning' | 'info' | 'success' | 'primary' | 'secondary'<br/>- `onClick`: () => void |
| DefaultLabel          | - `labelText`: string<br/>- `for`: string |
| DefaultLogo           | - `srcUrl`: string<br/>- `altText`: string<br/>- `width`: number<br/>- `height`: number |
| BasicOption           | - `value`: string<br/>- `userIcon`: ReactNode<br/>- `upIcon`: ReactNode<br/>- `handleClick`: () => void<br/>- `width`: string<br/>- `data`: string<br/>- `border`: string |
| MenuOption            | (Same as BasicOption) |
| NotificationOption    | (Same as BasicOption) |
| FormInput             | (Same as `IInputProps` defined below) |
| FormOption            | (Same as `IFormOptionProps` defined below) |
| Modal                 | - `closeModal`: () => void<br/>- `children`: ReactNode<br/>- `isModalOpen`: boolean |
| ToolTip               | - `text`: string<br/>- `position`: 'top' | 'right' | 'bottom' | 'left'<br/>- `children`: React.ReactNode |
| Form                  | (Same as `IForm` defined below) |
| TableComponent        | (Same as `ITableComponentProps` defined below) |
| Container   | - `children`: ReactNode<br/>- `className?: string` |
| Tabs        | - `selected?: number`<br/>- `children: ReactNode` |
| Panel       | - `children: ReactNode`<br/>- `title: string` |


### IInputProps (Used in FormInput)

- `type`: HTMLInputTypeAttribute<br/>
- `placeholder`: string<br/>
- `disabled`: boolean<br/>
- `variant`: 'standard' | 'filled' | 'outlined' | undefined<br/>
- `className`: HTMLInputTypeAttribute<br/>
- `onChange`: (e: { target: { value: SetStateAction<string> } }) => void<br/>
- `value`: string<br/>
- `required`: boolean<br/>
- `minLength`: number<br/>
- `maxLength`: number<br/>
- `btn`: boolean<br/>
- `name`: string<br/>
- `width`: string<br/>
- `label`: string<br/>
- `labelRequired`: boolean<br/>

### IFormOptionProps (Used in FormOption)

- `options`: { label: string; value: string }[]<br/>
- `width`: string<br/>
- `label`: string<br/>
- `name`: string<br/>
- `labelRequired`: boolean<br/>

### IForm (Used in Form)

- `children`: ReactNode<br/>
- `className`: string<br/>
- `validationSchema`: any<br/>
- `initialValues`: { [key: string]: any }<br/>
- `getFormData`: any<br/>
- `id`: string<br/>

### ITableComponentProps (Used in TableComponent)

- `column`: IColumnData[]<br/>
- `baseUrl`: string<br/>
- `definedFilters`: IDefinedFilters[]<br/>
- `definedSorts`: IDefinedSorts[]<br/>
- `rowsPerPageOptions`: number[]<br/>
- `handleEdit`: (rowData: IRowData) => void<br/>
- `fetchData`: (queryString: string) => IRowData[]<br/>
...

## Hooks

| Hooks            | Props |
| -------------------- | ----- |
| useDebounce           | - `value`: string<br/>- `delay`: number (optional) |



