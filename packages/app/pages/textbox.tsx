import React, { useEffect, useMemo, useState } from 'react';
import {
  Button,
  FileUpload,
  IconLink,
  Modal,
  TextBox,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';
import { FileRejection } from 'react-dropzone';
import tw, { styled } from 'twin.macro';

export default function Profilepage() {
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
      <Modal label={'Modal'} isOpen={showModal} wide={true} onClose={() => setShowModal(false)}>
        <form onSubmit={() => console.log('Submit')} tw="container">
          <FileUpload
            label="Datei hierhin ziehen ..."
            fileDescription="JPEG oder PNG, maximal 50 MB"
            dragDescription="Jetzt loslassen ..."
            loading={false}
            onDropCallBack={onDropCallBack}
            errorMessage={fileUploadError}
          />
          <Row>
            <Button
              fCallBack={() => setShowModal(false)}
              icon="cancel"
              label="Abbrechen"
              size="large"
              type="button"
              color="slate"
              width="full"
            />
            <Button
              fCallBack={() => console.log('Send Button clicked')}
              icon="send"
              label="Speichern"
              size="small"
              type="button"
              color="violet"
              width="full"
            />
          </Row>
        </form>
      </Modal>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64 pt-64">
        <div tw="mb-32">
          <IconLink href="/profilepage" label="Back to profilepage" type="username" color="violet" />
        </div>

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

export interface IRowStyle {
  upload?: string;
}

const Row = styled.div(({ upload }: IRowStyle) => [
  tw`
    flex
    justify-between
    gap-16
    flex-col
    sm:(flex-row)
    mt-48
  `,
  upload === 'upload' && tw`mt-16`,
]);
