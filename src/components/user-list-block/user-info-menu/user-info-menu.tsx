import { signOut } from 'firebase/auth';

import { PopupMenu } from '../../popup-menu';

import { firebaseAuth } from '../../../firebase';

import './user-info-menu.css';

type UserInfoMenuArgs = {
  setVisible: (isVisible: boolean) => void;
};

export const UserInfoMenu = ({ setVisible }: UserInfoMenuArgs): JSX.Element => {
  const maskStyle = {
    mounted: { animation: 'inMenuVisible 0.2s' },
    unmounted: { animation: 'outMenuVisible 0.2s' },
  };

  const onExit = (event: React.MouseEvent) => {
    event.stopPropagation();
    signOut(firebaseAuth);
  };

  return (
    <PopupMenu time={190} mountStyles={maskStyle} setVisible={setVisible} className='popup-menu'>
      <li aria-hidden onClick={onExit} className='unselectable'>
        Выйти
      </li>
    </PopupMenu>
  );
};
