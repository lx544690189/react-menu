/**
 * menu组件
 */
export declare interface MenuProps {
  data: object[];
  position?: {
    x: number,
    y: number,
  };
  show: boolean;
  onClose?: (e: any) => void;
  onMenuClick?: (e: any) => void;
}

/**
 * 封装的menuItem数据
 */
export declare interface MenuItemProps {
  dataSource: object,
  show: boolean,
  subMenu: MenuItemProps[]
}
