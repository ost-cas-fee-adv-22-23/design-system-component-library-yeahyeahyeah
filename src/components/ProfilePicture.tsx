import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import PPSmall from '../stories/assets/profile/pp_small.png';
import PPSmallHover from '../stories/assets/profile/pp_small_hov.png';
import PPMedium from '../stories/assets/profile/pp_medium.png';
import PPMediumHover from '../stories/assets/profile/pp_medium_hov.png';
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
  const [hover, setHover] = React.useState(false);
  const [img, setImg] = React.useState('');

  useEffect(() => {
    const getImg = (size: string, src: string) => {
      if (size === 'small' && !src) {
        return hover ? setImg(PPSmallHover) : setImg(PPSmall);
      } else if (size === 'small' && src) {
        return setImg(src);
      }
      if (size === 'medium' && !src) {
        return hover ? setImg(PPMediumHover) : setImg(PPMedium);
      } else if (size === 'medium' && src) {
        return setImg(src);
      }
      if (size === 'large' && !src) {
        return setImg(PPLarge);
      } else if (size === 'large' && src) {
        return setImg(src);
      }
      if (size === 'xlarge' && !src) {
        return setImg(PPXLarge);
      } else if (size === 'xlarge' && src) {
        return setImg(src);
      }
    };

    getImg(size, src);
  }, [hover, img, size, src]);

  return (
    <StyledProfilePicture
      src={img}
      alt={alt}
      size={size}
      hover={hover}
      onClick={fCallBack}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  );
};

interface StyledProfilePictureProps {
  size?: string;
  hover?: boolean;
}

const small = tw`
  w-40
  h-40
  bg-violet-200
  rounded-full
`;

const smallHover = tw`
  w-44
  h-44
  bg-violet-200
  rounded-full
`;

const medium = tw`
  w-64
  h-64
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const mediumHover = tw`
  w-70
  h-70
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const large = tw`
  w-96
  h-96
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const xLarge = tw`
  w-160
  h-160
  bg-violet-200
  rounded-full
  border-white
  border-6
`;

const getStyle = (size?: string, hover?: boolean) => {
  if (size === 'small' && hover === true) {
    return smallHover;
  } else if (size === 'small' && hover === false) {
    return small;
  }
  if (size === 'medium' && hover === true) {
    return mediumHover;
  } else if (size === 'medium' && hover === false) {
    return medium;
  }
  if (size === 'large') {
    return large;
  } else if (size === 'xlarge') {
    return xLarge;
  }
};

const StyledProfilePicture = styled.img(
  ({ size, hover }: StyledProfilePictureProps) => [getStyle(size, hover)],
);

export default ProfilePicture;
