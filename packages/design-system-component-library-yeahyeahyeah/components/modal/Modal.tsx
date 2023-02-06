import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Heading } from '../typography/Heading';
import { Cancel } from '../icons';

export interface IModalProps extends React.HtmlHTMLAttributes<HTMLLinkElement> {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  wide?: boolean;
}

export const Modal: React.FC<IModalProps> = ({ label = 'Modal title', children, isOpen = false, onClose, wide = false }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    onClose && onClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleKeyCode = (e: { keyCode: number }) => {
    if (e.keyCode === 27 || e.keyCode === 40) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyCode);
    return () => window.removeEventListener('keydown', handleKeyCode);
  }, [open, handleKeyCode]);

  return (
    <>
      <ModalDialog
        id={label}
        tabIndex={-1}
        aria-hidden={isOpen}
        aria-label={label}
        aria-labelledby={label}
        role="dialog"
        aria-modal={isOpen}
        open={open}
      >
        <ModalOverlay></ModalOverlay>
        <ModalContainer>
          <ModalWrapper>
            <ModalBox wide={wide}>
              <ModalHeader>
                <Heading tag="h3" color="white" size="default" label={label} />
                <IconWrapper>
                  <Cancel tw="fill-slate-white" onClick={handleClose} />
                </IconWrapper>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
            </ModalBox>
          </ModalWrapper>
        </ModalContainer>
      </ModalDialog>
    </>
  );
};

interface IModalStyles {
  open: boolean;
  wide: boolean;
}

const ModalDialog = styled.div(({ open }: Pick<IModalStyles, 'open'>) => [
  tw`
    relative
		z-10
  `,
  open === false && tw`hidden`,
]);

const ModalHeader = styled.div(() => [
  tw`
    flex
    flex-row
    justify-between
    items-center
    bg-violet-600
    px-32
    py-24
    text-slate-white
  `,
]);

const ModalOverlay = styled.div(() => [
  tw`
    fixed
    inset-0
    bg-slate-900
    bg-opacity-75
    transition-opacity
  `,
]);

const ModalBox = styled.div(({ wide }: Pick<IModalStyles, 'wide'>) => [
  tw`
		flex
		flex-col
    transform
    overflow-hidden
    rounded-2xl
		z-50
    bg-slate-white
		font-semibold
    transition-all
  `,
  wide === true ? tw`w-[623px]` : tw`w-[465px]`,
]);

const ModalContainer = styled.div(() => [
  tw`
    fixed
    inset-0
    overflow-y-auto
		z-10
  `,
]);

const ModalWrapper = styled.div(() => [
  tw`
    flex
    justify-center
    items-center
    h-screen
		z-20
  `,
]);

const ModalContent = styled.div(() => [
  tw`
    p-32
    overflow-y-auto
  `,
]);

const IconWrapper = styled.div(() => [
  tw`
    flex
    flex-row
    justify-center
    items-center
    transition ease-in-out delay-150
    hover:(rotate-90 transform-gpu)
    cursor-pointer
  `,
]);
