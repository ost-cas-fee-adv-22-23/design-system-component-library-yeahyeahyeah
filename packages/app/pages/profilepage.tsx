import React, { useEffect, useState } from 'react';
import Navi from './includes/navi';
import {
  Switch,
  Container,
  Heading,
  Mumble,
  TextBox,
  ImageContainer,
  Avatar,
  User,
  Paragraph,
  IUserProps,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';

export default function Profilepage() {
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
      <div tw="flex flex-col justify-center items-center bg-slate-200 w-full h-full pb-64">
        <Navi />
        <div tw="container py-16">
          <div tw="flex flex-col justify-between">
            <ImageContainer src="https://placebeard.it/640x360" alt="Picture" type="banner" />
            <div tw="px-8 mb-16">
              <User
                avatar={{
                  alt: 'Alter Tag',
                  buttonCallBack: () => console.log('button clicked'),
                  imageCallBack: () => console.log('image clicked'),
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                }}
                btn={{
                  fCallBack: () => console.log('button clicked'),
                  label: 'Follow',
                }}
                joined={{
                  type: 'joined',
                  fCallBack: () => console.log('joined clicked'),
                  href: '',
                  label: 'Joined',
                }}
                label="Display Name"
                location={{
                  type: 'joined',
                  fCallBack: () => console.log('location clicked'),
                  href: '',
                  label: 'Location',
                }}
                timestamp={{
                  type: 'joined',
                  fCallBack: () => console.log('timestamp clicked'),
                  href: '',
                  label: 'Timestamp',
                }}
                username={{
                  type: 'joined',
                  fCallBack: () => console.log('username clicked'),
                  href: '',
                  label: 'Username',
                }}
                variant="xlarge"
              />
            </div>
            <div tw="flex justify-end items-end z-10 h-0 relative -top-16 overflow-visible">
              <Avatar src="https://picsum.photos/640/360" alt="Picture" variant="edit" />
            </div>
            <div tw="p-8 mb-32">
              <Paragraph
                text="De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
                color="light"
              />
            </div>
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
                  label: 'Username',
                  href: '#',
                  type: 'username',
                },
                avatar: {
                  src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                  alt: 'Alter Tag',
                  imageCallBack: () => console.log('avatar clicked'),
                },
              }}
              form={{
                errorMessage: errorMessage,
                placeholder: 'Hast du uns etwas mitzuteilen ?',
                setRef: setRef,
                setText: setText,
              }}
              sendCallback={handleSend}
              uploadCallback={() => console.log('uploadCallback')}
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
                      alt: 'avatar',
                      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                      imageCallBack: () => console.log('avatar clicked'),
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
                      fCallBack: () => console.log('timestamp clicked'),
                      href: '',
                      label: 'Timestamp',
                      type: 'timestamp',
                    },
                    username: {
                      fCallBack: () => console.log('username clicked'),
                      href: '',
                      label: 'Username',
                      type: 'username',
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
                alt: 'avatar',
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                imageCallBack: () => console.log('avatar clicked'),
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
                fCallBack: () => console.log('timestamp clicked'),
                href: '',
                label: 'Timestamp',
                type: 'timestamp',
              },
              username: {
                fCallBack: () => console.log('username clicked'),
                href: '',
                label: 'Username',
                type: 'username',
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
                alt: 'avatar',
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                imageCallBack: () => console.log('avatar clicked'),
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
                fCallBack: () => console.log('timestamp clicked'),
                href: '',
                label: 'Timestamp',
                type: 'timestamp',
              },
              username: {
                fCallBack: () => console.log('username clicked'),
                href: '',
                label: 'Username',
                type: 'username',
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
                alt: 'avatar',
                src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
                imageCallBack: () => console.log('avatar clicked'),
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
                fCallBack: () => console.log('timestamp clicked'),
                href: '',
                label: 'Timestamp',
                type: 'timestamp',
              },
              username: {
                fCallBack: () => console.log('username clicked'),
                href: '',
                label: 'Username',
                type: 'username',
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
