import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconLink } from 'src/components/IconLink';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { ISVGProps } from 'src/interfaces/SVG';
import React from 'react';

export default {
  title: 'Interactions',
  component: IconLink,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      name: 'Button Label',
      defaultValue: 'username',
    },
    variant: {
      control: {
        type: 'select',
      },
      defaultValue: 'slate',
    },
    href: {
      defaultValue: '',
    },
    handleClick: {
      action: () => 'handleClick',
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
