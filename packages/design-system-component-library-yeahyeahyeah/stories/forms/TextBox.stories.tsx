import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextBox } from '../../components/forms/TextBox';
import { action } from '@storybook/addon-actions';
import TextBoxReadme from '../../docs/TextBox.md';

export default {
  title: 'Form',
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => {
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSend = () => {
    if (text === '') {
      setErrorMessage('Bitte füllen sie das Formular aus.');
      return;
    }
    setText('');
  };

  useEffect(() => {
    if (text !== '') {
      setErrorMessage('');
    }
  }, [text]);

  return (
    <TextBox
      {...args}
      form={{
        errorMessage: errorMessage,
        placeholder: 'Hast du uns etwas mitzuteilen?',
      }}
      inputValue={text}
      setInputValue={setText}
      sendCallback={handleSend}
      uploadCallback={action('uploadCallback')}
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
      username: {
        type: 'joined',
        label: 'Username',
        href: '#',
        fCallBack: action('user clicked'),
      },
      avatar: {
        src: 'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif',
        alt: 'Family Guy goes Mumble',
        imageCallBack: action('avatar clicked'),
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
    description: {
      component: TextBoxReadme,
      language: 'javascript',
    },
  },
};

TextBoxStory.storyName = 'TextBox';
