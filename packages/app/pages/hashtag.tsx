import React from 'react';
import { Avatar, Hashtag, NaviButton } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function HashtagComponent() {
  const router = useRouter();

  const navigateToRoot = () => {
    router.push('/');
  };

  return (
    <div tw="flex flex-col justify-center items-center   pb-64">
      <Hashtag label="Textbox" size="small" href="/detailview" legacyBehavior={true} passHref={true} linkComponent={Link} />
      <Hashtag fCallBack={navigateToRoot} label="Mumble is cool. Isn't it?" size="medium" />
      <NaviButton
        label="Settings"
        variant="profile"
        href="/detailview"
        legacyBehavior={true}
        passHref={true}
        linkComponent={Link}
      >
        <Avatar alt="Small Avatar" src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" variant="small" />
      </NaviButton>
    </div>
  );
}
