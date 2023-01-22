![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Switch
## Switch properties and how to use
| Property|Description|
|-|-|
|options|You need to provide an options object with *label* and *value*.|
|value|Default value that is set.|
|fCallback|A JS callback function which you can get the value that has been set.|


## Include Switch from the component library

```js
// index.tsx, index.js, index.jsx

import { Switch } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### Switch

```js

<Switch
  fCallBack={(value) => console.log(value)}
  options={[
    {
      label: 'Deine Mumbles',
      value: 'mumbles'
    },
    {
      label: 'Deine Likes',
      value: 'likes'
    },
    {
      label: 'Empfehlungen',
      value: 'promotedPosts'
    }
  ]}
  value="likes"
/>

```