import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from './layouts/DefaultLayout';
import { ImageContainer } from '../components/ImageContainer';

export default {
  title: 'Assets/Image',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: ImageContainer,
  argTypes: {
    src: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'https://shorturl.at/nEO01',
        },
      },
    },
    alt: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Profile picture',
        },
      },
    },
    fCallBack: {
      action: () => 'handleClick',
    },
    loading: {
      control: 'boolean',
      description: 'Image loading state',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    type: {
      control: 'select',
      defaultValue: 'container',
      table: {
        defaultValue: {
          summary: 'container',
        },
      },
    },
  },
  args: {
    src: 'https://shorturl.at/nEO01',
    alt: 'This is a profile picture',
    loading: false,
  },
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

export const ImageContainerStory = Template.bind({});

ImageContainerStory.storyName = 'Image';
