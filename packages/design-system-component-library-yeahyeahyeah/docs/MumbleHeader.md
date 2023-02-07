![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# MumbleHeader
## MumbleHeader properties and how to use
| Property|Description|
|-|-|
|variant|Set *view* for default view mode. Set *edit* to give user the ability to edit profile.|
|banner|See *banner* variants in [ImageContainer](./?path=/docs/medias-image--image-container-story).|
|user|*user* variant is set static to **xlarge** variant. Further details on [User](./?path=/docs/user-user--user-story).|
|settings|JS-callback function to *edit* profile.|
|avatar|Set variant to *xlarge*. See all examples on [avatar](./?path=/docs/user--avatar-story).|

## Include MumbleHeader from the component library

```js
// index.tsx, index.js, index.jsx

import { MumbleHeader } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

### MumbleHeader with *edit* mode

```js

<MumbleHeader
  banner={{
    alt: 'Picture',
    fCallBack: () => console.log('banner clicked'),
    src: 'https://loremflickr.com/640/360',
    type: 'banner-edit',
  }}
  text="Schreib etwas über dich."
  user={{
    avatar: {
      alt: 'Alttag',
      buttonCallBack: () => console.log('buttonCallBack clicked'),
      imageCallBack: () => console.log('imageCallBack clicked'),
      src: 'https://placebeard.it/640x360',
    },
    joined: {
      fCallBack: () => console.log('joined clicked'),
      href: '#',
      label: 'Joined',
      type: 'joined',
    },
    label: 'Display Name',
    location: {
      fCallBack: () => console.log('location clicked'),
      href: '#',
      label: 'Location',
      type: 'joined',
    },
    settings: {
      fCallBack: () => console.log('settings clicked'),
    },
    username: {
      fCallBack: () => console.log('username clicked'),
      href: '#',
      label: 'username',
      type: 'joined',
    },
    variant: 'xlarge',
  }}
  variant="edit"
/>

```

### MumbleHeader in *view* mode

```js

<MumbleHeader
  banner={{
    alt: 'Picture',
    fCallBack: () => console.log('banner clicked'),
    src: 'https://loremflickr.com/640/360',
    type: 'banner-edit',
  }}
  text="Schreib etwas über dich."
  user={{
    avatar: {
      alt: 'Alttag',
      buttonCallBack: () => console.log('buttonCallBack clicked'),
      imageCallBack: () => console.log('imageCallBack clicked'),
      src: 'https://placebeard.it/640x360',
    },
    joined: {
      fCallBack: () => console.log('joined clicked'),
      href: '#',
      label: 'Joined',
      type: 'joined',
    },
    label: 'Display Name',
    location: {
      fCallBack: () => console.log('location clicked'),
      href: '#',
      label: 'Location',
      type: 'joined',
    },
    settings: {
      fCallBack: () => console.log('settings clicked'),
    },
    username: {
      fCallBack: () => console.log('username clicked'),
      href: '#',
      label: 'username',
      type: 'joined',
    },
    variant: 'xlarge',
  }}
  variant="view"
/>

```