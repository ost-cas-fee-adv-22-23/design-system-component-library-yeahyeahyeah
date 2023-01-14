import { InputForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useEffect, useState } from 'react';

export default function Profilepage() {
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
}
