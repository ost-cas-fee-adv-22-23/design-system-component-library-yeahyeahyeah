# Icon Link

[Button](./?path=/docs/interactions--button-story "Button")

## **Icon-Link** properties and how to use
| Property|Description|
|-|-|
|label|Label of the button.|
|variant|Button color *slate*, *violet*. See Color Guidelines below.|
|href|HTML Link-Element.|
|type|Choose type accordingly.|
|fCallback|JS callback function.|
|Link|NextJs Link-Element.|

## Include IconLink from the component library

```js
// index.tsx, index.js, index.jsx

import { IconLink } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```
## IconLink Variants
### Username
```js
<IconLink
  fCallBack={() => {}}
  href="#"
  label="Username"
  type="username"
  variant="violet"
/>
```

### Timestamp
```js
<IconLink
  fCallBack={() => {}}
  href="#"
  label="Timestamp"
  type="timestamp"
  variant="slate"
/>
```

### Location
```js
<IconLink
  fCallBack={() => {}}
  href="#"
  label="Location"
  type="location"
  variant="slate"
/>
```

### Joined
```js
<IconLink
  fCallBack={() => {}}
  href="#"
  label="Joined"
  type="joined"
  variant="slate"
/>
```

## Mumble **Color** Guidelines
**Consider the following color specifications when using a button:**
- Username: set color *violet*.
- Timestamp: set color to *slate*.
- Location: set color to *slate*.
- Joined: set color to *slate*.

<div style="text-align: center; background-color: #475569; color: white; margin-bottom: 4px; padding: 10px;">Slate</div>
<div style="text-align: center; background-color: #7C3AED; color: white; margin-bottom: 4px; padding: 10px;">Violet</div>