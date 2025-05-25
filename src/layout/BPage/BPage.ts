import { defineComponent, createVNode as _createVNode } from "vue";
import { VApp, VAppBar, VAppBarNavIcon, VBottomNavigation, VMain } from "vuetify/components";
import { makeVAppBarProps } from "vuetify/lib/components/VAppBar/VAppBar.js";

const props = {
  ...makeVAppBarProps(),
};

export const BPage = defineComponent({
  name: "BPage",
  props,
  setup(props, { slots }) {
    return () => {
      return _createVNode(VApp, {}, [
        _createVNode(
          VAppBar,
          {
            ...props,
            class: [props.class],
          },
          { prepend: () => _createVNode(VAppBarNavIcon) },
        ),
        slots.default && _createVNode(VMain, null, { default: () => slots.default?.() }),
        _createVNode(VBottomNavigation, null),
      ]);
    };
  },
});
