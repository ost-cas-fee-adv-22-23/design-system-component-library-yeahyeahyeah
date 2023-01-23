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
    avatar: {
      alt: 'Alternative text',
      src: 'https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif',
      variant: 'small',
    },
    fCallBack: () => console.log('avatar clicked'),
    label: 'Profile',
    variant: 'profile',
  }}
  logo={{
    fCallBack: () => console.log('logo clicked'),
    href: '#',
    title: 'Mumble Logo',
  }}
  logout={{
    fCallBack: () => console.log('logout clicked'),
    icon: 'logout',
    label: 'Logout',
    variant: 'default',
  }}
  settings={{
    fCallBack: () => console.log('settings clicked'),
    icon: 'settings',
    label: 'Settings',
    variant: 'default',
  }}
/>

```