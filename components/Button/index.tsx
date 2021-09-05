import React from 'react';

interface ButtonProps {
  label: string;
  cypress?: string;
  type: 'primary' | 'success' | 'danger';
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  clickHandler,
  cypress,
}) => {
  return (
    <button
      onClick={clickHandler}
      type='button'
      data-cy={cypress}
      data-toggle='modal'
      className={`btn btn-${type}`}>
      {label}
    </button>
  );
};
