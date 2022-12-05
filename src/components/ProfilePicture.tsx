import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import PPSmall from '../stories/assets/profile/pp_small.png';
import PPMedium from '../stories/assets/profile/pp_medium.png';
import PPLarge from '../stories/assets/profile/pp_large.png';
import PPXLarge from '../stories/assets/profile/pp_xlarge.png';

interface IProfilePictureProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  src?: string;
  alt: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  fCallBack?: () => void;
}

const ProfilePicture: React.FC<IProfilePictureProps> = ({
  src = '',
  alt = '',
  size = 'small',
  fCallBack,
}) => {
  const img =
    src ||
    (size === 'small' && PPSmall) ||
    (size === 'medium' && PPMedium) ||
    (size === 'large' && PPLarge) ||
    (size === 'xlarge' && PPXLarge) ||
    '';

  return (
    <StyledProfilePicture src={img} alt={alt} size={size} onClick={fCallBack} />
  );
};

interface StyledProfilePictureProps {
  size?: string;
}

const sizeSmall = tw`
  w-40
  bg-violet-200
  rounded-full
`;

const sizeMedium = tw`
  w-64
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const sizeLarge = tw`
  w-96
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const sizeXLarge = tw`
  w-160
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const StyledProfilePicture = styled.img(
  ({ size }: StyledProfilePictureProps) => [
    (size === 'small' && sizeSmall) ||
      (size === 'medium' && sizeMedium) ||
      (size === 'large' && sizeLarge) ||
      (size === 'xlarge' && sizeXLarge),
  ],
);

export default ProfilePicture;
