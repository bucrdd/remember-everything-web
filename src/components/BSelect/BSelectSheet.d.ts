export type ItemProp = unknown | null;

export interface BSelectSheetProp {
  items?: ItemProp[];
  title?: string;
  label?: string;
  itemTitle?: string;
  itemValue?: string;
  maxHeight?: string | number | undefined;

  [key: string]: any;
}