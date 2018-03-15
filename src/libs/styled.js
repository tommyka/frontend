// import { css } from 'styled-components'

// const sizes = {
//   giant: 1170,
//   desktop: 992,
//   tablet: 768,
//   phone: 376
// }

// // iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)}
//     }
//   `
//   return accumulator
// }, {})

export const sizes = {
  small: '38em',
  medium: '54em',
  large: '70em'
};

export const media = {
  minSmall: `@media only screen and (min-width: ${sizes.small})`,
  minMedium: `@media only screen and (min-width: ${sizes.medium})`,
  minLarge: `@media only screen and (min-width: ${sizes.large})`
};

export const placeholderMixin = content => {
  return `
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      ${content}
    }
    &::-moz-placeholder { /* Firefox 19+ */
      ${content}
    }
    &:-ms-input-placeholder { /* IE 10+ */
      ${content}
    }
    &:-moz-placeholder { /* Firefox 18- */
      ${content}
    }
  `;
};

export const resetLink = opt => {
  return `

  `;
};

export const resetButton = opt => {
  return `
    display: inline-block;
    font-family: ${(opt && opt.fontFamily) || 'inherit'};
    font-size: ${(opt && opt.fontSize) || 'inherit'};
    font-weight: ${(opt && opt.fontWeight) || 'inherit'};
    background: ${(opt && opt.background) || 'transparent'};
    color: ${(opt && opt.color) || 'inherit'};
    border: ${(opt && opt.border) || 'none'};
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
  `;
};
