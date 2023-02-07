![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# User
## User properties and how to use
| Property|Description|
|-|-|
|variant|Change *type* and *style* of user element. Variant **xlarge** triggers an additional control *type* with options **edit** and **view**. Only in use for [MumbleHeader](./?path=/story/mumble-mumble-header--mumble-story).|
|avatar|See further details on [Avatar](./?path=/docs/user--avatar-story)
|btn|See [Button](./?path=/docs/interactions--button-story).|
|joined|See see settings of [Interaction Icon Link](./?path=/docs/interactions--icon-link-variants)|
|label|Label text.|
|timestamp|See see settings of [Interaction Icon Link](./?path=/docs/interactions--icon-link-variants)|
|username|See see settings of [Interaction Icon Link](./?path=/docs/interactions--icon-link-variants)|
|type|For variant *xlarge* only. **edit** invokes an *settings* icon for further profile edits. *view* hides the settings icon.|


## Include User from the component library

```js
// index.tsx, index.js, index.jsx

import { User } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### User *recommended* example

```js

<User
  avatar={{
    alt: 'Alter Tag',
    buttonCallBack: () => console.log('button clicked'),
    imageCallBack: () => console.log('image clicked'),
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
  }}
  btn={{
    fCallBack: () => console.log('btn clicked'),
    label: 'Follow',
  }}
  label="Display Name"
  username={{
    fCallBack: () => console.log('username clicked'),
    href: '',
    label: 'Username',
    type: 'username',
  }}
  variant="recommended"
/>

```

### User *small* example

```js

<User
  avatar={{
    alt: 'Alter Tag',
    buttonCallBack: () => console.log('button clicked'),
    imageCallBack: () => console.log('image clicked'),
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
  }}
  label="Display Name"
  timestamp={{
    fCallBack: () => console.log('timestamp clicked'),
    href: '',
    label: 'Timestamp',
    type: 'timestamp',
  }}
  username={{
    fCallBack: () => console.log('username clicked'),
    href: '',
    label: 'Username',
    type: 'username',
  }}
  variant="small"
/>

```

### Render a list of *recommended* users - example

```js

const props: IUserProps = {
    avatar: {
      alt: 'Alter Tag',
      buttonCallBack: handleClick,
      imageCallBack: handleClick,
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    },
    btn: {
      fCallBack: handleClick,
      label: 'Follow',
    },
    joined: {
      type: 'joined',
      fCallBack: handleClick,
      href: '',
      label: 'Joined',
    },
    label: 'Display Name',
    location: {
      type: 'joined',
      fCallBack: handleClick,
      href: '',
      label: 'Location',
    },
    timestamp: {
      type: 'joined',
      fCallBack: handleClick,
      href: '',
      label: 'Timestamp',
    },
    username: {
      type: 'joined',
      fCallBack: handleClick,
      href: '',
      label: 'Username',
    },
    variant: 'recommended',
  };

  const users = Array(12)
    .fill('user')
    .map((u, i) => (
      <div tw="flex-[30%]" key={i}>
        <User {...props} />
      </div>
    ));

```

### User **xlarge** in *edit* mode - Explicit in MumbleHeader

```js

<User
  avatar={{
    alt: 'Alter Tag',
    buttonCallBack: () => {},
    imageCallBack: function noRefCheck() {},
    src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif'
  }}
  btn={{
    fCallBack: function noRefCheck() {},
    label: 'Follow'
  }}
  joined={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Joined',
    type: 'joined'
  }}
  label="Display Name"
  location={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Location',
    type: 'location'
  }}
  settings={{
    fCallBack: function noRefCheck() {}
  }}
  timestamp={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Timestamp',
    type: 'timestamp'
  }}
  type="edit"
  username={{
    fCallBack: function noRefCheck() {},
    href: '',
    label: 'Username',
    type: 'username'
  }}
  variant="xlarge"
/>

```