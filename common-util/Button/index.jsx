import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT_SIZE, BREAK_POINT } from 'util/theme';

export const Btn = styled.button`
  outline: none;
  height: 64px;
  width: 340px;
  font-size: ${FONT_SIZE[26]};
  text-transform: uppercase;
  font-family: triakis__fontbold, sans-serif;
  transition: all 0.3s;
  line-height: normal;
  padding-top: 10px;
  clip-path: polygon(
    20.6% 0%,
    23.2% 13.6%,
    78.7% 14.3%,
    80.8% 0%,
    96.5% 0%,
    118% 100%,
    3.1% 100%,
    0% 85.7%,
    0% 0%
  );
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: ${BREAK_POINT.xl}) {
    width: auto;
    padding-left: 48px;
    padding-right: 48px;
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    padding-top: 12px;
    width: 100%;
    font-size: ${FONT_SIZE[22]};
  }

  ${({ type }) => {
    switch (type) {
      case 'disabled':
        return `
          border : 1px solid ${COLOR.GREY_1};
          background-color: ${COLOR.GREY_1};
          color: ${COLOR.BLACK};
          &:hover {
            cursor: not-allowed;
          }
        `;
      case 'invert':
        return `
          border : 1px solid transparent;
          background-color: ${COLOR.GREEN_2};
          color: ${COLOR.BLACK};
          &:hover {
            border : 1px solid ${COLOR.BLACK};
            background-color: ${COLOR.BLACK};
            color: ${COLOR.GREEN_2};
          }
        `;
      case 'outline':
        return `
          clip-path: none;
          border : 1px solid ${COLOR.BLACK};
          background-color: transparent;
          color: ${COLOR.BLACK};
          &:hover {
            background-color: ${COLOR.BLACK};
            color: ${COLOR.GREEN_2};
          }
        `;
      case 'primary':
      default:
        return `
          border : 1px solid ${COLOR.BLACK};
          background-color: ${COLOR.BLACK};
          color: ${COLOR.GREEN_2};
          &:hover {
            border : 1px solid ${COLOR.GREEN_2};
            background-color: ${COLOR.GREEN_2};
            color: ${COLOR.BLACK};
          }
        `;
    }
  }}
`;

const CustomButton = ({
  title, type, className, ...rest
}) => {
  const clsName = `btn ${className || ''}`.trim();

  return (
    <Btn type={type} className={clsName} {...rest}>
      {title}
    </Btn>
  );
};

CustomButton.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.oneOf(['disabled', 'primary', 'outline', 'invert']),
  className: PropTypes.string,
};

CustomButton.defaultProps = {
  type: 'primary',
  className: '',
};

export default CustomButton;
