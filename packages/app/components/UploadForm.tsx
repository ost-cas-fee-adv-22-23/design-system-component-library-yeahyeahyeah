import React from 'react';
import { Modal, FileUpload, Button } from '@smartive-education/design-system-component-library-yeahyeahyeah';
import { FileRejection } from 'react-dropzone';
import tw, { styled } from 'twin.macro';

export interface IUploadFormProps {
  onDropCallBack: (acceptedFiles: File[], fileRejections: FileRejection[]) => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  fileUploadError: string;
}

export default function UploadForm({ onDropCallBack, showModal, setShowModal, fileUploadError }: IUploadFormProps) {
  return (
    <Modal label={'Modal'} isOpen={showModal} wide={true} onClose={() => setShowModal(false)}>
      <form onSubmit={() => console.log('Submit')} tw="container">
        <FileUpload
          label="Datei hierhin ziehen ..."
          fileDescription="JPEG oder PNG, maximal 50 MB"
          dragDescription="Jetzt loslassen ..."
          loading={false}
          onDropCallBack={onDropCallBack}
          errorMessage={fileUploadError}
        />
        <Row>
          <Button
            fCallBack={() => setShowModal(false)}
            icon="cancel"
            label="Abbrechen"
            size="large"
            type="button"
            color="slate"
            width="full"
          />
          <Button
            fCallBack={() => console.log('Send Button clicked')}
            icon="send"
            label="Speichern"
            size="small"
            type="button"
            color="violet"
            width="full"
          />
        </Row>
      </form>
    </Modal>
  );
}

export interface IRowStyle {
  upload?: string;
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
