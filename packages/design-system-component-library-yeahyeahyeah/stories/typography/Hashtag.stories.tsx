import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hashtag } from '../../components/typography/Hashtag';
import HashtagReadme from '../../docs/Hashtag.md';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Typography/Hashtag',
  component: Hashtag,
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
    },
    fCallBack: {
      control: false,
      table: {
        disable: true,
      },
      action: action('Hashtag clicked'),
    },
  },
  args: {
    label: 'Mumble',
    size: 'small',
  },
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = (args) => <Hashtag {...args} />;

export const HashtagStory = Template.bind({});

HashtagStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: HashtagReadme,
    },
  },
};

HashtagStory.storyName = 'Hashtag';
