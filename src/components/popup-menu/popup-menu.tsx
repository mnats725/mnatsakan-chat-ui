import { useState } from 'react';

import './popup-menu.css';

type ProfileMenuArgs = {
  className: string;
  mountStyles: {
    mounted: Record<string, string>;
    unmounted: Record<string, string>;
  };
  time: number;
  children: React.ReactNode;
  setVisible: (isVisible: boolean) => void;
};

export const PopupMenu = ({ setVisible, children, className, mountStyles, time }: ProfileMenuArgs): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  const maskStyle = isVisible ? mountStyles.mounted : mountStyles.unmounted;

  const onMaskClick = () => {
    setIsVisible(false);
    setTimeout(() => setVisible(false), time);
  };

  return (
    <div aria-hidden onClick={onMaskClick} className='popup-menu-mask'>
      <menu style={maskStyle} className={className}>
        {children}
      </menu>
    </div>
  );
};
