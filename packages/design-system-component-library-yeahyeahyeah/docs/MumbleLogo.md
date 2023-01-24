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
  isNavigation={true}
  color="violet"
  fCallBack={() => console.log('logo clicked')}
  href="#"
  title="Homepage"
/>

```

### MumbleLogo *vertical*, *violet* example. For demonstration purpose only
```js

<MumbleLogo
  alignment="vertical"
  isNavigation={false}
  color="violet"
  fCallBack={() => console.log('logo clicked')}
  href="#"
  title="Homepage"
/>

```