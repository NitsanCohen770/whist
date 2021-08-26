import React from 'react';

interface ButtonProps {
  label: string;
  type: 'primary' | 'success' | 'danger';
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  clickHandler,
}) => {
  return (
    <button
      onClick={clickHandler}
      type='button'
      data-toggle='modal'
      className={`btn btn-${type}`}>
      {label}
    </button>
  );
};
