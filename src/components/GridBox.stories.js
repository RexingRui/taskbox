import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import GridBox from "./GridBox.vue";

export default {
  title: "GridBox",
  excludeStories: /.*Data$/,
  decorators: [withKnobs]
};

export const actionData = {
  onSendGrids: action("onSendGrids")
};

export const gridData = {
  width: 100,
  height: 100,
  rows: 4,
  columns: 4
};

const gridTemplate = `<grid-box :grid-config="gridConfig" @sendGrids="onSendGrids" />`;

export const Default = () => ({
  template: gridTemplate,
  components: { GridBox },
  props: {
    gridConfig: {
      type: Object,
      default: object("gridConfig", { ...gridData })
    }
  },
  methods: actionData
});

export const SixRowSixCol = () => ({
  template: gridTemplate,
  components: { GridBox },
  data() {
    return {
      gridConfig: {
        width: 140,
        height: 140,
        rows: 6,
        columns: 6
      }
    };
  },
  methods: actionData
});
