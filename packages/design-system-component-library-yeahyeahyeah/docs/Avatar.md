![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Avatar
## Avatar properties and how to use
| Property|Description|
|-|-|
|variant|Choose size of Avatar. *Edit* mode is exclusive with a further edit callback button.|
|src|Image source link.|
|alt|Alternative tag for image.|
|buttonCallBack|JS-Callback for button. Exclusive only in *edit* variant.|
|imageCallBack|JS-Callback for image.|

## Include Avatar from the component library

```js
// index.tsx, index.js, index.jsx

import { Avatar } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

### Avatar *small* example

```js

<Avatar
  alt="Small Avatar"
  buttonCallBack={() => console.log('Button clicked')}
  imageCallBack={() => console.log('Image clicked')}
  src=""
  variant="small"
/>

```

### Avatar *edit* example

```js

<Avatar
  alt="Edit Avatar"
  buttonCallBack={() => console.log('Button clicked')}
  imageCallBack={() => console.log('Image clicked')}
  src=""
  variant="edit"
/>

```