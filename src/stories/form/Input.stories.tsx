import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { InputForm } from 'src/components/forms/Input';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ISVGProps } from 'src/interfaces/SVG';

export default {
  title: 'Form',
  component: InputForm,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Label',
    },
  },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => {
  const props: ISVGProps = {
    className: `${args.className}`,
    width: '16px',
    height: '16px',
  };
  const childrenWithProps = React.Children.map(args.children, (child) => {
    if (React.isValidElement<ISVGProps>(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <InputForm {...args} />;
};

/**
 * @button
 * @desc button standard slate
 */
export const FormInput = Template.bind({});

FormInput.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

FormInput.storyName = 'Input';
