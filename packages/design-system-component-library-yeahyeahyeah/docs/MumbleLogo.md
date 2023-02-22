![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# MumbleLogo
## MumbleLogo properties
| Property|Description|
|-|-|
|alignment|Choose *horizontal* for integration in *navbar*. Futher details see [Navigation](./?path=/docs/navigation-navigation--navigation-story)|
|color|*White* is the preferred color for *navbar* integration.|
|isNavigation|A optimized size for MumbleNavigation.|
|onLogoClick|JS-Callback function.|

## Include MumbleLogo from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { MumbleLogo } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

### MumbleLogo *navigation* snippet
```js

<MumbleLogo
  alignment="horizontal"
  color="white"
  isNavigation
  onLogoClick={() => {}}
/>

```

### MumbleLogo *vertical*, *gradient* example. Can be integrated on *landingpages*
```js

<MumbleLogo
  alignment="horizontal"
  color="white"
  isNavigation
  onLogoClick={() => {}}
/>

```