import React, { useEffect, useMemo, useState } from 'react';
import { Hashtag, TextBox } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';

export default function Profilepage() {
  const [posts, setPosts] = useState(['']);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const router = useRouter();

  const navigateToRoot = () => {
    router.push('/');
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
      <Hashtag fCallBack={navigateToRoot} label="TextBox" size="small" />
    </>
  );
}
