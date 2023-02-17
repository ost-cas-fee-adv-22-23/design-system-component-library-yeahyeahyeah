import React, { FC, LinkHTMLAttributes, ReactNode } from 'react';

export type LinkProps<T> = {
  children?: ReactNode;
  newTab?: boolean;
  linkComponent?: FC<T>;
} & Omit<T, 'className' | 'target' | 'rel'>;

export const Link = <
  T extends {
    rel?: string;
    target?: string;
  } = LinkHTMLAttributes<HTMLElement>
>({
  children,
  linkComponent,
  newTab = false,
  ...props
}: LinkProps<T>) => {
  const LinkComponent = linkComponent || 'a';

  return (
    <LinkComponent {...(props as any)} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </LinkComponent>
  );
};
