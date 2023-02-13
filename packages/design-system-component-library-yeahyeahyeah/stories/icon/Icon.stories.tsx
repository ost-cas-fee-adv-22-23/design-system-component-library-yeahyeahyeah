import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Settings } from '../../components/icon/index';
import { IconsMapped, IconTypes } from '../../components/icon/IconMap';
import { Heading } from '../../components/typography/Heading';
import tw, { TwStyle } from 'twin.macro';
import React from 'react';
import styled from 'styled-components';

const tailWindColors: TwStyle[] = [tw`fill-slate-500`, tw`fill-violet-500`, tw`fill-pink-500`];

let tailWindColorsElement: TwStyle = tw`fill-slate-500`;

export default {
  title: 'Medias',
  argTypes: {
    handleClick: {
      action: () => 'handleClick',
    },
  },
} as ComponentMeta<typeof Settings>;

const createIcon = (icon: IconTypes) => {
  return styled(IconsMapped[icon as IconTypes])(() => [tw`w-full h-full`]);
};

const TemplateIcon: ComponentStory<(IconsMapped: React.SVGProps<SVGSVGElement>) => JSX.Element> = () => (
  <>
    {Object.keys(IconsMapped).map((iconType, index) => {
      tailWindColorsElement = (tailWindColors.shift() as TwStyle) || '';

      const Icon = createIcon(iconType as IconTypes);

      tailWindColors.push(tailWindColorsElement);

      const IconCol = tw.div`m-16 cursor-pointer flex flex-col justify-center items-center w-auto border-1 border-slate-300 p-16 hover:(scale-105 rotate-3 bg-slate-white border-slate-300) rounded-16`;
      const IconFlex = tw.div`flex justify-center items-center h-70 p-16 w-full mb-8 hover:scale-150 hover:-rotate-12 hover:animate-pulse transform-gpu translate-y-4 transition duration-300 ease-in-out`;

      return (
        <IconCol key={index}>
          <IconFlex>
            <Icon fill={tailWindColorsElement.fill as string} />
          </IconFlex>
          <Heading
            tag="h3"
            label={iconType}
            color="light"
            size="small"
            alignment="center"
            tw="text-justify font-semibold hover:text-slate-white"
          />
        </IconCol>
      );
    })}
  </>
);

const TemplateIconSingle: ComponentStory<typeof IconsMapped.logo> = () => {
  const Div = tw.div`gap-4`;

  const createIcon = (icon: IconTypes) => {
    return styled(IconsMapped[icon as IconTypes])(() => [tw`w-[200px] h-[200px] fill-violet-500`]);
  };

  const Icon = createIcon('logo');

  return (
    <Div>
      <Icon />
    </Div>
  );
};

export const All = TemplateIcon.bind({});

All.storyName = 'Icons';

export const Single = TemplateIconSingle.bind({});

All.parameters = {
  darkMode: {
    current: 'light',
  },
};

Single.storyName = 'Icon';
