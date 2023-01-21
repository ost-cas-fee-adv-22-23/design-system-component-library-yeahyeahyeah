![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Mumble
## Mumble properties
| Property|Description|
|-|-|
|alignment|Choose *horizontal* for integration in *navbar*. Futher details see [Navigation](./?path=/docs/navigation-navigation--navigation-story)|
|color|*White* is the preferred color for *navbar* integration.|
|fCallBack|JS-Callback function.|
|href|Link to *homepage*. Relative or absolute path is possible.|
|title|Link title. Not visible. Only in DOM.|

## Include Mumble from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { Mumble } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### Mumble *navigation* snippet
```js

<Mumble
  alignment="horizontal"
  color="white"
  fCallBack={() => {}}
  href="#"
  isNavigation
  title="Homepage"
/>

```

### Mumble *vertical*, *violet* example. For demonstration purpose only
```js

<Mumble
  alignment="horizontal"
  color="violet"
  fCallBack={() => {}}
  href="#"
  title="Homepage"
/>

```