import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, size, editText,status,onlyIcon,icon,text,SwapIcon,...props }) => {
  
  const mode= type === "Neutral" ? "storybook-button--neutral" : type === "Reverse"? "storybook-button--reverse" : "storybook-button--default"
  const statusClass= status !== "default" ? `${mode}--${status}` : "" 
  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, mode,statusClass].join(' ')}
      {...props}
    >
      {icon && <SwapIcon size={size === "small" ? 20 : size === "x-small" ? 18 : 24} />}
      {(!onlyIcon && text) && editText}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['Default', 'Reverse', 'Neutral']),
  /**
   * show current status 
   */
  status: PropTypes.oneOf(['default', 'hover', 'disabled']),
  /**
   * show icon only 
   */
  onlyIcon: PropTypes.bool,
  /**
   * show label 
   */
  text: PropTypes.bool,
  /**
   * show icon 
   */
  icon: PropTypes.bool,

 // Icon you wish to have. Icon should be provided as an SvgComponent
  SwapIcon: PropTypes.element,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['default', 'small', 'x-small']),
  /**
   * Button contents
   */
  editText: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'Default',
  size: 'default',
  onlyIcon: false,
  text: true,
  icon: false,
  onClick: ()=>{console.log("hello")}
};
