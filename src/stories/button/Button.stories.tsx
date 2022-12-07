import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from 'src/components/buttons/Button';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ISVGProps } from 'src/interfaces/SVG';

export default {
  title: 'Interactions',
  component: Button,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    size: {
      description: 'A sized version of the button',
      control: { type: 'radio' },
      defaultValue: 'small',
    },
    width: {
      description: 'A full width version of the button',
      control: {
        type: 'radio',
      },
      defaultValue: 'default',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'pink',
    },
    handleClick: {
      action: () => 'handleClick',
    },
    children: {
      control: 'select',
      options: Object.keys(Icons),
      mapping: Icons,
      name: 'Icon',
      defaultValue: Icons.Settings,
    },
    className: {
      control: 'select',
      options: ['fill-slate-white'],
      defaultValue: 'fill-slate-white',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const props: ISVGProps = {
    className: `${args.className} ml-8`,
    width: '16px',
    height: '16px',
  };
  const childrenWithProps = React.Children.map(args.children, (child) => {
    if (React.isValidElement<ISVGProps>(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <Button {...args}>{childrenWithProps}</Button>;
};

/**
 * @button
 * @desc button standard slate
 */
export const ButtonVariants = Template.bind({});

ButtonVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonVariants.storyName = 'Button';
