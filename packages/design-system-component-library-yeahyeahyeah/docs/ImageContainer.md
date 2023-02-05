![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# ImageContainer
## ImageContainer properties and how to use
| Property|Description|
|-|-|
|src|Image source link.|
|alt|Alternative tag for image.|
|loading|Loading state. True creates an loading spinner in image center.|
|type|*container* Image can be used everywhere in mumble streams. A mouse hover induces an *fullscreen* icon, *banner-edit* induces an *edit* icon on image hover, *banner-view* an *fullscreen* icon. All icon are equiped with an JS-callback function. See an living example on [Mumble-Header](./?path=/story/mumble-mumble-header--mumble-story "Mumble-Header").|
|fCallBack|JS-Callback function.|

## Include Image from the component library

```js
// index.tsx, index.js, index.jsx

import { ImageContainer } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

### Image with *container* type

```js

<ImageContainer
  alt="This is a profile picture"
  fCallBack={() => console.log('ImageContainer clicked')}
  src="https://shorturl.at/nEO01"
  type="container"
/>

```

### Image with *banner* type

```js

<ImageContainer
  alt="This is a profile picture"
  fCallBack={() => console.log('ImageContainer clicked')}
  src="https://shorturl.at/nEO01"
  type="banner"
/>

```