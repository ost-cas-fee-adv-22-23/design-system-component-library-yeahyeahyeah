import React from 'react';
import tw, { styled } from 'twin.macro';
import { BottomSpacing } from '../../styles/Spacing';
import type { TmbSpacing } from '../../types/types';

export interface IMumbleProps {
  variant?: 'detailpage' | 'timeline' | 'response';
  mbSpacing?: TmbSpacing;
  children?: React.ReactNode;
}

export const Mumble: React.FC<IMumbleProps> = ({ variant = 'detailpage', mbSpacing = '16', children }) => {
  return (
    <>
      {variant === 'detailpage' && (
        <>
          <Article variant={variant} mbSpacing={mbSpacing}>
            {children}
          </Article>
        </>
      )}
      {variant === 'timeline' && (
        <Article variant={variant} mbSpacing={mbSpacing}>
          {children}
        </Article>
      )}
      {variant === 'response' && <Article mbSpacing={mbSpacing}>{children}</Article>}
    </>
  );
};

interface IArticleStyles {
  variant?: string;
  mbSpacing: string;
}

const Article = styled.article(({ variant }: IArticleStyles) => [
  tw`
    flex
    flex-col
    justify-start
    items-start
    w-full
    bg-slate-white
    py-32
    px-16
    sm:px-48
  `,
  (variant === 'timeline' || variant === 'detailpage') && tw`rounded-xl`,
  BottomSpacing,
]);
