import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../../components/Icon';

export default {
  title: 'CASFEA22/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const TemplateIcon: ComponentStory<typeof Icon> = (args) => (
  <>
    <p>
      <Icon {...args} />
    </p>
    <p>
      <Icon
        {...args}
        type="calendar"
        color="fill-slate-500"
        fCallBack={() => console.log('calendar clicked')}
      />
    </p>
    <p>
      <Icon {...args} type="cancel" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="checkmark" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="chevron-up" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="chevron-down" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="chevron-left" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="chevron-right" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="edit" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="eye" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="fullscreen" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="heart-filled" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="heart-outlined" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="location" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="logout" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="mumble" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="profile" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="reply-filled" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="reply-outlined" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="repost" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="send" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="settings" color="fill-pink-500" />
    </p>
    <p>
      <Icon {...args} type="share" color="fill-slate-500" />
    </p>
    <p>
      <Icon {...args} type="time" color="fill-violet-500" />
    </p>
    <p>
      <Icon {...args} type="upload" color="fill-pink-500" />
    </p>
  </>
);

export const IconCancel = TemplateIcon.bind({});
IconCancel.args = {
  type: 'upload',
  color: 'fill-slate-300',
  fCallBack: (e) => console.log(`${e.target} clicked`),
};
