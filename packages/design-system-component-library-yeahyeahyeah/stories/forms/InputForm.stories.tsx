import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from '../../components/forms/InputForm';
import { Button } from '../../components/buttons/Button';
import Readme from '../../docs/InputForm.md';

export default {
  title: 'Form/Input',
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => {
  const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleClick = () => {
    if (text === '') {
      setErrorMessage(args.errorMessage);
      return;
    }
    if (ref?.current) ref.current.value = '';
    setText('');
  };

  useEffect(() => {
    if (text !== '') {
      setErrorMessage('');
    }
  }, [text]);

  return (
    <>
      <Button label={'clear'} color={'slate'} fCallBack={handleClick} />
      <InputForm {...args} setRef={setRef} setText={setText} errorMessage={errorMessage} onPressEnter={handleClick} />
    </>
  );
};

/**
 * @input
 * @desc form input field
 */
export const FormInputStory = Template.bind({});

FormInputStory.argTypes = {
  editType: {
    control: false,
    table: {
      disable: true,
    },
  },
  required: {
    control: false,
    table: {
      disable: true,
    },
  },
  autoComplete: {
    control: false,
    table: {
      disable: true,
    },
  },
  setText: {
    control: false,
    table: {
      disable: true,
    },
  },
  setRef: {
    control: false,
    table: {
      disable: true,
    },
  },
  onPressEnter: {
    control: false,
    table: {
      disable: true,
    },
  },
};

FormInputStory.args = {
  editType: 'input',
  label: 'Label',
  required: false,
  placeholder: 'Was gibt es neues ?',
  errorMessage: 'Bitte füllen Sie das Feld aus.',
};

FormInputStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: Readme,
      language: 'javascript',
    },
  },
};

FormInputStory.storyName = 'InputForm';

/**
 * @textarea
 * @desc form textarea
 */
export const TextAreaStory = Template.bind({});

TextAreaStory.argTypes = {
  editType: {
    control: false,
    table: {
      disable: true,
    },
  },
  required: {
    control: false,
    table: {
      disable: true,
    },
  },
  autoComplete: {
    control: false,
    table: {
      disable: true,
    },
  },
  setText: {
    control: false,
    table: {
      disable: true,
    },
  },
  setRef: {
    control: false,
    table: {
      disable: true,
    },
  },
  onPressEnter: {
    control: false,
    table: {
      disable: true,
    },
  },
};

TextAreaStory.args = {
  editType: 'textarea',
  label: 'Label',
  required: false,
  placeholder: 'Was gibt es neues ?',
  errorMessage: 'Bitte füllen Sie das Feld aus.',
};

TextAreaStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
    description: {
      component: Readme,
      language: 'javascript',
    },
  },
};

TextAreaStory.storyName = 'TextArea';
