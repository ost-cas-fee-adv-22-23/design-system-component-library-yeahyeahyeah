import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from 'src/components/IconLink';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Icons } from 'src/components/icons/IconMap';
import { ISVGProps } from 'src/interfaces/SVG';
import React from 'react';

export default {
  title: 'Interactions',
  component: IconLink,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'slate',
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
      options: ['fill-slate-400'],
      defaultValue: 'fill-slate-400',
    },
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => {
  const props: ISVGProps = {
    className: `${args.className} mr-4`,
    width: '16px',
    height: '16px',
  };
  const childrenWithProps = React.Children.map(args.children, (child) => {
    if (React.isValidElement<ISVGProps>(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <IconLink {...args}>{childrenWithProps}</IconLink>;
};
/**
 * @button
 * @desc button standard slate
 */
export const IconLinkVariants = Template.bind({});

IconLinkVariants.parameters = {
  docs: {
    source: { type: 'dynamic' },
  },
};

IconLinkVariants.storyName = 'Icon Link';
