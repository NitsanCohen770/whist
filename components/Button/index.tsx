import React from 'react';

interface ButtonProps {
  label: string;
  type: string;
}

export const Button: React.FC<ButtonProps> = ({ type, label }) => {
  return (
    <button type='button' data-toggle='modal' className={`btn btn-${type}`}>
      {label}
    </button>
  );
};
