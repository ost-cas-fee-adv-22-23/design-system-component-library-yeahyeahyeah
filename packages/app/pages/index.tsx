import React from 'react';
import { Logo, Cancel, Calendar, Checkmark, LogoMumble, Button, Mumble } from 'shared-ui';
import tw from 'twin.macro';

const App = () => {
  const handleAvatar = () => {
    console.log('avatar');
  };
  return (
    <div>
      <Button variant="pink" size="large" label="Roli Chicken Fest" icon="logo" width="default" />
      <Logo width={200} height={200} css={tw`fill-violet-600`} />
      <LogoMumble width={200} height={200} css={tw`fill-violet-600`} />
      <Calendar width={100} height={100} css={tw`fill-violet-600`} />
      <Cancel width={100} height={100} css={tw`fill-violet-600`} />
      <Checkmark width={100} height={100} css={tw`fill-violet-600`} />
      <p css={tw`text-pink-600 text-3xl`}>Hello World</p>
      <p tw={'text-violet-600 text-3xl'}>Hello World</p>
      <Mumble
        variant="detailpage"
        comment={{
          fCallBack: () => console.log('comment'),
          quantity: 0,
        }}
        img={{
          alt: 'This is a profile picture!',
          fCallBack: function noRefCheck() {
            return null;
          },
          src: 'https://shorturl.at/uvyKU',
        }}
        like={{
          fCallBack: () => console.log('like'),
          quantity: 999,
        }}
        share={{
          fCallBack: () => console.log('share'),
          label: 'Share',
        }}
        text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
        user={{
          avatar: {
            alt: 'avatar',
            imageCallBack: handleAvatar,
            src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
          },
          joined: {
            href: '',
            label: 'Joined',
            fCallBack: () => console.log('joined'),
          },
          label: 'Display Name',
          location: {
            href: '',
            label: 'Location',
            fCallBack: () => console.log('location'),
          },
          timestamp: {
            href: '',
            label: 'Timestamp',
            fCallBack: () => console.log('timestamp'),
          },
          username: {
            href: '',
            label: 'Username',
            fCallBack: () => console.log('username'),
          },
          variant: 'xlarge',
        }}
      />
    </div>
  );
};

export default App;
