![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)

## Icon-Link properties and how to use
| Property|Description|
|-|-|
|label|Label of the button. Not visible, but required in conjunction with accessibility.|
|Icon| Choose your Icon accordingly.|
|variant|Choose *default* if you need a edit mode button. Choose *plain* for a **only icon button** variant. See [Mumble-Header](./?path=/story/mumble-mumble-header--mumble-story "Mumble-Header") to see both variants.|
|fCallBack|JS Callback Function|


## Include *IconButton* from the component library

```js
// index.tsx, index.js, index.jsx

import { IconButton } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```
## IconButton Types
### Default button variant
```js

<IconButton
  fCallBack={() => console.log('IconButton clicked')}
  icon="logo"
  label="Label"
  variant="default"
/>

```

### Plain button variation
```js

<IconButton
  fCallBack={() => {}}
  icon="logo"
  label="Label"
  variant="plain"
/>

```