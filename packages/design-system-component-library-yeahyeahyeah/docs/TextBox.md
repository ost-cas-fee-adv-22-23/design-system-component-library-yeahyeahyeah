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

## Include the InputForm from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
```

### TextBox example with variant *"start"* without user object

```js

const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
const [text, setText] = useState<string>('');
const [errorMessage, setErrorMessage] = useState<string>('');

const handleSend = () => {
  if (text === '') {
    setErrorMessage('Bitte füllen sie das Formular aus.');
    return;
  }
  if (ref?.current) ref.current.value = '';
  setText('');
};

useEffect(() => {
  if (text !== '') {
    setErrorMessage('');
  }
}, [text]);

return (
  <TextBox
    variant="start"
    form={{
      errorMessage: errorMessage,
      placeholder: 'Hast du uns etwas mitzuteilen ?',
      setRef: setRef,
      setText: setText,
    }}
    sendCallback={handleSend}
    uploadCallback={() => console.log('uploadCallback')}
  />
);

```

### TextBox example with variant *"write"* or *"inline"* (with user object)

```js

const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
const [text, setText] = useState<string>('');
const [errorMessage, setErrorMessage] = useState<string>('');

const handleSend = () => {
  if (text === '') {
    setErrorMessage('Bitte füllen sie das Formular aus.');
    return;
  }
  if (ref?.current) ref.current.value = '';
  setText('');
};

useEffect(() => {
  if (text !== '') {
    setErrorMessage('');
  }
}, [text]);

return (
  <TextBox
    variant="write"
    user={{
      label: 'Hey, was läuft?',
      username: {
        label: 'Username',
        href: '#',
        type: 'username',
      },
      avatar: {
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
        alt: 'Alter Tag',
        imageCallBack: () => console.log('avatar clicked'),
      },
    }}
    form={{
      errorMessage: errorMessage,
      placeholder: 'Hast du uns etwas mitzuteilen ?',
      setRef: setRef,
      setText: setText,
    }}
    sendCallback={handleSend}
    uploadCallback={() => console.log('uploadCallback')}
  />
);

```
