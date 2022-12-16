import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Navigation } from 'src/components/Navigation';

export default {
  title: 'Navigation/Navigation',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: Navigation,
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
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const NavigationStory = Template.bind({});

NavigationStory.storyName = 'Navigation';
