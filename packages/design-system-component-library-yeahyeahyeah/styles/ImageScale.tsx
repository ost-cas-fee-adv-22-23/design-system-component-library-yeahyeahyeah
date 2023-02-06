import tw from 'twin.macro';

export const ImageScale = () => [
  tw`
		w-full
		h-full
    object-cover
    transition
    duration-300
		delay-100
    ease-in-out
    group-hover:scale-125
    group-hover:opacity-20 // override this setting in your component to opacity-100 if you don't use opaque hover image
	`,
];
