import React from 'react';
import Link from 'next/link';
import { Navigation } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useRouter } from 'next/router';

export default function Navi() {
  const router = useRouter();

  const handleAvatar = () => {
    router.push('/profilepage');
  };

  const handleLogoClick = () => {
    router.push('/');
  };
  return (
    <>
      <div tw="flex flex-row justify-start items-center font-medium p-16 gap-16">
        <Link href={'/'}>Timeline</Link>
        <Link href={'./detailview'}>Detailview</Link>
        <Link href={'./profilepage'}>Profilepage</Link>
        <Link href={'./textbox'}>Textbox</Link>
      </div>
      <div tw="w-full mb-32">
        <Navigation
          logo={{
            title: 'Mumble Logo',
            href: '#',
            fCallBack: handleLogoClick,
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
