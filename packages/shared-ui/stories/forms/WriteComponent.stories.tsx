import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteComponent } from '../../components/forms/WriteComponent';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Write-Component/Typing',
  component: WriteComponent,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    mode: {
      control: false,
      table: {
        disable: true,
      },
    },
    user: {
      control: {
        type: 'object',
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
    upload: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Bild hochladen',
        icon: 'upload',
        size: 'small',
        type: 'button',
        variant: 'slate',
        width: 'full',
        fCallBack: action('upload in write component clicked'),
      },
    },
    send: {
      control: {
        type: 'object',
      },
      defaultValue: {
        label: 'Absenden',
        icon: 'send',
        size: 'small',
        type: 'button',
        variant: 'violet',
        width: 'full',
        fCallBack: action('send in write component clicked'),
      },
    },
  },
} as ComponentMeta<typeof WriteComponent>;

const Template: ComponentStory<typeof WriteComponent> = (args) => {
  const [text, setText] = React.useState<string>('');

  useEffect(() => {
    console.log('text', text);
  }, [text]);

  return <WriteComponent {...args} setText={setText} />;
};

/**
 * @input
 * @desc form input field
 */
export const ComponentWriteStory = Template.bind({});

ComponentWriteStory.argTypes = {
  mode: {
    control: {
      type: 'select',
    },
    defaultValue: 'write',
  },
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
        src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
        alt: 'Family Guy goes Mumble',
      },
    },
  },
};

ComponentWriteStory.storyName = 'Inline';

ComponentWriteStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

export const ComponentInlineStory = Template.bind({});

ComponentInlineStory.argTypes = {
  mode: {
    control: {
      type: 'select',
    },
    defaultValue: 'inline',
  },
  user: {
    control: {
      type: 'object',
    },
    defaultValue: {
      label: 'Display Name',
      avatar: {
        src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
        alt: 'Family Guy goes Mumble',
      },
    },
  },
};

ComponentInlineStory.storyName = 'Write';

ComponentInlineStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};
