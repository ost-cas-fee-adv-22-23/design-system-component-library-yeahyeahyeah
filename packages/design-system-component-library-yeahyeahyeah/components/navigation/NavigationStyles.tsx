import tw from 'twin.macro';

export const Container = tw.div`
  flex
  flex-col
  sm:flex-row
  justify-center
  items-center
  container
  px-16
`;

export const Column = tw.div`
  flex
  justify-between
  items-center
  w-full
`;

export const Row = tw.div`
  flex
  flex-row
  justify-between
  items-center

  gap-0
  sm:gap-16
`;
