import {ReactComponent as Burgericon} from '../../../assets/svg/burgericon.svg';
import {ReactComponent as CloseMenu} from '../../../assets/svg/closeMenu.svg';
import './menuButton.scss';
import React, { useState } from 'react';

const MenuButton = () => {
    const [state,setState] = useState(false);
    const func = () => {
        state ? setState(false):setState(true);
    }
 return(
     <button onClick={func} className="menuButton button-custom">
         {state?<CloseMenu/>:<Burgericon/>}

     </button>
 )
}
export default MenuButton;