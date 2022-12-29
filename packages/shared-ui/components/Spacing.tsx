import tw from 'twin.macro';

interface ISpacingProps {
  spacing?: string;
}

export const BottomSpacing = ({ spacing }: ISpacingProps) => [
  tw`
    mb-0
  `,
  spacing === '4' && tw`mb-4`,
  spacing === '8' && tw`mb-8`,
  spacing === '16' && tw`mb-16`,
  spacing === '32' && tw`mb-32`,
  spacing === '64' && tw`mb-64`,
];
