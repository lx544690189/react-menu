import * as React from 'react';
import { IMenu } from './Interface'
import './Menu.less';
class Menu extends React.Component<IMenu, object>  {

  constructor(props: IMenu) {
    super(props);
  }

  public render() {
    const { name } = this.props;
    return (
      <div className="scorpio-menu-container">
        <ul className="scorpio-menu-list">
          <li className="scorpio-menu-item">菜单1</li>
          <li className="scorpio-menu-item">菜单2</li>
          <li className="scorpio-menu-item">菜单3</li>
          <li className="divider" />
          <li className="scorpio-menu-item">
            菜单4
            <div className="scorpio-menu-submenu-icon" />
            <div className="scorpio-menu-container scorpio-submenu">
              <ul className="scorpio-menu-list">
                <li className="scorpio-menu-item">子菜单1</li>
                <li className="scorpio-menu-item">
                  子菜单2
                <div className="scorpio-menu-submenu-icon" />
                  <div className="scorpio-menu-container scorpio-submenu">
                    <ul className="scorpio-menu-list">
                      <li className="scorpio-menu-item">子菜单1</li>
                      <li className="scorpio-menu-item">子菜单2</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="scorpio-menu-item">{name}</li>
        </ul>
      </div>
    );
  }
}

export default Menu;