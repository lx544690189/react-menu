export interface MenuProps {
  data: object[];
  position?: {
    x: number,
    y: number,
  };
  show: boolean;
  onClose?: (e: any) => void;
  onMenuClick?: (e: any) => void;
}

export interface MenuItemProps {
  dataSource: object,
  show: boolean,
  subMenu: MenuItemProps[]
}