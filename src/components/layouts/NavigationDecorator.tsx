import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface IDefaultLayout {
  children: React.ReactElement;
}

export const NavigationDecorator: React.FC<IDefaultLayout> = ({ children }) => {
  return <StyledNavigationDecorator>{children}</StyledNavigationDecorator>;
};

const StyledNavigationDecorator = styled.div(() => [
  tw`
    flex
    flex-row
    flex-wrap
    justify-center
    items-start
    w-full
    h-full
    p-0
    m-0
  `,
]);
