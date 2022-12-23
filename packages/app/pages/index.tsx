import React from 'react';
import { Button, Mumble } from 'shared-ui/dist';
import { Logo, Cancel, Calendar, Checkmark, LogoMumble } from 'shared-ui/dist';
import tw from 'twin.macro';

const App = () => {
  return (
    <div>
      <Button
        variant="pink"
        size="large"
        label="Roli Chicken Fest"
        icon="logo"
        width="default"
      />
      <Logo width={200} height={200} css={tw`fill-violet-600`} />
      <LogoMumble width={200} height={200} css={tw`fill-violet-600`} />
      <Calendar width={100} height={100} css={tw`fill-violet-600`} />
      <Cancel width={100} height={100} css={tw`fill-violet-600`} />
      <Checkmark width={100} height={100} css={tw`fill-violet-600`} />
      <p css={tw`text-pink-600 text-3xl`}>Hello World</p>
      <Mumble
        variant="response"
        avatar={{
          alt: 'Alt-Tag',
          fCallBack: () => {},
          src: '',
        }}
        comment={{
          fCallBack: function noRefCheck() {},
          quantity: 0,
        }}
        img={{
          alt: 'This is a profile picture!',
          fCallBack: function noRefCheck() {},
          src: 'https://shorturl.at/uvyKU',
        }}
        like={{
          fCallBack: function noRefCheck() {},
          quantity: 999,
        }}
        share={{
          fCallBack: function noRefCheck() {},
          label: 'Share',
        }}
        text="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking."
        user={{
          avatar: {
            alt: 'avatar',
            fCallBack: function noRefCheck() {},
            src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
          },
          btn: {
            fCallBack: function noRefCheck() {},
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
