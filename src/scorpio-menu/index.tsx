import * as React from 'react';
import './index.less';
import { MenuProps } from './Interface'
class Menu extends React.Component<MenuProps, object>  {
  public state: any = {
    menus: {},
  }
  // 当前菜单ref
  private scorpioMenu: HTMLDivElement;

  constructor(props: MenuProps) {
    super(props);
    const menus = {
      dataSource: props.menuData,
      show: true,
      subMenu: this.resolveMenuData(props.menuData),
    };
    this.state = {
      menus,
    }
  }

  public resolveMenuData = (menuData: any[]) => {
    const data: any[] = [];
    menuData.forEach(item => {
      const dataItem = {
        dataSource: item,
        show: false,
        subMenu: (Array.isArray(item.subMenu) && item.subMenu.length > 0)
          ? this.resolveMenuData(item.subMenu) : [],
      };
      data.push(dataItem);
    });
    return data;
  }

  public componentDidMount = () => {
    window.addEventListener('click', this.listenDocClick);
  }

  public componentWillUnmount = () => {
    window.removeEventListener('click', this.listenDocClick);
  }

  // 监听点击事件，触发onClose事件
  public listenDocClick = (e: any) => {
    const { onClose } = this.props;
    const clickScope = this.scorpioMenu.contains(e.target);
    if (!clickScope && onClose) {
      onClose(e);
    }
  }

  public onHoverMenuItem = (action: string, item: any, e: React.MouseEvent) => {
    if (action === 'enter') {
      item.show = true;
    }
    if (action === 'leave') {
      item.show = false;
    }
    this.setState({
      menu: this.state.menu,
    })
  }

  public onClickMenuItem = (item: any, e: React.MouseEvent) => {
    // 阻止react合成事件的冒泡
    e.stopPropagation();
    console.log('item: ', item);
  }

  // 渲染菜单项
  public renderMenu = (menus: any) => {
    const menuItems: any = [];
    menus.subMenu.forEach((item: any, index: number) => {
      const disabled = item.dataSource.disabled === true;
      if (item.subMenu.length > 0) {
        menuItems.push((
          <li
            className={`scorpio-menu-item ${disabled ? 'disabled' : ''}`}
            key={index}
            onMouseEnter={this.onHoverMenuItem.bind(this, 'enter', item)}
            onMouseLeave={this.onHoverMenuItem.bind(this, 'leave', item)}
            onClick={this.onClickMenuItem.bind(this, item)}
          >
            {item.dataSource.label}
            <div className="scorpio-menu-submenu-icon" />
            <div className={`scorpio-menu-submenu-container ${item.show ? '' : 'hide'}`}>
              {this.renderMenu(item)}
            </div>
          </li>
        ));
      } else {
        if (item.dataSource.divider === true) {
          menuItems.push((
            <li className="divider" key={index} />
          ));
        } else {
          menuItems.push((
            <li
              className={`scorpio-menu-item ${disabled ? 'disabled' : ''}`}
              onClick={this.onClickMenuItem.bind(this, item)}
              key={index}
            >
              {item.dataSource.label}
            </li>
          ));
        }
      }
    });
    const menuList = (
      <ul className="scorpio-menu-list">
        {menuItems}
      </ul>
    )
    return menuList;
  }

  public render() {
    const {
      position = { x: 0, y: 0 },
      show = false,
    } = this.props;

    const {
      menus,
    } = this.state;
    // style for .scorpio-menu-container
    const containerStyle = {
      display: show ? 'block' : 'none',
      left: position.x,
      top: position.y,
    }
    return (
      <div
        className='scorpio-menu-container'
        style={containerStyle}
        ref={
          ref => {
            if (ref) { this.scorpioMenu = ref }
          }
        }
      >
        {this.renderMenu(menus)}
      </div>
    );
  }
}

export default Menu;