import React, { useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  IconLink,
  IUserProps,
  TextBox,
  UploadForm,
  User,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';
import { FileRejection } from 'react-dropzone';
import Link from 'next/link';

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

  const props: IUserProps = {
    avatar: {
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      alt: 'Alter Tag',
      href: '/',
      legacyBehavior: true,
      passHref: true,
      linkComponent: Link,
    },
    btn: {
      fCallBack: () => console.log('button clicked'),
      label: 'Follow',
    },
    joined: {
      type: 'joined',
      fCallBack: () => console.log('joined clicked'),
      href: '',
      label: 'Joined',
    },
    label: 'Display Name',
    location: {
      type: 'joined',
      fCallBack: () => console.log('location clicked'),
      href: '',
      label: 'Location',
    },
    timestamp: {
      type: 'joined',
      fCallBack: () => console.log('timestamp clicked'),
      href: '',
      label: 'Timestamp',
    },
    username: {
      type: 'joined',
      href: '/',
      label: 'Username',
      legacyBehavior: true,
      passHref: true,
      linkComponent: Link,
    },
    variant: 'recommended',
  };

  return (
    <>
      <UploadForm
        onDropCallBack={onDropCallBack}
        showModal={showModal}
        setShowModal={setShowModal}
        fileUploadError={fileUploadError}
      />
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64 pt-64">
        <div tw="mb-32">
          <IconLink
            label="Back to profilepage"
            type="username"
            color="violet"
            href="/profilepage"
            legacyBehavior
            passHref
            linkComponent={Link}
          />
        </div>
        <div tw="mb-32">
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
        <div tw="mb-32">
          <Avatar
            src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif"
            alt="Alter Tag"
            variant="small"
            href="/"
            legacyBehavior={true}
            passHref={true}
            linkComponent={Link}
          />
        </div>
        <User {...props} />
      </div>
    </>
  );
}
