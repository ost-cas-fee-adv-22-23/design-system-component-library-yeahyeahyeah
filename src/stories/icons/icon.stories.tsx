import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../../components/Icon';

export default {
  title: 'CASFEA22/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

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

let tailWindColors = ['fill-slate-500', 'fill-violet-500', 'fill-pink-500'];
let tailWindColorsElement: string = '';

const TemplateIcon: ComponentStory<typeof Icon> = (args) => (
  <>
    {iconTypes.map((iconType, index) => {
      tailWindColorsElement = tailWindColors.shift() || '';
      let icon = (
        <Icon {...args} type={iconType} color={tailWindColorsElement} />
      );
      tailWindColors.push(tailWindColorsElement);
      return <p key={index}>{icon}</p>;
    })}

    <p>
      <Icon {...args} />
    </p>
  </>
);

export const IconCancel = TemplateIcon.bind({});
IconCancel.args = {
  type: 'upload',
  color: 'fill-slate-300',
  fCallBack: () => console.log('icon clicked'),
};
