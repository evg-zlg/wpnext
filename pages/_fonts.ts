import localFont from 'next/font/local';

export const GolosFont = localFont({
  src: [
    {
      path: '../assets/fonts/GolosText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GolosText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GolosText-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GolosText-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GolosText-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GolosText-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});