import { PopupMenu } from '../../popup-menu';

import './user-info-menu.css';

type UserInfoMenuArgs = {
  setVisible: (isVisible: boolean) => void;
};

export const UserInfoMenu = ({ setVisible }: UserInfoMenuArgs): JSX.Element => {
  const maskStyle = {
    mounted: { animation: 'inMenuVisible 0.2s' },
    unmounted: { animation: 'outMenuVisible 0.2s' },
  };

  const onMenuElementClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <PopupMenu time={190} mountStyles={maskStyle} setVisible={setVisible} className='popup-menu'>
      <li aria-hidden onClick={onMenuElementClick} className='unselectable'>
        Show User Profile
      </li>
      <li aria-hidden onClick={onMenuElementClick} className='unselectable'>
        menu 2
      </li>
      <li aria-hidden onClick={onMenuElementClick} className='unselectable'>
        menu 3
      </li>
    </PopupMenu>
  );
};
