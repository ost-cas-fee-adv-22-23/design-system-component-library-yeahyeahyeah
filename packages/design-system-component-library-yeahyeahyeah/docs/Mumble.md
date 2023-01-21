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
    fCallBack: () => {},
    quantity: 0
  }}
  img={{
    alt: 'This is a profile picture!',
    fCallBack: function noRefCheck() {},
    src: 'https://shorturl.at/nEO01'
  }}
  like={{
    fCallBack: function noRefCheck() {},
    quantity: 999
  }}
  mbSpacing="0"
  share={{
    fCallBack: function noRefCheck() {},
    label: 'Share'
  }}
  text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
  user={{
    avatar: {
      alt: 'avatar',
      buttonCallBack: function noRefCheck() {},
      imageCallBack: function noRefCheck() {},
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif'
    },
    joined: {
      fCallBack: function noRefCheck() {},
      href: '',
      label: 'Joined',
      type: 'joined'
    },
    label: 'Display Name',
    location: {
      fCallBack: function noRefCheck() {},
      href: '',
      label: 'Location',
      type: 'location'
    },
    timestamp: {
      fCallBack: function noRefCheck() {},
      href: '',
      label: 'Timestamp',
      type: 'timestamp'
    },
    username: {
      fCallBack: function noRefCheck() {},
      href: '',
      label: 'Username',
      type: 'username'
    },
    variant: 'xlarge'
  }}
  variant="timeline"
/>

```
