import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from '../components/IconLink';
import { action } from '@storybook/addon-actions';
import IconLinkReadme from '../docs/IconLink.md';

export default {
  title: 'Interactions',
  component: IconLink,
  argTypes: {
    label: {
      control: 'text',
      table: {
        summary: 'Label',
      },
    },
    variant: {
      control: 'select',
      table: {
        summary: 'slate',
      },
    },
    href: {
      control: 'text',
      table: {
        summary: '#',
      },
    },
    type: {
      control: 'select',
      table: {
        summary: 'username',
      },
    },
    fCallBack: {
      defaultValue: action('IconLink clicked'),
    },
  },
  args: {
    label: 'string',
    variant: 'slate',
    href: '#',
    type: 'username',
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => {
  return <IconLink {...args} />;
};

export const IconLinkVariants = Template.bind({});

IconLinkVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: IconLinkReadme,
    },
  },
};

IconLinkVariants.storyName = 'Icon Link';
