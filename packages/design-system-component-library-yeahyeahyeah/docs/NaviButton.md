![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# NaviButton
## NaviButton properties
| Property|Description|
|-|-|
|label|Label of NaviButton. Remarks: *label* not visible on small devices, but present in DOM.|
|variant|Use *profile* for [Navigation Profile Button](./?path=/story/navigation-navigation--navigation-story). Use *default* for all other navigation links. For variant *profile* see [Avatar](./?path=/docs/user--avatar-story) and choose variant *small*.|
|fCallBack|JS-Callback function.|
|avatar|Only relevant for variant *profile*. See settings in [Avatar](./?path=/docs/user--avatar-story).|
|icon|Choose icon accordingly. See details on [Icons](./?path=/docs/icons-collection--all).|

## Include NaviButton from the component library

```js
// index.tsx, index.js, index.jsx

import { NaviButton } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```
### NaviButton *default* example
```js

<NaviButton
  fCallBack={() => {}}
  icon="settings"
  label="Label"
  variant="default"
/>

```

### NaviButton *profile* example
```js

<NaviButton
  avatar={{
    alt: 'Alternative text',
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    variant: 'small'
  }}
  fCallBack={() => {}}
  label="Label"
  variant="profile"
/>

```