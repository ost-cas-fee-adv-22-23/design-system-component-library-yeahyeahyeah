import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../../components/modal/Modal';
import { action } from '@storybook/addon-actions';
import ModalReadme from '../../docs/Modal.md';
import { Upload } from '../../components/forms/Upload';
import tw, { styled } from 'twin.macro';
import { Button } from '../../index';

export default {
  title: 'Modal/Modal',
  component: Modal,
  onClose: {
    control: false,
    table: {
      disable: true,
    },
    action: action('Modal closed'),
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <form onSubmit={() => console.log('Submit')} tw="container">
      <Upload
        label="Datei hierhin ziehen ..."
        fileDescription="JPEG oder PNG, maximal 50 MB"
        dragDescription="Jetzt loslassen ..."
        loading={false}
        fCallBack={() => console.log('Upload')}
      />
      <Row upload="upload">
        <Button
          fCallBack={() => console.log('Button clicked')}
          icon="upload"
          label="... oder Datei auswählen"
          size="large"
          type="button"
          color="slate"
          width="full"
        />
      </Row>
      <Row>
        <Button
          fCallBack={() => console.log('Button clicked')}
          icon="settings"
          label="Abbrechen"
          size="large"
          type="button"
          color="slate"
          width="full"
        />
        <Button
          fCallBack={() => console.log('Button clicked')}
          icon="settings"
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
    mt-64
  `,
  upload === 'upload' && tw`mt-24`,
]);

export const ModalStory = Template.bind({});

ModalStory.args = {
  label: 'Modal title',
  children: 'Modal content',
  isOpen: false,
};

ModalStory.parameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
    description: {
      component: ModalReadme,
    },
  },
};

ModalStory.storyName = 'Modal';
