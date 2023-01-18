![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# MumbleLogo
## MumbleLogo properties
| Property|Description|
|-|-|
|alignment|Choose *horizontal* for integration in *navbar*. Futher details see [Navigation](./?path=/docs/navigation-navigation--navigation-story)|
|color|*White* is the preferred color for *navbar* integration.|
|fCallBack|JS-Callback function.|
|href|Link to *homepage*. Relative or absolute path is possible.|
|title|Link title. Not visible. Only in DOM.|

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
  fCallBack={() => {}}
  href="#"
  isNavigation
  title="Homepage"
/>

```

### MumbleLogo *vertical*, *violet* example. For demonstration purpose only
```js

<MumbleLogo
  alignment="horizontal"
  color="violet"
  fCallBack={() => {}}
  href="#"
  title="Homepage"
/>

```