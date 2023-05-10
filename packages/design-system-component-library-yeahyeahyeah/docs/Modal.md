![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Modal
## Modal properties
| Property|Description|
|-|-|
|label|Here you can set a label for the modal.|
|children|Here you can set what should be rendered inside the modal if opened.|
|isOpen|This boolean is needed to open or close the modal. You can set it to *true* or *false*|
|onClose|Here you can set a callback function to control what should happen after closing the modal.|

## Include our modal from the component library in your app

```js
// index.tsx, index.js, index.jsx

import { Modal } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

## Modal snippet

```js

<Modal label="Settings" isOpen={true} onClose={() => console.log('on close triggered')}>Settings</Modal>

```


## Example of Navigation with Modal

Import everything needed

```js
// index.tsx, index.js, index.jsx

import { Modal, Navigation } from "@smartive-education/design-system-component-library-yeahyeahyeah"
import { useState } from 'react';

```

Then add the logic to your functional component

```js

const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen((open) => !open);
};

const handleClose = () => {
  setOpen((open) => !open);
};

return !open ? (
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
      icon: 'settings',
      label: 'Settings',
      variant: 'default',
      fCallBack: handleClick,
    }}
  />
) : (
  <Modal label="Settings" isOpen={open} onClose={handleClose}>
    Settings
  </Modal>
);

```
