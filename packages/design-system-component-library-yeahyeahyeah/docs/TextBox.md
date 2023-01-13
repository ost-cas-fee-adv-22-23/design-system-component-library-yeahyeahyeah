![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# InputForm
## InputForm properties and how to use
| Property|Description|
|-|-|
|user|is needed for variant *write* and *inline*. [Navigation To User](./?path=/story/navigation-navigation--navigation-story)|
|editType|You can choose between *input* and *textarea*.|
|required|Set the *required* attribute to *true* or *false*. Default is set to *true*.|
|type|The type of the input. Default is set to *text*. You can choose between *text*, *password*, *email*, *search*, *tel*, *url*, *file*.|
|placeholder|The placeholder of the input or textarea.|
|errorMessage|The errormessage that should be seen.|
|autoComplete|The *autocomplete* property of the *imput* or *textarea*. Default is *off*. You can set to *on*.|
|setText|Here you can pass an *setState* function. The text that you type into the *textarea* or *input* will be passed into it.|
|setRef|Here you can pass an *setState* function. You will get a reference to the *input* or *textarea*.|
|onPressEnter|You can pass a callback function, to trigger whatever you want, when enter button is hit.|

## Include the InputForm from the component library in your App

```js
// index.tsx, index.js, index.jsx

import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
```

### TextBox example *start* without user object

```typescript

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
    uploadCallback={action('uploadCallback')}
  />
);

```

### TextBox example *write* or *inline* (with user object)

```typescript

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
      label: 'Display Name',
      username: {
        label: 'Username',
        href: '#',
        type: 'username',
      },
      avatar: {
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
        alt: 'Alter Tag',
      },
    }}
    form={{
      errorMessage: errorMessage,
      placeholder: 'Hast du uns etwas mitzuteilen ?',
      setRef: setRef,
      setText: setText,
    }}
    sendCallback={handleSend}
    uploadCallback={action('uploadCallback')}
  />
);

```
