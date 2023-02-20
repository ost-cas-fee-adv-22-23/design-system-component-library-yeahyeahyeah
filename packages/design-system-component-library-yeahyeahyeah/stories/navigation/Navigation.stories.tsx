import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from '../../components/navigation/Navigation';
import { Modal } from '../../components/modal/Modal';
import NavigationReadme from '../../docs/Navigation.md';
import { action } from '@storybook/addon-actions';
import { Avatar, NaviButton } from '../../index';
import Link from 'next/link';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    logo: {
      control: 'object',
      description: 'Description of mumbleLogo',
      defaultValue: {
        title: 'Mumble Logo',
        href: '#',
        fCallBack: action('logo'),
      },
    },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  const handleClose = () => {
    setOpen((open) => !open);
  };

  return !open ? (
    <Navigation {...args}>
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
    </Navigation>
  ) : (
    <Modal label="Settings" isOpen={open} onClose={handleClose}>
      Settings
    </Modal>
  );
};

export const NavigationStory = Template.bind({});

NavigationStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: NavigationReadme,
    },
  },
};

NavigationStory.storyName = 'Navigation';
