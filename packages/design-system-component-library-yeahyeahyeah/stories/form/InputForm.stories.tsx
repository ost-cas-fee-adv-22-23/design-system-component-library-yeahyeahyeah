import React, { useEffect, useMemo, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { IFormInputProps, InputForm } from '../../components/form/InputForm';
import Readme from '../../docs/InputForm.md';
import debounce from 'lodash.debounce';

export default {
  title: 'Form/Input',
  component: InputForm,
  argTypes: {
    labelSize: {
      control: 'select',
    },
  },
  args: {
    labelSize: 'default',
  },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args: IFormInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePressEnter = () => {
    if (inputValue === '') {
      setErrorMessage(args.errorMessage);
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
    <>
      <InputForm
        {...args}
        setInputValue={setInputValue}
        inputValue={inputValue}
        errorMessage={errorMessage}
        onPressEnter={handlePressEnter}
        data-testid="label"
      />
    </>
  );
};

export const FormInputStory = Template.bind({});

FormInputStory.argTypes = {
  name: {
    control: 'text',
  },
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
  setInputValue: {
    control: false,
    table: {
      disable: true,
    },
  },
  inputValue: {
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
  type: {
    control: false,
    table: {
      disable: true,
    },
  },
};

FormInputStory.args = {
  name: 'fieldname',
  editType: 'input',
  label: 'Label',
  required: false,
  placeholder: 'Was gibt es neues?',
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

FormInputStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId('label'), 'Lorem ipsum dolor sit amet');
  expect(await canvas.findByTestId('svg_cancel')).toBeInTheDocument();
  userEvent.click(within(canvasElement).getByTestId('svg_cancel'));
  expect(await canvas.findByTestId('label')).toHaveValue('');
};

FormInputStory.storyName = 'InputForm';

export const TextAreaStory = Template.bind({});

TextAreaStory.argTypes = {
  name: {
    control: 'text',
  },
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
  setInputValue: {
    control: false,
    table: {
      disable: true,
    },
  },
  inputValue: {
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
  type: {
    control: false,
    table: {
      disable: true,
    },
  },
};

TextAreaStory.args = {
  name: 'fieldname',
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

TextAreaStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textArea = 'testTextarea';

  userEvent.type(
    canvas.getByTestId(textArea),
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
  );
  userEvent.clear(within(canvasElement).getByTestId(textArea));
  expect(await canvas.findByTestId(textArea)).toHaveValue('');
};

TextAreaStory.storyName = 'TextArea';
