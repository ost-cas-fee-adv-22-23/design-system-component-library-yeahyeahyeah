import React from 'react';
import Link from 'next/link';
import {
  Avatar,
  MumbleLogo,
  NaviButton,
  Navigation,
  NavigationColumn,
  NavigationRow,
} from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { useRouter } from 'next/router';

export default function Navi() {
  const router = useRouter();

  const handleLogoClick = () => {
    console.log('logo clicked');
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
      <Navigation>
        <NavigationColumn>
          <Link href="/detailview" title="Startpage" target="_self">
            <MumbleLogo isNavigation={true} color="white" alignment="horizontal" />
          </Link>
          <NavigationRow>
            <NaviButton
              label="Profile"
              variant="profile"
              href="/profilepage"
              legacyBehavior={true}
              passHref={true}
              linkComponent={Link}
            >
              <Avatar alt="Small Avatar" src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" variant="small" />
            </NaviButton>
            <NaviButton
              label="Settings"
              variant="default"
              icon="settings"
              href="/"
              legacyBehavior={true}
              passHref={true}
              linkComponent={Link}
            />
            <NaviButton
              label="Logout"
              variant="default"
              icon="logout"
              href="/detailview"
              legacyBehavior={true}
              passHref={true}
              linkComponent={Link}
            />
          </NavigationRow>
        </NavigationColumn>
      </Navigation>
    </>
  );
}
