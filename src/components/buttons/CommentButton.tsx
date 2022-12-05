import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Icon, IIcon } from 'src/components/Icon';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  iconName: string;
  handleClick?: () => void;
}

export const CommentButton: React.FC<IButtonProps & IIcon> = ({
  label,
  iconColor = 'fill-slate-500',
  iconName = 'reply-outlined',
}) => {
  const [iconChange, setIconChange] = useState(iconName);
  const [labelChange, setLabelChange] = useState<string>(label);
  const [iconColorChange, setIconColorChange] = useState(iconColor);
  let [likes, setLikes] = useState<number>(0);
  const [fontColor, setFontColor] = useState('text-slate-500');

  const handleClick = () => {
    setIconChange('reply-filled');
    setIconColorChange('fill-violet-600');
    setLikes(likes + 1);

    if (likes >= 1) {
      setFontColor('hasAction');
      setLabelChange('Comments');
    } else {
      setLabelChange('Comment');
    }
  };

  return (
    <>
      <ButtonStyles className={fontColor} onClick={handleClick}>
        <Icon iconName={iconChange} iconColor={iconColorChange} />
        {likes === 0 ? false : `${likes}`} {labelChange}
      </ButtonStyles>
    </>
  );
};

/**
 * @Button
 * @desc Button styles
 */

const ButtonStyles = styled.button(({}) => [
  tw`
    font-semibold
    leading-normal
    text-slate-500
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
    hover:(text-violet-600 bg-violet-50)
    active:(bg-none text-violet-900)
`,
  css`
    &.hasAction {
      color: #7c3aed;
    }

    svg {
      margin-left: 0;
      margin-right: 8px;
    }

    :hover svg {
      fill: #7c3aed;
    }
  `,
]);
