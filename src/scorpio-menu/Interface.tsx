export interface MenuProps {
  menuData: object[];
  position?: {
    x: number,
    y: number,
  };
  show: boolean;
  onClose: (e: any) => void;
}