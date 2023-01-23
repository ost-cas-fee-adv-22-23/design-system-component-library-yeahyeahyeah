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
