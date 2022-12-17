import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../components/buttons/IconButton';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Icons } from 'src/components/icons/IconMap';

export default {
  title: 'Interactions/IconButton',
  component: IconButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Label',
    },
    fCallBack: {
      action: () => {},
    },
    icon: {
      control: 'select',
      options: Object.keys(Icons),
      name: 'Icon',
      defaultValue: 'settings',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};
/**
 * @button
 * @desc button standard slate
 */
export const ButtonIcon = Template.bind({});

ButtonIcon.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonIcon.storyName = 'Icon Button';
