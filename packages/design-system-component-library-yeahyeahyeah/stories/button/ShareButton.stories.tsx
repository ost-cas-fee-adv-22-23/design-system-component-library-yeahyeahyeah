import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShareButton } from '../../components/button/ShareButton';
import ShareButtonReadme from '../../docs/ShareLink.md';

export default {
  title: 'Interactions',
  component: ShareButton,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Share',
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = (args) => <ShareButton {...args} />;

export const ShareButtonStory = Template.bind({});

ShareButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: ShareButtonReadme,
    },
  },
};

ShareButtonStory.storyName = 'Share Button';
