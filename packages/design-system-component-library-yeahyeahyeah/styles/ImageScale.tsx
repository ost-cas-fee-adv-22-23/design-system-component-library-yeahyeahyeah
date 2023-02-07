import tw from 'twin.macro';

export interface IImageScaleProps {
  opacityLevel?: string;
}

export const ImageScale = ({ opacityLevel }: IImageScaleProps) => [
  tw`
  w-full
  h-full
  object-cover
  transition
  duration-300
  delay-100
  ease-in-out
  group-hover:scale-125
  group-hover:opacity-80
  `,
  opacityLevel === '0' && tw`group-hover:opacity-0`,
  opacityLevel === '5' && tw`group-hover:opacity-5`,
  opacityLevel === '10' && tw`group-hover:opacity-10`,
  opacityLevel === '20' && tw`group-hover:opacity-20`,
  opacityLevel === '25' && tw`group-hover:opacity-25`,
  opacityLevel === '30' && tw`group-hover:opacity-30`,
  opacityLevel === '40' && tw`group-hover:opacity-40`,
  opacityLevel === '50' && tw`group-hover:opacity-50`,
  opacityLevel === '60' && tw`group-hover:opacity-60`,
  opacityLevel === '70' && tw`group-hover:opacity-70`,
  opacityLevel === '75' && tw`group-hover:opacity-75`,
  opacityLevel === '80' && tw`group-hover:opacity-80`,
  opacityLevel === '90' && tw`group-hover:opacity-90`,
  opacityLevel === '100' && tw`group-hover:opacity-100`,
];
