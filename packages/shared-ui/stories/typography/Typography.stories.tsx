import React from 'react';
import tw from 'twin.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Heading } from '../../components/typography/Heading';
import { Paragraph } from '../../components';

export default {
  title: 'Typography/All Font Styles',
  component: Heading,
  decorators: [(story) => <DefaultLayout>{story()}</DefaultLayout>],
  argTypes: {
    label: {
      control: false,
      table: {
        disable: true,
      },
    },
    tag: {
      control: false,
      table: {
        disable: true,
      },
    },
    color: {
      control: false,
      table: {
        disable: true,
      },
    },
    size: {
      control: false,
      table: {
        disable: true,
      },
    },
    spacing: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Container = tw.div`flex flex-col justify-start p-16 md:p-0`;

const Template: ComponentStory<typeof Heading> = () => (
  <>
    <Container>
      <Heading tag="h1" label="Heading H1" color="light" size="default" />
      <Heading tag="h4" color="light" label="Google Font “Poppins”, Medium, Semibold & Bold" size="large" spacing="32" />
      <Heading tag="h2" color="light" label="Heading H2" size="default" />
      <Heading tag="h3" color="light" label="Heading H3" size="default" />
      <Heading tag="h4" color="light" label="Heading H4" size="default" spacing="32" />
      <Paragraph
        text="Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat
        magni."
        size="large"
        spacing="32"
      />

      <Paragraph
        text="Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. optio sed quis cumque error magni.
        Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat
        magni."
        size="medium"
        spacing="32"
      />

      <Heading tag="h4" color="light" label="Label XL" size="xlarge" spacing="8" />
      <Heading tag="h4" color="light" label="Label L" size="large" spacing="8" />
      <Heading tag="h4" color="light" label="Label M" size="medium" spacing="8" />
      <Heading tag="h4" color="light" label="Label S" size="small" spacing="8" />
    </Container>
  </>
);

export const HeadingStory = Template.bind({});

HeadingStory.storyName = 'All Font Styles';
