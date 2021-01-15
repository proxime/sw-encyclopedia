import React from 'react';
import { Link } from 'react-router-dom';

export interface HomepageCardProps {
  name: string;
  type: string;
}

const HomepageCard: React.FC<HomepageCardProps> = ({
  name,
  children,
  type,
}) => {
  return (
    <div className="homepage__card">
      <h3 className="homepage__card-name">{name}</h3>
      <div className="homepage__card-content">
        {children}
        <Link to={`${type}/${name}`}>More details</Link>
      </div>
    </div>
  );
};

export default HomepageCard;
