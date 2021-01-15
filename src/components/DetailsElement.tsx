import React from 'react';

export interface DetailsElementProps {
  title: string;
  value: string;
}

const DetailsElement: React.FC<DetailsElementProps> = ({ title, value }) => {
  return (
    <div className="details__element">
      <span>{title}</span>
      {value}
    </div>
  );
};

export default DetailsElement;
