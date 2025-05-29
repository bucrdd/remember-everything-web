export interface ItemProp {
  label: string;
  value: string;
}

export interface BSelectSheetProp {
  options?: ItemProp[];
  title?: string;
  label?: string;
  maxHeight?: string | number | undefined;

  [key: string]: any;
}