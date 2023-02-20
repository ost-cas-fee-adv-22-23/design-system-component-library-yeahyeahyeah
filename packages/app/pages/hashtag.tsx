import React from 'react';
import {
  Avatar,
  Hashtag,
  IconLink,
  UserProps,
  NaviButton,
  User,
  UserRecommended,
  UserRecommendedProps,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function HashtagComponent() {
  const router = useRouter();

  const navigateToRoot = () => {
    router.push('/');
  };

  const props: UserProps = {
    label: 'Display Name',
    variant: 'medium',
    avatar: {
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      alt: 'Alter Tag',
      href: '/detailview',
      legacyBehavior: true,
      passHref: true,
      linkComponent: Link,
    },
  };

  const recommendedProps: UserRecommendedProps = {
    label: 'Display Name',
    variant: 'small',
    btn: {
      label: 'Follow',
      onClick: () => console.log('clicked'),
    },
    avatar: {
      src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
      alt: 'Alter Tag',
      href: '/detailview',
      legacyBehavior: true,
      passHref: true,
      linkComponent: Link,
    },
  };

  return (
    <div tw="flex flex-col justify-center items-center pb-64 bg-slate-100">
      <div tw="mb-32">
        <Hashtag
          label="Textbox"
          size="small"
          href="/detailview"
          legacyBehavior={true}
          passHref={true}
          linkComponent={Link}
        />
      </div>
      <div tw="mb-32">
        <Hashtag fCallBack={navigateToRoot} label="Mumble is cool. Isn't it?" size="medium" />
      </div>
      <div tw="mb-32">
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
      <div tw="mb-32">
        <User {...props}>
          <IconLink
            label="User"
            type="username"
            color="violet"
            href="/profilepage"
            legacyBehavior
            passHref
            linkComponent={Link}
          />
          <IconLink label="Joined" type="timestamp" color="slate" href="/" legacyBehavior passHref linkComponent={Link} />
        </User>
      </div>
      <div tw="mb-32">
        <IconLink
          label="User"
          type="username"
          color="violet"
          href="/profilepage"
          legacyBehavior
          passHref
          linkComponent={Link}
        />
      </div>
      <div tw="mb-32">
        <UserRecommended {...recommendedProps}>
          <IconLink
            label="User"
            type="username"
            color="violet"
            href="/profilepage"
            legacyBehavior
            passHref
            linkComponent={Link}
          />
        </UserRecommended>
      </div>
    </div>
  );
}
