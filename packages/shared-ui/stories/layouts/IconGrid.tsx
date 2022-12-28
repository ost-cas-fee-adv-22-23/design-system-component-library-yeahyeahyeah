import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
interface IDefaultLayout {
  children: React.ReactElement;
}

export const IconTemplate: React.FC<IDefaultLayout> = ({ children }) => {
  return <StyledDefaultLayout>{children}</StyledDefaultLayout>;
};

const StyledDefaultLayout = styled.div(() => [
  tw`
    flex
    justify-center
    items-start
    p-32
    m-0
    bg-slate-900
    
    `,
]);
