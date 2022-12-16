import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ImageContainer } from 'src/components/ImageContainer';

const dummyImage = './assets/image-dummy.png';

export default {
  title: 'Image/ImageContainer',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: ImageContainer,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://shorturl.at/lzTV6',
    },
    alt: {
      control: {
        type: 'text',
      },
      defaultValue: 'This is a profile picture!',
    },
    fCallBack: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof ImageContainer>;

const Template: ComponentStory<typeof ImageContainer> = (args) => (
  <ImageContainer {...args} />
);

export const ImageContainerStory = Template.bind({});

ImageContainerStory.storyName = 'Image';
