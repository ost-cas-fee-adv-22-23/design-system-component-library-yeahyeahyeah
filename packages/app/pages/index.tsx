import Navi from './includes/navi';
import { Mumble, TextBox, Heading, Container } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import React, { useEffect, useState } from 'react';

export default function Timeline() {
  const [posts, setPosts] = useState(['']);
  const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    console.log('text', text);
    if (text !== '') {
      setErrorMessage('');
    }
  }, [text]);

  const handleSend = () => {
    if (ref?.current) ref.current.value = '';
    addText();
  };

  const addText = () => {
    if (text === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
      return;
    }

    if (posts[0] === '') {
      setPosts([text]);
      setText('');
      return;
    }
    setPosts([...posts, text]);
    setText('');
  };

  const handleUpload = () => {
    console.log('upload');
  };

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="plain">
          <Heading label="Willkommen auf Mumble" color="violet" tag="h2" size="default" mbSpacing="32" />
          <Heading
            label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."
            color="light"
            tag="h4"
            size="default"
            mbSpacing="32"
          />
        </Container>
        <Container layout="plain">
          <div tw="mb-32">
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
                placeholder: 'Hast du uns etwas mitzuteilen ?',
                setRef: setRef,
                setText: setText,
              }}
              sendCallback={handleSend}
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
                    fCallBack: function noRefCheck() {
                      console.log('clicked');
                    },
                    quantity: 0,
                  }}
                  img={{
                    alt: 'This is a profile picture!',
                    fCallBack: function noRefCheck() {
                      console.log('clicked');
                    },
                    src: 'https://picsum.photos/640/360',
                  }}
                  like={{
                    fCallBack: function noRefCheck() {
                      console.log('clicked');
                    },
                    quantity: 999,
                  }}
                  mbSpacing="32"
                  share={{
                    fCallBack: function noRefCheck() {
                      console.log('clicked');
                    },
                    label: 'Share',
                  }}
                  text={post}
                  user={{
                    avatar: {
                      alt: 'avatar',
                      buttonCallBack: function noRefCheck() {
                        console.log('clicked');
                      },
                      imageCallBack: function noRefCheck() {
                        console.log('clicked');
                      },
                      src: 'https://picsum.photos/640/360',
                    },
                    joined: {
                      type: 'joined',
                      fCallBack: function noRefCheck() {
                        console.log('clicked');
                      },
                      href: '',
                      label: 'Joined',
                    },
                    label: 'Display Name',
                    location: {
                      type: 'joined',
                      fCallBack: function noRefCheck() {
                        console.log('clicked');
                      },
                      href: '',
                      label: 'Location',
                    },
                    timestamp: {
                      type: 'joined',
                      fCallBack: function noRefCheck() {
                        console.log('clicked');
                      },
                      href: '',
                      label: 'Timestamp',
                    },
                    username: {
                      type: 'joined',
                      fCallBack: function noRefCheck() {
                        console.log('clicked');
                      },
                      href: '',
                      label: 'Username',
                    },
                    variant: 'xlarge',
                  }}
                  variant="timeline"
                />
              );
            })}
        </Container>
      </div>
    </>
  );
}
