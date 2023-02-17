import React, { useEffect, useMemo, useState } from 'react';
import Navi from './includes/navi';
import {
  Switch,
  Container,
  Heading,
  Mumble,
  TextBox,
  User,
  IUserProps,
  MumbleHeader,
  UploadForm,
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
      alt: 'Alter Tag',
      buttonCallBack: () => console.log('button clicked'),
      imageCallBack: () => console.log('image clicked'),
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
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
      fCallBack: () => console.log('username clicked'),
      href: '',
      label: 'Username',
    },
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
            <MumbleHeader
              banner={{
                alt: 'Picture',
                fCallBack: () => console.log('banner clicked'),
                src: 'https://loremflickr.com/640/360',
                type: 'banner-edit',
              }}
              text="Schreib etwas über dich."
              user={{
                avatar: {
                  alt: 'Alttag',
                  buttonCallBack: () => console.log('buttonCallBack clicked'),
                  imageCallBack: () => console.log('imageCallBack clicked'),
                  src: 'https://placebeard.it/640x360',
                },
                joined: {
                  fCallBack: () => console.log('joined clicked'),
                  href: '#',
                  label: 'Joined',
                  type: 'joined',
                },
                label: 'Display Name',
                location: {
                  fCallBack: () => console.log('location clicked'),
                  href: '#',
                  label: 'Location',
                  type: 'joined',
                },
                settings: {
                  fCallBack: () => console.log('settings clicked'),
                },
                username: {
                  fCallBack: () => console.log('username clicked'),
                  href: '#',
                  label: 'username',
                  type: 'joined',
                },
                variant: 'xlarge',
              }}
              variant="edit"
            />
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
              fCallBack={(value) => console.log(`${value} clicked`)}
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
          {posts
            .slice(0)
            .reverse()
            .map((post, i) => {
              return (
                <Mumble
                  key={i}
                  comment={{
                    fCallBack: () => console.log('comment clicked'),
                    quantity: 0,
                  }}
                  img={{
                    alt: 'This is a profile picture!',
                    fCallBack: () => console.log('img clicked'),
                    src: 'https://picsum.photos/640/360',
                  }}
                  like={{
                    fCallBack: () => console.log('like clicked'),
                    quantity: 999,
                  }}
                  mbSpacing="32"
                  share={{
                    fCallBack: () => console.log('share clicked'),
                    label: 'Share',
                  }}
                  text={post}
                  user={{
                    avatar: {
                      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                      alt: 'Alter Tag',
                      href: '/detailview',
                      legacyBehavior: true,
                      passHref: true,
                      linkComponent: Link,
                    },
                    joined: {
                      fCallBack: () => console.log('joined clicked'),
                      href: '',
                      label: 'Joined',
                      type: 'joined',
                    },
                    label: 'Display Name',
                    location: {
                      fCallBack: () => console.log('location clicked'),
                      href: '',
                      label: 'Location',
                      type: 'location',
                    },
                    timestamp: {
                      type: 'timestamp',
                      href: '/',
                      label: 'Timestamp',
                      legacyBehavior: true,
                      passHref: true,
                      linkComponent: Link,
                    },
                    username: {
                      type: 'username',
                      href: '/',
                      label: 'Username',
                      legacyBehavior: true,
                      passHref: true,
                      linkComponent: Link,
                    },
                    variant: 'large',
                  }}
                  variant="timeline"
                />
              );
            })}
          <Mumble
            comment={{
              fCallBack: () => console.log('comment clicked'),
              quantity: 0,
            }}
            img={{
              alt: 'This is a profile picture!',
              fCallBack: () => console.log('img clicked'),
              src: 'https://picsum.photos/640/360',
            }}
            like={{
              fCallBack: () => console.log('like clicked'),
              quantity: 999,
            }}
            mbSpacing="32"
            share={{
              fCallBack: () => console.log('share clicked'),
              label: 'Share',
            }}
            text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
            user={{
              avatar: {
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                alt: 'Alter Tag',
                href: '/detailview',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              joined: {
                fCallBack: () => console.log('joined clicked'),
                href: '',
                label: 'Joined',
                type: 'joined',
              },
              label: 'Display Name',
              location: {
                fCallBack: () => console.log('location clicked'),
                href: '',
                label: 'Location',
                type: 'location',
              },
              timestamp: {
                type: 'timestamp',
                href: '/',
                label: 'Timestamp',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              username: {
                type: 'username',
                href: '/',
                label: 'Username',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              variant: 'large',
            }}
            variant="timeline"
          />
          <Mumble
            comment={{
              fCallBack: () => console.log('comment clicked'),
              quantity: 0,
            }}
            img={{
              alt: 'This is a profile picture!',
              fCallBack: () => console.log('img clicked'),
              src: 'https://picsum.photos/640/360',
            }}
            like={{
              fCallBack: () => console.log('like clicked'),
              quantity: 999,
            }}
            mbSpacing="32"
            share={{
              fCallBack: () => console.log('share clicked'),
              label: 'Share',
            }}
            text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
            user={{
              avatar: {
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                alt: 'Alter Tag',
                href: '/detailview',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              joined: {
                fCallBack: () => console.log('joined clicked'),
                href: '',
                label: 'Joined',
                type: 'joined',
              },
              label: 'Display Name',
              location: {
                fCallBack: () => console.log('location clicked'),
                href: '',
                label: 'Location',
                type: 'location',
              },
              timestamp: {
                type: 'timestamp',
                href: '/',
                label: 'Timestamp',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              username: {
                type: 'username',
                href: '/',
                label: 'Username',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              variant: 'large',
            }}
            variant="timeline"
          />
          <Mumble
            comment={{
              fCallBack: () => console.log('comment clicked'),
              quantity: 0,
            }}
            img={{
              alt: 'This is a profile picture!',
              fCallBack: () => console.log('img clicked'),
              src: 'https://picsum.photos/640/360',
            }}
            like={{
              fCallBack: () => console.log('like clicked'),
              quantity: 999,
            }}
            mbSpacing="32"
            share={{
              fCallBack: () => console.log('share clicked'),
              label: 'Share',
            }}
            text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
            user={{
              avatar: {
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                alt: 'Alter Tag',
                href: '/detailview',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              joined: {
                fCallBack: () => console.log('joined clicked'),
                href: '',
                label: 'Joined',
                type: 'joined',
              },
              label: 'Display Name',
              location: {
                fCallBack: () => console.log('location clicked'),
                href: '',
                label: 'Location',
                type: 'location',
              },
              timestamp: {
                type: 'timestamp',
                href: '/',
                label: 'Timestamp',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              username: {
                type: 'username',
                href: '/',
                label: 'Username',
                legacyBehavior: true,
                passHref: true,
                linkComponent: Link,
              },
              variant: 'large',
            }}
            variant="timeline"
          />
        </Container>
      </div>
    </>
  );
}
