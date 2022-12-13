import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteComponent } from 'src/components/forms/WriteComponent';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';

export default {
  title: 'Form',
  component: WriteComponent,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    name: {
      name: 'name',
      control: {
        type: 'text',
      },
      defaultValue: 'Display Name',
    },
    username: {
      name: 'username',
      control: {
        type: 'text',
      },
      defaultValue: 'username',
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
