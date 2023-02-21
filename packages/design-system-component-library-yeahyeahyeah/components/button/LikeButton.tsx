import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HeartFilled, HeartOutlined } from '../icon/index';

export interface LikeButtonProps {
  quantity: number;
  favourite: boolean;
  onClick: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ quantity, favourite, onClick }) => {
  const [label, setLabel] = useState<string>('Like');
  const [count, setCount] = useState<number>(quantity || 0);
  const [isFavourite, setIsFavourite] = useState<boolean>(favourite || false);
  const [hover, setHover] = useState(false);

  const setLabels = useCallback(() => {
    if (count > 1) {
      setLabel('Likes');
    } else if (count === 1 && isFavourite === true) {
      setLabel('Liked');
    } else if ((count === 0 && !isFavourite) || (count === 1 && !isFavourite)) {
      setLabel('Like');
    }
  }, [count, isFavourite]);

  useEffect(() => {
    setLabels();
  }, [count, isFavourite, setLabels]);

  useEffect(() => {
    setCount(quantity || 0);
  }, [quantity]);

  useEffect(() => {
    setIsFavourite(favourite || false);
  }, [favourite]);

  const handleClickLike = () => {
    setIsFavourite(!isFavourite);
    setCount((count) => (isFavourite ? count - 1 : count + 1));
    onClick && onClick();
  };

  return (
    <StyledLikeButton
      onClick={handleClickLike}
      count={count}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-pressed={isFavourite}
    >
      {isFavourite ? (
        <StyledHeartFilled $hover={hover} count={count} />
      ) : (
        <StyledHeartOutlined $hover={hover} count={count} />
      )}
      {(count === 1 && isFavourite === true) || count === 0 ? '' : count} {label}
    </StyledLikeButton>
  );
};

interface InteractionButtonStyles {
  count: number;
}

interface InteractionSvgStyles {
  $hover: boolean;
  count?: number;
}

const StyledLikeButton = styled.button(({ count }: InteractionButtonStyles) => [
  tw`
  font-semibold
  leading-normal
  text-pink-600
  text-sm
  flex
  grow-0
  justify-center
  items-center
  p-12
  rounded-full
  w-auto
  outline-none
  bg-none
  hover:(text-pink-600 bg-pink-50)
  `,
  count >= 1 && tw`text-pink-900`,
  count === 0 && tw`text-slate-600 hover:(text-pink-600 bg-pink-50)`,
]);

const StyledHeartOutlined = styled(HeartOutlined)(({ $hover, count }: InteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  $hover === true && tw`fill-pink-500`,
  count === 0 && $hover === false ? tw`fill-slate-600` : tw`fill-pink-500`,
]);

const StyledHeartFilled = styled(HeartFilled)(({ $hover, count }: InteractionSvgStyles) => [
  tw`
      fill-slate-600
      h-16
      w-16
      mr-8
    `,
  $hover === true && tw`fill-pink-500`,
  count === 0 && !$hover ? tw`fill-slate-600` : tw`fill-pink-500`,
]);
