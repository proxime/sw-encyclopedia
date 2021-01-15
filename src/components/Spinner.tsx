import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <Loader type="Oval" color="#ffffff" height={100} width={100} />
    </div>
  );
};

export default Spinner;
