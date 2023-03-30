![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# FileUpload
## FileUpload properties
| Property|Description|
|-|-|
|label|The label text, that should be displayed. It's position is under the icon.|
|fileDescription|The description text, that should be displayed. It's position is under the label.|
|dragDescription|The description text, that should be displayed, when you drag a file over the dropzone.|
|loading|Show the loading spinner.|
|onDropCallBack|Callback function that returns an *acceptedFiles* array and a *fileRejections* array|

## Include FileUpload from the component library

```js
// index.tsx, index.js, index.jsx

import { FileUpload } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### FileUpload *default* example

```js

const [error, setError] = React.useState('');

const setTimerForError = () =>
  setTimeout(() => {
    setError('');
  }, 2000);

const onDropCallBack = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
  fileRejections?.length && setError(fileRejections[0].errors[0].message);
  setTimerForError();
};

<FileUpload
  label="Datei hierhin ziehen ..."
  fileDescription="JPEG, GIF oder PNG, maximal 5 MB"
  dragDescription="Jetzt loslassen ..."
  loading={false}
  onDropCallBack={onDropCallBack}
  errorMessage={error}
/>

```