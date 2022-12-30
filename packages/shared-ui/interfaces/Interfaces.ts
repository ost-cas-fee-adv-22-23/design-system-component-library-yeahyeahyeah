export interface IColorProps {
  color?: 'light' | 'medium' | 'dark' | 'violet' | 'pink' | 'white' | 'default';
}

export interface ISizeProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'default';
}

export interface ISVGProps {
  className: string;
  width: string;
  height: string;
}

export interface ISpacingProps {
  spacing?: string;
}
