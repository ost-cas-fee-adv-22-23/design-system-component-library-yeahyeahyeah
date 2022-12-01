import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../../components/Icon';

let tailWindColors: string[] = [
  'fill-slate-500',
  'fill-violet-500',
  'fill-pink-500',
];

let tailWindColorsElement: string = '';

const iconTypes = [
  'calendar',
  'cancel',
  'checkmark',
  'chevron-up',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'edit',
  'eye',
  'fullscreen',
  'heart-filled',
  'heart-outlined',
  'location',
  'logout',
  'mumble',
  'profile',
  'reply-filled',
  'reply-outlined',
  'repost',
  'send',
  'settings',
  'share',
  'time',
  'upload',
];

const buttonProps = {
  color: {
    slate: 'fill-slate-500',
    violet: 'fill-violet-500',
    pink: 'fill-pink-500',
  },
  type: iconTypes,
};

export default {
  title: 'CASFEA22/Icons',
  component: Icon,
  argTypes: {
    color: {
      options: Object.keys(buttonProps.color),
      mapping: buttonProps.color,
      control: {
        type: 'select',
      },
    },
    type: {
      options: buttonProps.type,
      mapping: buttonProps.type,
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const TemplateIcon: ComponentStory<typeof Icon> = (args) => (
  <>
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      <div>
        <Icon {...args} />
      </div>
      {iconTypes.map((iconType, index) => {
        tailWindColorsElement = tailWindColors.shift() || '';
        let icon = (
          <Icon {...args} type={iconType} color={tailWindColorsElement} />
        );
        tailWindColors.push(tailWindColorsElement);
        return <div key={index}>{icon}</div>;
      })}
    </div>
  </>
);

const TemplateIconSingle: ComponentStory<typeof Icon | any> = (args) => (
  <>
    <p>
      <Icon {...args} />
    </p>
  </>
);

export const All = TemplateIcon.bind({});
All.args = {
  type: 'time',
  color: buttonProps.color.violet,
  width: '100px',
  height: '100px',
  fCallBack: () => console.log('icon clicked'),
};

export const Single = TemplateIconSingle.bind({});
Single.args = {
  type: 'upload',
  color: buttonProps.color.pink,
  width: '100px',
  height: '100px',
  fCallBack: () => console.log('icon clicked'),
};
