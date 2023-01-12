import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextBox } from '../../components/forms/TextBox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form',
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => {
  const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('Bitte füllen Sie das Feld aus.');

  const handleSend = () => {
    if (ref?.current) ref.current.value = '';
    setErrorMessage('Bitte füllen Sie das Feld aus.');
  };

  useEffect(() => {
    console.log('text', text);
    if (text === '') {
      setErrorMessage('Bitte füllen Sie das Feld aus.');
    } else {
      setErrorMessage('');
    }
  }, [text]);

  return (
    <TextBox
      {...args}
      form={{
        errorMessage: errorMessage,
        placeholder: 'Hast du uns etwas mitzuteilen ?',
        setRef: setRef,
        setText: setText,
      }}
      sendCallback={handleSend}
    />
  );
};

// WRITE STORY
export const TextBoxStory = Template.bind({});

TextBoxStory.argTypes = {
  variant: {
    control: 'select',
    table: {
      summary: 'write',
    },
  },
  mbSpacing: {
    control: false,
    table: {
      disable: true,
    },
  },
  user: {
    control: {
      type: 'object',
    },
    defaultValue: {
      label: 'Hey, was läuft?',
      variant: 'write',
      username: {
        type: 'joined',
        label: 'Username',
        href: '#',
      },
      avatar: {
        src: 'https://media.giphy.com/media/ZYzt9dXQUjmBa/giphy.gif',
        alt: 'Family Guy goes Mumble',
      },
    },
    table: {
      disable: true,
    },
  },
  form: {
    table: {
      disable: true,
    },
  },
  uploadCallback: {
    table: {
      disable: true,
    },
  },
  sendCallback: {
    table: {
      disable: true,
    },
  },
};

TextBoxStory.args = {
  variant: 'start',
  startHeading: 'Hey, was läuft?',
  startParagraph: 'Schreib deinen ersten Mumble, oder folge einem User.',
  uploadCallback: action('uploadCallback'),
};

TextBoxStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

TextBoxStory.storyName = 'TextBox';
