import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// Button component to the first App
// import React from 'react';
// import { useState, useEffect } from 'react';

// const INITIAL_STEP = 1;

// const ButtonIncreasingValue = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//     console.log('first effect', value);
//   });
//   useEffect(() => {
//     console.log('mounting phase');
//   }, []);
// //   useEffect(() => {
// //     console.log('only once', value);
// //   }, []);
//   useEffect(() => {
//     console.log('many times', value);
//   }, [value]);

//   return (
//     <>
//       <p>Value is: {value}</p>
//           <button type="button" onClick={() => setValue(value + INITIAL_STEP)}>
//         Click me to increase by {INITIAL_STEP}
//       </button>
//     </>
//   );
// };

// export default ButtonIncreasingValue;
