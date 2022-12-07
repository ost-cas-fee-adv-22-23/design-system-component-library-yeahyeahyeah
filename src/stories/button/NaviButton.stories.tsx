import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NaviButton } from 'src/components/buttons/NaviButton';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
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
    children: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
      defaultValue: Icons.Settings,
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
};

NaviButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

NaviButtonStory.storyName = 'Navi Button';
