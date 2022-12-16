import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Navigation } from 'src/components/Navigation';

export default {
  title: 'Navigation/Navigation',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: Navigation,
  argTypes: {
    title: {
      control: 'text',
      description: 'The name of logo link.',
      defaultValue: 'Startpage',
    },
    href: {
      control: 'text',
      description: 'Link to startpage. Should be /',
      defaultValue: '#',
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
