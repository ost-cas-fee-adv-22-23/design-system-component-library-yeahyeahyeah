import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from 'src/components/layouts/DefaultLayout';
import { Icon } from '../../components/icons/Icon';

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
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  component: Icon,
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
} as ComponentMeta<typeof Icon>;

const TemplateIcon: ComponentStory<typeof Icon> = (args) => (
  <>
    <div>
      <Icon {...args} />
    </div>
    {iconTypes.map((iconType, index) => {
      tailWindColorsElement = tailWindColors.shift() || '';
      let icon = <Icon {...args} iconName={iconType as any} />;
      tailWindColors.push(tailWindColorsElement);
      return <div key={index}>{icon}</div>;
    })}
  </>
);

const TemplateIconSingle: ComponentStory<typeof Icon | any> = (args) => (
  <Icon {...args} />
);

export const All = TemplateIcon.bind({});
All.args = {
  iconName: 'time',
  iconColor: 'fill-pink-500',
  iconWidth: '100px',
  iconHeight: '100px',
};

export const Single = TemplateIconSingle.bind({});
Single.args = {
  iconName: 'heart-outlined',
  iconColor: 'fill-pink-500',
  iconWidth: '16px',
  iconHeight: '16px',
};
