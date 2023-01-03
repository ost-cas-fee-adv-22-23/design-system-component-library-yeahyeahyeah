import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WriteComponent } from '../../components/forms/WriteComponent';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Write-Component',
  component: WriteComponent,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    variant: {
      control: 'select',
      table: {
        summary: 'write',
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
    setText: {
      control: false,
      table: {
        disable: true,
      },
    },
    spacing: {
      control: false,
      table: {
        disable: true,
      },
    },
    startHeading: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Hey, was läuft',
        },
      },
    },
    startParagraph: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Schreib deinen ersten Mumble, oder folge einem User.',
        },
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

// WRITE STORY
export const ComponentWriteStory = Template.bind({});

ComponentWriteStory.argTypes = {
  user: {
    control: {
      type: 'object',
    },
    defaultValue: {
      label: 'Hey, was läuft?',
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

ComponentWriteStory.args = {
  variant: 'start',
  startHeading: 'Hey, was läuft?',
  startParagraph: 'Schreib deinen ersten Mumble, oder folge einem User.',
};

ComponentWriteStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ComponentWriteStory.storyName = 'Write-Component';
