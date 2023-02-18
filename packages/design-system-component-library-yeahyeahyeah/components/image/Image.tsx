import { FC, ImgHTMLAttributes } from 'react';

export type ImageProps<T> = {
  imageComponent?: FC<T>;
} & T;

export function Image<T = ImgHTMLAttributes<HTMLImageElement>>({
  imageComponent,
  ...props
}: Omit<ImageProps<T>, 'className'>) {
  const ImageComponent = imageComponent || 'img';

  return <ImageComponent {...(props as any)} />;
}
