import React from 'react';
import Link from 'next/link';
import { Navigation } from '@smartive-education/design-system-component-library-yeahyeahyeah';

export default function Navi() {
  const handleAvatar = () => {
    console.log('avatar clicked');
  };
  return (
    <>
      <div tw="flex flex-row justify-start items-center font-medium p-16 gap-16">
        <Link href={'/'}>Timeline</Link>
        <Link href={'./detailview'}>Detailview</Link>
        <Link href={'./profilepage'}>Profilepage</Link>
      </div>
      <div tw="w-full mb-32">
        <Navigation
          logo={{
            title: 'Mumble Logo',
            href: '#',
            color: 'white',
            alignment: 'horizontal',
            fCallBack: () => console.log('logo'),
            isNavigation: true,
          }}
          avatar={{
            label: 'Label',
            variant: 'profile',
            fCallBack: handleAvatar,
            avatar: { src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif', variant: 'small', alt: 'Avatar' },
          }}
          settings={{
            label: 'Detailview',
            variant: 'default',
            fCallBack: () => console.log('settings'),
            icon: 'settings',
          }}
          logout={{
            label: 'Logout',
            variant: 'default',
            fCallBack: () => console.log('logout'),
            icon: 'logout',
          }}
        />
      </div>
    </>
  );
}
