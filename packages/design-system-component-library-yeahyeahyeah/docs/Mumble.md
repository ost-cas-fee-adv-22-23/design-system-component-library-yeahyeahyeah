![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Mumble
## Mumble properties
| Property|Description|
|-|-|
|variant|Mumble variants: **detailpage**, **timeline** and **response**. To select right variant, see all examples on [Mumble UI on Figma](https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?node-id=1%3A4&t=QgTgKbePxpLOcrCA-0) |
|user|See all details on [User](./?path=/docs/user-user--user-story)|
|text|Mumble text message.|
|comment|See details on interaction button [Comment](./?path=/docs/interactions--comment-button-story).| 
|like|See details on interaction button [Like](./?path=/docs/interactions--like-button-story).| 
|share|See details on interaction button [Share](./?path=/docs/interactions--share-button-story).| 
|mbSpacing|If needed, choose margin-bottom space to next element. Units are in pixel: "0" "2" "4" "8" "16" "32" "64" "16"|

## Include Mumble from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { Mumble } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

## Mumble **timeline** example
```js

<Mumble
  comment={{
    fCallBack: () => console.log('comment clicked'),
    quantity: 0,
  }}
  img={{
    alt: 'This is a profile picture!',
    fCallBack: () => console.log('img clicked'),
    src: 'https://picsum.photos/640/360',
  }}
  like={{
    fCallBack: () => console.log('like clicked'),
    quantity: 999,
  }}
  mbSpacing="32"
  share={{
    fCallBack: () => console.log('share clicked'),
    label: 'Share',
  }}
  text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
  user={{
    avatar: {
      alt: 'avatar',
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      imageCallBack: () => console.log('avatar clicked'),
    },
    joined: {
      fCallBack: () => console.log('joined clicked'),
      href: '',
      label: 'Joined',
      type: 'joined',
    },
    label: 'Display Name',
    location: {
      fCallBack: () => console.log('location clicked'),
      href: '',
      label: 'Location',
      type: 'location',
    },
    timestamp: {
      fCallBack: () => console.log('timestamp clicked'),
      href: '',
      label: 'Timestamp',
      type: 'timestamp',
    },
    username: {
      fCallBack: () => console.log('username clicked'),
      href: '',
      label: 'Username',
      type: 'username',
    },
    variant: 'large',
  }}
  variant="timeline"
/>

```
