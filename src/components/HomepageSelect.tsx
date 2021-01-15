import React from 'react';

export interface HomepageSelectProps {
  title: string;
  image: string;
  customClass: string;
  active: boolean;
  setActive: () => void;
}

const HomepageSelect: React.FC<HomepageSelectProps> = ({
  title,
  image,
  customClass,
  active,
  setActive,
}) => {
  return (
    <div
      role="switch"
      className={`homepage__select homepage__select--${customClass} ${
        active ? 'active' : ''
      }`}
      onClick={setActive}
      aria-checked={active}
    >
      <div className="homepage__select-iamge">
        <img src={image} alt="" />
      </div>
      <h4 className="homepage__select-title">{title}</h4>
    </div>
  );
};

export default HomepageSelect;
