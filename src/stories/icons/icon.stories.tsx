import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, IIcon } from '../../components/Icon';

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

export default {
  title: 'Icons/Collection',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
    },
    type: {
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
        let icon = <Icon {...args} type={iconType as IIcon['type']} />;
        tailWindColors.push(tailWindColorsElement);
        return <div key={index}>{icon}</div>;
      })}
    </div>
  </>
);

const TemplateIconSingle: ComponentStory<typeof Icon | any> = (args) => (
  <Icon {...args} />
);

export const All = TemplateIcon.bind({});
All.args = {
  type: 'time',
  color: 'fill-slate-50',
  width: '100px',
  height: '100px',
  fCallBack: () => console.log('icon clicked'),
};

export const Single = TemplateIconSingle.bind({});
Single.args = {
  type: 'heart-filled',
  color: 'fill-slate-50',
  width: '16px',
  height: '16px',
  fCallBack: () => console.log('icon clicked'),
};
