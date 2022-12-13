import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ImageContainer } from 'src/components/ImageContainer';

export default {
  title: 'Mumble',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: ImageContainer,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      defaultValue: 'xlarge',
    },
    src: {
      control: {
        type: 'text',
      },
      defaultValue: 'https://i.stack.imgur.com/5xd5n.png?s=256&g=1',
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
