import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { NaviButton } from 'src/components/buttons/NaviButton';
import { Icons } from 'src/components/icons/IconMap';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ISVGProps } from 'src/interfaces/SVG';

export default {
  title: 'Interactions',
  component: NaviButton,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    variant: {
      control: {
        type: 'select',
      },
    },
    handleClick: {
      action: () => 'handleClick',
    },
    width: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
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
} as ComponentMeta<typeof NaviButton>;

const Template: ComponentStory<typeof NaviButton> = (args) => {
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

  return <NaviButton {...args}>{childrenWithProps}</NaviButton>;
};
/**
 * @button
 * @desc button standard slate
 */
export const NaviButtonStory = Template.bind({});

NaviButtonStory.args = {
  label: 'Label',
  variant: 'label',
};

NaviButtonStory.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

NaviButtonStory.storyName = 'Navi Button';
