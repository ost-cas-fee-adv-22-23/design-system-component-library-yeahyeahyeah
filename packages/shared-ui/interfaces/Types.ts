export interface IColorProps {
  color?: 'light' | 'medium' | 'dark' | 'violet' | 'pink' | 'white' | 'default';
}

export interface ISizeProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'default';
}
export interface Spacing {
  spacing?: '4' | '8' | '16' | '32' | '64';
}
export interface ISVGProps {
  className: string;
  width: string;
  height: string;
}
