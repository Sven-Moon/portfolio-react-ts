import * as React from 'react';

export interface IHamburgerIconProps {
}

function toggleHamburger(x: any) {
  console.log('typeof:');
  console.log(typeof(x));
  x.classList.toggle("change");
}

export default class HamburgerIcon extends React.Component<IHamburgerIconProps> {
  public render() {
    return (
      <div className="container" onClick={() => toggleHamburger(this)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}
