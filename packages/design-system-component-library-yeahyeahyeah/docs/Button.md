# Button

## Button properties and how to use
| Property|Description|
|-|-|
|fCallback|JS callback function.|
|icon|Choose your icon accordingly.|
|label|Label of the button.|
|size|Default *small*, *full* respsonsive.|
|type|Choose one of the HTML native types.|
|variant|Button color *slate*, *violet* and *pink*. See Color Guidelines below.|
|width|In default choose always *full* for all devices.|

## Include Button from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { Button } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### **Slate** Button example with *setting* icon
```js
<Button
  fCallBack={function noRefCheck(){}}
  icon="settings"
  label="Settings"
  size="small"
  type="button"
  variant="slate"
  width="default"
/>
```

### Cancel Button example with *cancel* icon
```js
<Button
  fCallBack={function noRefCheck(){}}
  icon="cancel"
  label="Cancel"
  size="small"
  type="button"
  variant="slate"
  width="default"
/>
```

## Mumble Guidelines
### Colors
**Consider the following color specifications when using a button:**
- Slate: Cancel events.
- Violet: Submit events.
- Pink: On Startscreens and predefined templates.