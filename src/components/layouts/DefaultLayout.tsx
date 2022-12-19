import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface IDefaultLayout {
  children: React.ReactElement;
}

export const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return <StyledDefaultLayout>{children}</StyledDefaultLayout>;
};

const StyledDefaultLayout = styled.div(() => [
  tw`
    container
    mx-auto

    flex
    flex-col
    justify-center
    items-center
    w-full
    p-0
    pt-32
  `,
]);
