import React, { useEffect, useMemo, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Navi from './includes/navi';
import {
  Switch,
  Container,
  Heading,
  TextBox,
  User,
  UserProps,
  UploadForm,
  BottomSpacing,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';
import debounce from 'lodash.debounce';
import { FileRejection } from 'react-dropzone';

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

  const props: UserProps = {
    avatar: {
      alt: 'Alter Tag',
      onImageClick: () => console.log('image clicked'),
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
    },
    label: 'Display Name',
    variant: 'recommended',
  };

  const users = Array(12)
    .fill('user')
    .map((u, i) => (
      <div tw="flex-[30%]" key={i}>
        <User {...props} />
      </div>
    ));

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
        <div tw="container py-16">
          <div tw="flex flex-col justify-between">
            <Switch
              options={[
                {
                  label: 'Deine Mumbles',
                  value: 'mumbles',
                },
                {
                  label: 'Deine Likes',
                  value: 'likes',
                },
              ]}
              value="mumbles"
              fCallBack={(value: string) => console.log(`${value} clicked`)}
            />
          </div>
        </div>
        <Container layout="plain">
          <Heading tag="h3" size="default" label="Empfohlene User" mbSpacing="16" color="dark" />
          <div tw="flex flex-row flex-wrap gap-12 mb-32">{users}</div>
          <div tw="mb-32">
            <Heading tag="h3" size="default" label="Empfohlene Mumbles" mbSpacing="16" color="dark" />
            <TextBox
              variant="write"
              user={{
                label: 'Hey, was läuft?',
                avatar: {
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                  alt: 'Family Guy goes Mumble',
                  onImageClick: () => console.log('avatar clicked'),
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
        </Container>
      </div>
    </>
  );
}

interface IRowStyles {
  gap?: string;
  mbSpacing?: string;
}

interface IArticleStyles {
  variant?: string;
  mbSpacing: string;
}

const Row = styled.div(({ gap }: IRowStyles) => [
  tw`
    flex
    flex-row
    flex-wrap
    justify-start
    items-center
    w-full
    mt-16
    `,
  gap === 'small' && tw`gap-8`,
  BottomSpacing,
]);

const Article = styled.article(({ variant }: IArticleStyles) => [
  tw`
    flex
    flex-col
    justify-start
    items-start
    w-full
    bg-slate-white
    py-32
    px-16
    sm:px-48
  `,
  (variant === 'timeline' || variant === 'detailpage') && tw`rounded-xl`,
  BottomSpacing,
]);

const AvatarWrapper = styled.div(() => [
  tw`
   mr-16
  `,
]);

const UserWrapper = styled.div(() => [
  BottomSpacing,
  tw`
    flex
    flex-row-reverse
    justify-between
    items-center
    relative
    left-0
    sm:(-left-[84px])
  `,
]);
