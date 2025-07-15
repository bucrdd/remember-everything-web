export interface ItemProp {
  label: string;
  value: string;
}

export interface BSelectSheetProp {
  items?: ItemProp[];
  title?: string;
  label?: string;
  itemTitle?: string;
  itemValue?: string;
  maxHeight?: string | number | undefined;

  [key: string]: any;
}