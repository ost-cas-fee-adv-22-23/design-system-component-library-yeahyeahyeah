import React from 'react';
import { Logo, Cancel, Calendar, Checkmark, LogoMumble, Button, Mumble } from 'shared-ui';
import tw from 'twin.macro';

const App = () => {
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
        avatar={{
          alt: 'Alt-Tag',
          fCallBack: () => {
            return null;
          },
          src: 'https://shorturl.at/uvyKU',
        }}
        comment={{
          fCallBack: function noRefCheck() {
            return null;
          },
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
          fCallBack: function noRefCheck() {
            return null;
          },
          quantity: 999,
        }}
        share={{
          fCallBack: function noRefCheck() {
            return null;
          },
          label: 'Share',
        }}
        text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
        user={{
          avatar: {
            alt: 'avatar',
            fCallBack: function noRefCheck() {
              return null;
            },
            src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
          },
          btn: {
            fCallBack: function noRefCheck() {
              return null;
            },
            label: 'Follow',
          },
          joined: {
            href: '',
            label: 'Joined',
          },
          label: 'Display Name',
          location: {
            href: '',
            label: 'Location',
          },
          timestamp: {
            href: '',
            label: 'Timestamp',
          },
          username: {
            href: '',
            label: 'Username',
          },
          variant: 'xlarge',
        }}
      />
    </div>
  );
};

export default App;
