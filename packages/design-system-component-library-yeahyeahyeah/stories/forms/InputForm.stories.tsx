import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from '../../components/forms/InputForm';

export default {
  title: 'Form/Input',
  component: InputForm,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      name: 'type',
      defaultValue: 'text',
    },
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Placeholder',
    },
    width: {
      control: false,
      table: {
        disable: true,
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    errorMessage: {
      name: 'errorMessage',
      defaultValue: 'Error Message',
    },
    editType: {
      control: false,
      table: {
        disable: true,
      },
    },
    autoComplete: {
      control: {
        type: 'select',
      },
      defaultValue: 'off',
    },
  },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => {
  const [ref, setRef] = useState<any>(null);
  const [text, setText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('Bitte füllen Sie das Feld aus.');

  const handleClick = () => {
    console.log('ref', ref);
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
      <button onClick={handleClick}>Clear</button>
      <InputForm {...args} setRef={setRef} setText={setText} errorMessage={errorMessage} />
    </>
  );
};

/**
 * @input
 * @desc form input field
 */
export const FormInputStory = Template.bind({});

FormInputStory.args = {
  editType: 'input',
  label: 'Label',
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
  type: {
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
};

TextAreaStory.args = {
  editType: 'textarea',
  type: undefined,
  label: 'Label',
  required: false,
  placeholder: 'Was gibt es neues',
};

TextAreaStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

TextAreaStory.storyName = 'TextArea';
