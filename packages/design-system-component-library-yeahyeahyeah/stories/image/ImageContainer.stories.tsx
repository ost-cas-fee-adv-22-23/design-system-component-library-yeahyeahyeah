import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageContainer } from '../../components/image/ImageContainer';
import ImageContainerReadme from '../../docs/ImageContainer.md';

export default {
  title: 'Medias/Image',
  component: ImageContainer,
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    onImageIconClick: {
      action: () => 'handleClick',
    },
    isLoading: {
      control: 'boolean',
    },
    loading: {
      control: 'select',
    },
    type: {
      control: 'select',
    },
    imageComponent: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    src: 'https://picsum.photos/640/360',
    alt: 'This is a profile picture',
    type: 'container',
    isLoading: false,
    loading: 'lazy',
  },
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

export const ImageContainerStory = Template;

ImageContainerStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: ImageContainerReadme,
    },
  },
};

ImageContainerStory.storyName = 'Image';
