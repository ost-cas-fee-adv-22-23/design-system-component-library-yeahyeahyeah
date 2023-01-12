import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from '../../components/forms/InputForm';
import { Button } from '../../index';

export default {
  title: 'Form/Input',
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => {
  const [ref, setRef] = useState<React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null> | null>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('Bitte füllen Sie das Feld aus.');

  const handleClick = () => {
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
  errorMessage: {
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
};

FormInputStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
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
  errorMessage: {
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
};

TextAreaStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

TextAreaStory.storyName = 'TextArea';
