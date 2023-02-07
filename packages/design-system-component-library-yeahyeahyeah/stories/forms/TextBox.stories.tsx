import React, { useEffect, useMemo, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextBox } from '../../components/forms/TextBox';
import { action } from '@storybook/addon-actions';
import TextBoxReadme from '../../docs/TextBox.md';
import debounce from 'lodash.debounce';

export default {
  title: 'Form',
  component: TextBox,
  argTypes: {
    inputValue: {
      control: false,
      table: {
        disable: true,
      },
    },
    setInputValue: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSend = () => {
    if (inputValue === '') {
      setErrorMessage(args.form.errorMessage);
      return;
    }
    setInputValue('');
  };

  const setErrorDebounced = useMemo(
    () =>
      debounce(() => {
        setErrorMessage('');
      }, 100),
    [debounce]
  );

  useEffect(() => {
    if (inputValue !== '') {
      setErrorDebounced();
    }
  }, [inputValue, setErrorDebounced]);

  return (
    <TextBox
      {...args}
      form={{
        errorMessage: errorMessage,
        placeholder: 'Hast du uns etwas mitzuteilen?',
      }}
      setInputValue={setInputValue}
      inputValue={inputValue}
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
  form: { errorMessage: 'Bitte füllen sie das Formular aus.' },
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
