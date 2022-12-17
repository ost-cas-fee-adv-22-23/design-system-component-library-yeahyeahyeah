import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteComponent } from 'src/components/forms/WriteComponent';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Form',
  component: WriteComponent,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      defaultValue: 'Display Name',
    },
    avatar: {
      control: {
        type: 'object',
      },
      defaultValue: {
        src: 'https://i.stack.imgur.com/5xd5n.png',
        alt: 'Image Alt-Tag',
      },
    },
    username: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Username',
        href: '#',
      },
    },
    variant: {
      control: false,
      table: {
        disable: true,
      },
      defaultValue: 'write',
    },
    user: {
      table: {
        disable: true,
      },
      defaultValue: 'textarea',
    },
    form: {
      control: {
        type: 'object',
      },
      defaultValue: {
        editType: 'textarea',
        placeholder: 'Na, was meinste dazu ...?',
        errorMessage: 'Da ist etwas schief gelaufen',
      },
    },
  },
} as ComponentMeta<typeof WriteComponent>;

const Template: ComponentStory<typeof WriteComponent> = (args) => (
  <WriteComponent {...args} />
);

/**
 * @input
 * @desc form input field
 */
export const ComponentWrite = Template.bind({});

ComponentWrite.storyName = 'Write-Component';

ComponentWrite.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};
