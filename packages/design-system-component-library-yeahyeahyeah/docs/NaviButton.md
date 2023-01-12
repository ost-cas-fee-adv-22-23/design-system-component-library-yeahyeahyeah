![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# NaviButton
## NaviButton properties
| Property|Description|
|-|-|
|label|Label of NaviButton. Remarks: *label* not visible on small devices.|
|variant|Image source link.|
|alt|Alternative tag for image.|
|buttonCallBack|JS-Callback for button. Exclusive only in *edit* variant.|
|imageCallBack|JS-Callback for image.|

## Include NaviButton from the component library

```js
// index.tsx, index.js, index.jsx

import { NaviButton } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### NaviButton *small* example

```js

<NaviButton
  fCallBack={() => {}}
  icon="settings"
  label="Label"
  variant="default"
/>

```