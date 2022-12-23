import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteComponent } from '../../components/forms/WriteComponent';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default {
  title: 'Write-Component/Inline',
  component: WriteComponent,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    user: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Display Name',
        username: {
          label: 'Username',
          href: '#',
        },
        avatar: {
          src: 'https://www.liveabout.com/thmb/H9V_z_oYhbKldDJJUL53tVN36cQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg',
          alt: 'Family Guy goes Mumble',
        },
      },
    },
    form: {
      control: {
        type: 'object',
      },
      defaultValue: {
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

ComponentWrite.storyName = 'Inline';

ComponentWrite.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};
