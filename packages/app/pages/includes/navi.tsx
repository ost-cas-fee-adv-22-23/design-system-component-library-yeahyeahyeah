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
        <Link href="/">Timeline</Link>
        <Link href="./detailview">Detailview</Link>
        <Link href="./profilepage">Profilepage</Link>
        <Link href="./textbox">Textbox</Link>
        <Link href="./hashtag">Hashtag</Link>
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

            avatar: {
              src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
              alt: 'Alter Tag',
              href: '/',
              legacyBehavior: true,
              passHref: true,
              linkComponent: Link,
            },
          }}
          settings={{
            label: 'Settings',
            variant: 'default',
            icon: 'settings',
            href: '/',
            legacyBehavior: true,
            passHref: true,
            linkComponent: Link,
          }}
          logout={{
            label: 'Logout',
            variant: 'default',
            icon: 'logout',
            href: '/profilepage',
            legacyBehavior: true,
            passHref: true,
            linkComponent: Link,
          }}
        />
      </div>
    </>
  );
}
