![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# FileUpload
## FileUpload properties
| Property|Description|
|-|-|
|label|The label text, that should be displayed. It's position is under the icon.|
|fileDescription|The description text, that should be displayed. It's position is under the label.|
|dragDescription|The description text, that should be displayed, when you drag a file over the dropzone.|
|loading|Show the loading spinner.|
|fCallBack|A callback function, that can be triggered|

## Include FileUpload from the component library

```js
// index.tsx, index.js, index.jsx

import { FileUpload } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### FileUpload *default* example

```js

<FileUpload
  label='Datei hierhin ziehen ...'
  fileDescription='JPEG oder PNG, maximal 50 MB'
  dragDescription='Jetzt loslassen ...'
  loading={false}
  fCallBack={() => console.log('FileUpload')}
/>

```