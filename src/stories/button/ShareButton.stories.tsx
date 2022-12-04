import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShareButton } from 'src/components/buttons/ShareButtons';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Interactions',
  component: ShareButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    iconName: {
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
    handleClick: {
      action: () => 'handleClick',
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
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = (args) => (
  <ShareButton {...args} />
);
/**
 * @button
 * @desc button standard slate
 */
export const ShareButtonStory = Template.bind({});

ShareButtonStory.args = {
  label: 'Copy Link',
};

ShareButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ShareButtonStory.storyName = 'Share Button';
