import tw from 'twin.macro';

export const NavigationContainer = tw.div`
  flex
  flex-col
  sm:flex-row
  justify-center
  items-center
  container
  px-0
  pl-8
  sm:(px-16 pl-0)
`;

export const NavigationColumn = tw.div`
  flex
  justify-between
  items-center
  w-full
`;

export const NavigationRow = tw.div`
  flex
  flex-row
  justify-between
  items-center

  gap-0
  sm:gap-16
`;
