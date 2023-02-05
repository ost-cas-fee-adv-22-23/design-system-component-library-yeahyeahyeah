import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Repost, Upload as UploadIcon } from '../icons/default_index';
import { useDropzone } from 'react-dropzone';

export interface IDrapAndDrop {
  label: string;
  filedescription?: string;
  dragDescription?: string;
  loading?: boolean;
  fCallBack?: () => void;
}

export const Upload: React.FC<IDrapAndDrop> = ({
  label = 'Datei hierhin ziehen ...',
  filedescription = 'JPEG oder PNG, maximal 50 MB',
  dragDescription = 'Jetzt loslassen ...',
  loading = false,
  fCallBack,
}) => {
  const handleClick = () => {
    fCallBack && fCallBack();
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('acceptedFiles', acceptedFiles);
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Figure {...getRootProps()}>
      <IconWrapper loading={loading ? 'true' : 'false'} onClick={handleClick}>
        {loading === true ? (
          <StyledRepost />
        ) : (
          <>
            {!isDragActive ? (
              <>
                <StyledUploadIcon />
                <StyledLabel>{label}</StyledLabel>
                <StyledDescription>{filedescription}</StyledDescription>
                <input {...getInputProps()} />
              </>
            ) : (
              <>
                <StyledLabel>{dragDescription}</StyledLabel>
              </>
            )}
          </>
        )}
      </IconWrapper>
    </Figure>
  );
};

interface IUploadIcon {
  loading?: string;
  type?: string;
}

const LoadingSpinner = tw`
  animate-spin
  flex
  justify-center
  w-64
  h-64
  rounded-full
`;

const IconWrapper = styled.div(({ loading }: IUploadIcon) => [
  tw`
    flex
    flex-col
    justify-center
    items-center
`,
  loading === 'true' && LoadingSpinner,
]);

const Figure = styled.figure.attrs({ className: 'group' })(() => [
  tw`
    flex
    justify-center
    items-center
    w-full
    h-[194px]
    overflow-hidden
    rounded-16
    relative
    mt-4
    ml-0
    mr-0
    mb-16
    bg-slate-100
    border
    border-dashed
    border-slate-200
  `,
]);

const StyledUploadIcon = styled(UploadIcon)(() => [tw`w-32 h-32 fill-slate-500 mb-6`]);

const StyledRepost = styled(Repost)(() => [tw`w-32 h-32 fill-slate-500`]);

const StyledLabel = styled.p(() => [tw`text-slate-500 text-xl [font-weight:600]`]);

const StyledDescription = styled.p(() => [tw`text-slate-400 text-base [font-weight:500] mt-8`]);
