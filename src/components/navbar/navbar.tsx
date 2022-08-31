import * as React from 'react';
import slideIn from '../dropdown/animations/slideIn/SlideIn';
import Dropdown from '../dropdown/dropdown';
import { navbar as navbarList } from '../../data/dropdowns' 

export interface INavBarProps {
}

export function NavBar (props: INavBarProps) {



  return (
    <nav>
      <div className='nav__edge-angle'/>
      <Dropdown buttonText={'Menu'} id={'navDropdown'} items={navbarList} animation={slideIn} />
    </nav>
  );
}
