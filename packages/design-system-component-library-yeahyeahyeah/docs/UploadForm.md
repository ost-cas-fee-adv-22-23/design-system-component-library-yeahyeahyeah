![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# UploadForm
## UploadForm properties
| Property|Description|
|-|-|
|setShowModal|Set State function, that can be used to set *true* or *false*|
|showModal|State that is set with the function above. Has to given back to the component.|
|onDropCallBack|Callback function that returns an *acceptedFiles* array and a *fileRejections* array.|
|fileUploadError|Error message that should be shown.|

## Include UploadForm from the component library

```js
// index.tsx, index.js, index.jsx

import { UploadForm } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### UploadForm *default* example

```js

const [fileUploadError, setFileUploadError] = React.useState('');
const [showModal, setShowModal] = useState(true);

const setTimerForError = () =>
  setTimeout(() => {
    setFileUploadError('');
  }, 2000);

const onDropCallBack = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
  console.log('acceptedFiles, fileRejections', acceptedFiles, fileRejections);
  fileRejections?.length && setFileUploadError(fileRejections[0].errors[0].message);
  setTimerForError();
};

return (
  <UploadForm showModal={showModal} onDropCallBack={onDropCallBack} setShowModal={setShowModal} fileUploadError={fileUploadError} />
);

```