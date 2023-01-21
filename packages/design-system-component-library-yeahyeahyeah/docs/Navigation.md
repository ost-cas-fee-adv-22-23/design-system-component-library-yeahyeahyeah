![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Navigation
## Navigation properties
| Property|Description|
|-|-|
|logo|Include **mumbleLogo**. See details on [MumbleLogo](./?path=/docs/medias-logo--logo-variants)|
|avatar|Include **avatar**. See details on [Avatar](./?path=/docs/user--avatar-story). For **navigation** always choose **small** variant.|
|settings|JS-Callback function. Example: **open** [Modal](./?path=/story/modal-modal--modal-story).|
|logout|JS-Callback function. Close session.|

## Include Navigation from the component library

```js
// index.tsx, index.js, index.jsx

import { Navigation } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```
### Navigation *default* example
```js

<Navigation
  avatar={{
    fCallBack: () => {},
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    variant: 'profile'
  }}
  logo={{
    fCallBack: function noRefCheck() {},
    href: '#',
    title: 'Mumble Logo'
  }}
  logout={{
    fCallBack: function noRefCheck() {},
    icon: 'logout',
    label: 'Logout',
    variant: 'default'
  }}
  settings={{
    fCallBack: function noRefCheck() {},
    icon: 'settings',
    label: 'Settings',
    variant: 'default'
  }}
/>

```