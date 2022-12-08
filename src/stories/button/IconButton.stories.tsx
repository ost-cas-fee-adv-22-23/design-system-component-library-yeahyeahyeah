import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../components/buttons/IconButton';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Icons } from 'src/components/icons/IconMap';
import { ISVGProps } from 'src/interfaces/SVG';
import React from 'react';

export default {
  title: 'Interactions/IconButton',
  component: IconButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: 'Label',
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
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

  return <IconButton {...args}>{childrenWithProps}</IconButton>;
};
/**
 * @button
 * @desc button standard slate
 */
export const ButtonIcon = Template.bind({});

ButtonIcon.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

ButtonIcon.storyName = 'Icon Button';
