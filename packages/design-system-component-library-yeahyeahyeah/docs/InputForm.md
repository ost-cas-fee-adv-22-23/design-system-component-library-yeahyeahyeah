![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# InputForm
## InputForm properties and how to use
| Property|Description|
|-|-|
|label|Label|
|editType|You can choose between *input* and *textarea*.|
|required|Set the *required* attribute to *true* or *false*. Default is set to *true*.|
|type|The type of the input. Default is set to *text*. You can choose between *text*, *password*, *email*, *search*, *tel*, *url*, *file*.|
|placeholder|The placeholder of the input or textarea.|
|errorMessage|The errormessage that should be seen.|
|autoComplete|The *autocomplete* property of the *input* or *textarea*. Default is *off*. You can set it to *on* also.|
|setText|Here you can pass a *setState* function. The text string that you type into the *textarea* or *input* will be passed into it.|
|setRef|Here you can pass a *setState* function. You will get a reference to the *input* or *textarea* eg. to clear the element.|
|onPressEnter|You can pass a callback function, to trigger whatever you want, when enter button is hit.|

## Include the InputForm from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useEffect, useState } from 'react';

```

### InputForm example with type *input*

```js

const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
const [text, setText] = useState<string>('');
const [errorMessage, setErrorMessage] = useState<string>('');

const handleClick = () => {
  if (text === '') {
    setErrorMessage('Bitte füllen sie das Feld aus.');
    return;
  }
  if (ref?.current) ref.current.value = '';
  setText('');
};

useEffect(() => {
  if (text !== '') {
    setErrorMessage('');
  }
  console.log('text', text);
}, [text]);

return (
  <InputForm
    editType={'input'}
    required={true}
    autoComplete={'off'}
    setRef={setRef}
    setText={setText}
    errorMessage={errorMessage}
    onPressEnter={handleClick}
  />
);

```

### InputForm example with type *textarea*

```js

const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
const [text, setText] = useState<string>('');
const [errorMessage, setErrorMessage] = useState<string>('');

const handleClick = () => {
  if (text === '') {
    setErrorMessage('Bitte füllen sie das Feld aus.');
    return;
  }
  if (ref?.current) ref.current.value = '';
  setText('');
};

useEffect(() => {
  if (text !== '') {
    setErrorMessage('');
  }
  console.log('text', text);
}, [text]);

return (
  <InputForm
    editType={'textarea'}
    required={true}
    autoComplete={'off'}
    setRef={setRef}
    setText={setText}
    errorMessage={errorMessage}
    onPressEnter={handleClick}
  />
);

```