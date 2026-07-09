// Types
import type { SelectItemKey } from "vuetify";

export interface BBtnPickerProps {
  title?: string;
  subTitle?: string;
  placeholder?: string;
  items: any[];
  itemTitle: SelectItemKey;
  itemValue: SelectItemKey;
}
