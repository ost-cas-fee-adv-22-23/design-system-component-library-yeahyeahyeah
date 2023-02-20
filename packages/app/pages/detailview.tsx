import React, { useEffect, useMemo, useState } from 'react';
import Navi from './includes/navi';
import { Mumble, TextBox, Container, UploadForm } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';
import { FileRejection } from 'react-dropzone';

export default function Detailview() {
  const [posts, setPosts] = useState(['']);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [fileUploadError, setFileUploadError] = useState('');

  const setTimerForError = () =>
    setTimeout(() => {
      setFileUploadError('');
    }, 2000);

  const onDropCallBack = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    console.log('acceptedFiles, fileRejections', acceptedFiles, fileRejections);
    fileRejections?.length && setFileUploadError(fileRejections[0].errors[0].message);
    setTimerForError();
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
    setShowModal(true);
  };

  return (
    <>
      <UploadForm
        onDropCallBack={onDropCallBack}
        showModal={showModal}
        setShowModal={setShowModal}
        fileUploadError={fileUploadError}
      />
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="box">
          <div tw="border-b-1 border-slate-200">
            <Mumble mbSpacing="0" variant="detailpage" />
          </div>
          <div tw="border-b-1 border-slate-200">
            <TextBox
              variant="write"
              user={{
                label: 'Hey, was läuft?',
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
          {posts
            .slice(0)
            .reverse()
            .map((post, i) => {
              return <Mumble key={i} mbSpacing="0" variant="timeline" />;
            })}
        </Container>
      </div>
    </>
  );
}
