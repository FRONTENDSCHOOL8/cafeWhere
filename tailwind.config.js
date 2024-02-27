import { range } from 'lodash';
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

// 타입을 지정하고 싶은 객체 바로 위에 타입스크립트 구문이 포함된 jsdoc 주석을 써 주셔야 타입스크립트의 지원을 받을 수 있습니다,
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: '360px',
        tablet: '768px',
        desktop: '1280px',
      },
      colors: {
        /* Color styles */
        'primary-colors': '#654E3C',
        'secondary-colors': '#9B907D',
        'secondary2-colors': '#D4C8BE',
        'secondary3-colors': '#69574F',
        'background-color': '#F6F6F6',
        'greyscale-100': '#171725',
        'greyscale-90': '#434E58',
        'greyscale-80': '#66707A',
        'greyscale-70': '#78828A',
        'greyscale-60': '#9CA4AB',
        'greyscale-50': '#BFC6CC',
        'greyscale-40': '#D1D8DD',
        'greyscale-30': '#E3E9ED',
        'greyscale-20': '#ECF1F6',
        'greyscale-10': '#FDFDFD',
        'semantic-error': '#E53935',
        'semantic-semantic': '#EED05A',
        'semantic-success': '#3D843C',
        'additional-colors-dark': '#000000',
        'additional-colors-white': '#FFFFFF',
        'additional-colors-beige-colored': '#FFF9EB',
        'additional-colors-grey': '#F8E5E2',
        'review-1': '#E76D5C',
        'review-2': '#ED897B',
        'review-3': '#EEB4AC',
        'review-4': '#EFD1CD',
        'review-5': '#EBD5D2',
      },
      fontSize: {
        ...pxToRemFunc(0, 1000), // px을 rem으로 변환
      },
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
