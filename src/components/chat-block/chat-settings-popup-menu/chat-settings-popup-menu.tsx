import { PopupMenu } from '../../popup-menu';

import './chat-settings-popup-menu.css';

type ChatSettingsPopupMenuArgs = {
  setVisible: (isVisible: boolean) => void;
};

export const ChatSettingsPopupMenu = ({ setVisible }: ChatSettingsPopupMenuArgs): JSX.Element => {
  const mountStyles = {
    mounted: { animation: 'inChatMenuVisible ease-in 0.2s' },
    unmounted: { animation: 'outChatMenuVisible ease-out 0.2s' },
  };

  const onMenuElementClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <PopupMenu className='chat-menu' mountStyles={mountStyles} time={180} setVisible={setVisible}>
      <li aria-hidden onClick={onMenuElementClick} className='unselectable'>
        Show User Profile
      </li>
      <li aria-hidden onClick={onMenuElementClick} className='unselectable'>
        Disable notifications
      </li>
      <li aria-hidden onClick={onMenuElementClick} className='unselectable'>
        Delete Chat
      </li>
    </PopupMenu>
  );
};
