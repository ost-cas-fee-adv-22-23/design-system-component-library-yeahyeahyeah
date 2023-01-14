import Navi from './includes/navi';
import { Mumble, TextBox, Container } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import React, { useEffect, useState } from 'react';

export default function Detailview() {
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

  const handleClick = () => {
    console.log('avatar clicked');
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

  return (
    <>
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <Container layout="box">
          <div tw="border-b-1 border-slate-200">
            <Mumble
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
              mbSpacing="0"
              share={{
                fCallBack: function noRefCheck() {
                  console.log('clicked');
                },
                label: 'Share',
              }}
              text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
              user={{
                avatar: {
                  alt: 'avatar',
                  buttonCallBack: function noRefCheck() {
                    console.log('clicked');
                  },
                  imageCallBack: function noRefCheck() {
                    console.log('clicked');
                  },
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                },
                joined: {
                  fCallBack: function noRefCheck() {
                    console.log('clicked');
                  },
                  href: '',
                  label: 'Joined',
                  type: 'joined',
                },
                label: 'Display Name',
                location: {
                  fCallBack: function noRefCheck() {
                    console.log('clicked');
                  },
                  href: '',
                  label: 'Location',
                  type: 'location',
                },
                timestamp: {
                  fCallBack: function noRefCheck() {
                    console.log('clicked');
                  },
                  href: '',
                  label: 'Timestamp',
                  type: 'timestamp',
                },
                username: {
                  fCallBack: function noRefCheck() {
                    console.log('clicked');
                  },
                  href: '',
                  label: 'Username',
                  type: 'username',
                },
                variant: 'large',
              }}
              variant="detailpage"
            />
          </div>
          <div tw="border-b-1 border-slate-200">
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
              uploadCallback={() => console.log('upload')}
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
