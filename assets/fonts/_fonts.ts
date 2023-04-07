import localFont from 'next/font/local';

export const GolosFont = localFont({
  src: [
    {
      path: './GolosText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GolosText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './GolosText-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './GolosText-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GolosText-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './GolosText-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});