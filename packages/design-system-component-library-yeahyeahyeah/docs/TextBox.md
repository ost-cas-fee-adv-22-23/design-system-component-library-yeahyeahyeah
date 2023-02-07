![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# InputForm
## InputForm properties and how to use
| Property|Description|
|-|-|
|user|Is needed for variant *write* and *inline*. [Navigation To User](./?path=/docs/user-user--user-story)|
|form|Property object for handling the form functionality. You will have to set *errorMessage*, *placeholder*, *setRef* and *setText* - see example or [Navigation To InputForm](./?path=/docs/form-input--form-input-story)|
|variant|Possible options are *write*, *inline* and *start*. Default is set to *start*. If you choose *write* or *inline*, you will have to set the user property|
|uploadCallBack|You can pass a callback function, to trigger whatever you want, when the upload button is hit.|
|sendCallback|You can pass a callback function, to trigger whatever you want, when enter button is hit.|

### TextBox example with variant *"start"* without user object

```js

import React, { useEffect, useMemo, useState } from 'react';
import { TextBox } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';

export default function Profilepage() {
  const [posts, setPosts] = useState(['']);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const addText = () => {
    if (inputValue === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
      return;
    }

    if (posts[0] === '') {
      setPosts([inputValue]);
      setInputValue('');
      return;
    }
    setPosts([...posts, inputValue]);
    setInputValue('');
  };

  const handleUpload = () => {
    console.log('upload');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64 pt-64">
        <TextBox
          variant="start"
          form={{
            errorMessage: errorMessage,
            placeholder: 'Hast du uns etwas mitzuteilen?',
          }}
          setInputValue={setInputValue}
          inputValue={inputValue}
          sendCallback={addText}
          uploadCallback={handleUpload}
        />
      </div>
    </>
  );
}


```

### TextBox example with variant *"write"* or *"inline"* (with user object)

```js

import React, { useEffect, useMemo, useState } from 'react';
import { TextBox } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';

export default function Profilepage() {
  const [posts, setPosts] = useState(['']);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const addText = () => {
    if (inputValue === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
      return;
    }

    if (posts[0] === '') {
      setPosts([inputValue]);
      setInputValue('');
      return;
    }
    setPosts([...posts, inputValue]);
    setInputValue('');
  };

  const handleUpload = () => {
    console.log('upload');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64 pt-64">
        <TextBox
          variant="write"
          user={{
            label: 'Hey, was läuft?',
            username: {
              type: 'joined',
              label: 'Username',
              href: '#',
            },
            avatar: {
              src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
              alt: 'Family Guy goes Mumble',
            },
          }}
          form={{
            errorMessage: errorMessage,
            placeholder: 'Hast du uns etwas mitzuteilen?',
          }}
          setInputValue={setInputValue}
          inputValue={inputValue}
          sendCallback={addText}
          uploadCallback={handleUpload}
        />
      </div>
    </>
  );
}

```
