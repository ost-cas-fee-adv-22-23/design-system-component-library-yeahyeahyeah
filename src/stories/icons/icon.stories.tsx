import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Settings } from '../../components/icons/icons';
import { Icons } from '../../components/icons/IconMap';
import React from 'react';

let tailWindColors: string[] = [
  'fill-slate-500',
  'fill-violet-500',
  'fill-pink-500',
];

let tailWindColorsElement: string = '';

export default {
  title: 'Icons/Collection',
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: Settings,
  argTypes: {
    iconColor: {
      control: {
        type: 'select',
      },
    },
    iconName: {
      control: {
        type: 'select',
      },
    },
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Settings>;

type Keys = keyof typeof Icons;

const TemplateIcon: ComponentStory<typeof Settings | any> = () => (
  <>
    <div>
      <Settings className="fill-pink-500" width="50px" height="50px" />
    </div>

    {Object.keys(Icons).map((iconType, index) => {
      tailWindColorsElement = tailWindColors.shift() || '';

      const Icon = React.cloneElement(
        Icons[iconType as Keys] || Icons['settings'],
        {
          className: tailWindColorsElement,
          width: '50px',
          height: '50px',
        },
      );

      tailWindColors.push(tailWindColorsElement);
      return <div key={index}>{Icon}</div>;
    })}
  </>
);

const TemplateIconSingle: ComponentStory<any> = (args) => {
  const Icon = React.cloneElement(Icons[args.iconName as Keys], {
    className: args.iconColor,
    width: args.iconWidth,
    height: args.iconHeight,
  });
  return <div>{Icon}</div>;
};

export const All = TemplateIcon.bind({});

export const Single = TemplateIconSingle.bind({});
Single.args = {
  iconName: 'heart-outlined',
  iconColor: 'fill-pink-500',
  iconWidth: '300px',
  iconHeight: '300px',
};
