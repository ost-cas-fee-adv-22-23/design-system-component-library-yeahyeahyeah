import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Repost, Upload } from '../icon/default_index';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import { Button } from '../button/index';

export interface IDrapAndDrop {
  label: string;
  fileDescription?: string;
  dragDescription?: string;
  loading?: boolean;
  onDropCallBack: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  errorMessage?: string;
}

export type TOnDrop = <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void;

export const FileUpload: React.FC<IDrapAndDrop> = ({
  label = 'Datei hierhin ziehen ...',
  fileDescription = 'JPEG, GIF oder PNG, maximal 50 MB',
  dragDescription = 'Jetzt loslassen ...',
  loading = false,
  onDropCallBack,
  errorMessage,
}) => {
  const onDrop: TOnDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      onDropCallBack && onDropCallBack(acceptedFiles || [], fileRejections || []);
    },
    [onDropCallBack]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    maxFiles: 1,
    maxSize: 50000000,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/gif': ['.gif'],
    },
  });

  return (
    <>
      <Figure {...getRootProps()}>
        <IconWrapper $loading={loading}>
          {loading === true ? (
            <StyledRepost />
          ) : (
            <>
              {!isDragActive ? (
                <>
                  {!errorMessage ? (
                    <>
                      <StyledUploadIcon />
                      <StyledLabel>{label}</StyledLabel>
                      <StyledDescription>{fileDescription}</StyledDescription>
                      <input {...getInputProps()} />
                    </>
                  ) : (
                    <StyledLabel isError={errorMessage ? true : false}>{errorMessage}</StyledLabel>
                  )}
                </>
              ) : (
                <StyledLabel>{dragDescription}</StyledLabel>
              )}
            </>
          )}
        </IconWrapper>
      </Figure>
      <Row upload="upload">
        <Button
          onClick={() => open()}
          icon="upload"
          label="... oder Datei auswählen"
          size="large"
          type="button"
          color="slate-300"
          width="full"
        />
      </Row>
    </>
  );
};

interface IUploadIcon {
  $loading?: boolean;
  type?: string;
}

interface IRowStyle {
  upload: string;
}

interface IStyledLabel {
  isError?: boolean;
}

const Row = styled.div(({ upload }: IRowStyle) => [
  tw`
    flex
    justify-between
    gap-16
    flex-col
    sm:(flex-row)
    mt-48
  `,
  upload === 'upload' && tw`mt-16`,
]);

const loadingSpinner = tw`
  animate-spin
  flex
  justify-center
  w-64
  h-64
  rounded-full
`;

const IconWrapper = styled.div(({ $loading }: IUploadIcon) => [
  tw`
    flex
    flex-col
    justify-center
    items-center
`,
  $loading === true && loadingSpinner,
]);

const Figure = styled.figure.attrs({ className: 'group' })(() => [
  tw`
    flex
    justify-center
    items-center
    w-full
    h-[194px]
    rounded-16
    cursor-default
    m-0
    bg-slate-100
    border-2
    border-dashed
    border-slate-200
    overflow-hidden
  `,
]);

const StyledUploadIcon = styled(Upload)(() => [tw`w-32 h-32 fill-slate-500 mb-6`]);

const StyledRepost = styled(Repost)(() => [tw`w-32 h-32 fill-slate-500`]);

const StyledLabel = styled.p(({ isError }: IStyledLabel) => [
  tw`text-slate-500 text-xl text-center [font-weight:600]`,
  isError && tw`text-red text-sm [font-weight:300]`,
]);

const StyledDescription = styled.p(() => [tw`text-slate-400 text-base text-center [font-weight:500] mt-8`]);
