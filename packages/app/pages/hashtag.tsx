import React from 'react';
import { Hashtag } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useRouter } from 'next/router';

export default function HashtagComponent() {
  const router = useRouter();

  const navigateToRoot = () => {
    router.push('/');
  };

  return (
    <>
      <Hashtag link={{ href: 'profilepage' }} label="Textbox" size="small" />
      <br />
      <Hashtag fCallBack={navigateToRoot} label="Mumle is cool" size="medium" />
    </>
  );
}
