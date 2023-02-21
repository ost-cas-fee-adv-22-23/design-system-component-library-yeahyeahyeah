import tw, { styled, TwStyle } from 'twin.macro';

export interface UserStyles {
  variant?: string;
}

export interface RowStyles {
  gap?: string;
  spacing?: TwStyle;
  type?: string;
}

export const UserColumn = styled.div(({ variant }: UserStyles) => [
  tw`
    flex
    flex-col
    gap-4
  `,
  variant === 'small' && tw`mt-2`,
  variant === 'recommended' && tw`items-center`,
  variant === 'write' &&
    tw`
    flex
    flex-row
    items-center
  `,
]);

export const UserRow = styled.div(({ gap, spacing, type }: RowStyles) => [
  tw`
    flex
    flex-row
    justify-start
    items-center
    gap-16
  `,
  gap === 'small' && tw`gap-8`,
  spacing && spacing,
  type === 'edit' && tw`w-fit gap-0`,
]);

export const UserArticle = styled.article(() => [tw`flex flex-col p-16 bg-slate-white rounded-16`]);

export const HeadingWrapper = tw.div`
  ml-12
`;
