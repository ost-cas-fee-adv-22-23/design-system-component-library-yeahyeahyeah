![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# InputForm
## InputForm properties and how to use
| Property|Description|
|-|-|
|label|Label|
|labelSize|Size of the label|
|editType|You can choose between *input* and *textarea*.|
|required|Set the *required* attribute to *true* or *false*. Default is set to *true*.|
|type|The type of the input. Default is set to *text*. You can choose between *text*, *password*, *email*, *search*, *tel*, *url*, *file*.|
|placeholder|The placeholder of the input or textarea.|
|errorMessage|The errormessage that should be seen.|
|autoComplete|The *autocomplete* property of the *input* or *textarea*. Default is *off*. You can set it to *on* also.|
|inputValue|The *value* of the input element will be set with this *value*. You can also clear the *input*, with an empty *value*.|
|setInputValue|Here you can pass a *setState* function. The input *value* of the form element will be set with this *setState* function|
|onPressEnter|You can pass a callback function, to trigger whatever you want, when enter button is hit.|

### InputForm example with type *input*

```js

import React, { useEffect, useMemo, useState } from 'react';
import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';

export default function Profilepage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePressEnter = () => {
    if (inputValue === '') {
      setErrorMessage('Bitte füllen Sie das Formular aus.');
      return;
    }
    setInputValue('');
  };

  const setErrorDebounced = useMemo(
    () =>
      debounce(() => {
        setErrorMessage('');
      }, 100),
    [debounce]
  );

  useEffect(() => {
    if (inputValue !== '') {
      setErrorDebounced();
    }
  }, [inputValue, setErrorDebounced]);

  return (
    <InputForm
      editType={'input'}
      placeholder={'Bitte geben sie einen Text ein '}
      required={true}
      autoComplete={'off'}
      setInputValue={setInputValue}
      inputValue={inputValue}
      errorMessage={errorMessage}
      onPressEnter={handlePressEnter}
      data-testid={'label'}
    />
  );
}

```

### InputForm example with type *textarea*

```js

import React, { useEffect, useMemo, useState } from 'react';
import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';

export default function Profilepage() {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePressEnter = () => {
    if (inputValue === '') {
      setErrorMessage('Bitte füllen Sie das Formular aus.');
      return;
    }
    setInputValue('');
  };

  const setErrorDebounced = useMemo(
    () =>
      debounce(() => {
        setErrorMessage('');
      }, 100),
    [debounce]
  );

  useEffect(() => {
    if (inputValue !== '') {
      setErrorDebounced();
    }
  }, [inputValue, setErrorDebounced]);

  return (
    <InputForm
      editType={'textarea'}
      placeholder={'Bitte geben sie einen Text ein '}
      required={true}
      autoComplete={'off'}
      setInputValue={setInputValue}
      inputValue={inputValue}
      errorMessage={errorMessage}
      onPressEnter={handlePressEnter}
      data-testid={'label'}
    />
  );
}

```