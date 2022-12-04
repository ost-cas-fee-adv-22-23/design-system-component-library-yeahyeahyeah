import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../components/buttons/IconButton';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions/Button/Icon Button',
  component: IconButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    handleClick: {
      action: () => 'handleClick',
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const ButtonIcon = Template.bind({});

ButtonIcon.args = {
  iconColor: 'fill-slate-white',
};

ButtonIcon.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonIcon.storyName = 'Icon Button';
