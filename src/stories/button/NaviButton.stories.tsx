import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NaviButton } from 'src/components/buttons/NaviButton';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Button',
  component: NaviButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    handleClick: {
      action: () => 'handleClick',
    },
    width: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconColor: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconWidth: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconHeight: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => (
  <NaviButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const NaviButtonStory = Template.bind({});

NaviButtonStory.args = {
  label: 'Label',
  variant: 'label',
  iconColor: 'fill-slate-white',
  iconName: 'settings',
};

NaviButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

NaviButtonStory.storyName = 'Navi-Button';
